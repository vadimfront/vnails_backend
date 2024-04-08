import express, { Request, Response } from "express";
import payload from "payload";
import { mediaManagement } from "payload-cloudinary-plugin";
import session from "express-session";
import genFunc from "connect-pg-simple";
import passport from "passport";
import jwt from "jsonwebtoken";
import GoogleOAuthStrategy from "./utils/GoogleOAuthStrategy";
import getCookieExpiration from "payload/dist/utilities/getCookieExpiration";
import flash from "connect-flash";
import { Customer } from "./payload-types";
import { Options } from "payload/dist/collections/operations/local/findByID";

require("dotenv").config();
const app = express();
app.use(express.json());
passport.use("googleOauth", GoogleOAuthStrategy);
// app.use(
//   mediaManagement({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_CLOUD_KEY,
//     api_secret: process.env.API_CLOUD_SECRET,
//   })
// );
app.use(flash());

app.get("/", (_, res) => {
  res.redirect("/admin");
});

interface UserReqestBody {
  id: number;
  email: string;
}

interface CustomRequest<B> extends Request {
  user: B;
}

const PostgresqlStore = genFunc(session);
const sessionStore = new PostgresqlStore({
  conString: process.env.DATABASE_URI,
  createTableIfMissing: true,
});

app.get("/oauth2/authorize", passport.authenticate("googleOauth"));

app.get(
  "/oauth/google/callback",

  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.PAYLOAD_SECRET || "default_secret",
    store: sessionStore,
  }),

  passport.authenticate("googleOauth", {
    failureRedirect: "/dashboard",
  }),

  function (req: CustomRequest<UserReqestBody>, res: Response): void {
    const collectionConfig = payload.collections["customers"].config;

    let fieldsToSign = {
      email: req.user.id,
      id: req.user.id,
      collection: "customers",
    };

    const token = jwt.sign(fieldsToSign, payload.secret, {
      expiresIn: collectionConfig.auth.tokenExpiration,
    });

    res.cookie(`${payload.config.cookiePrefix}-token`, token, {
      path: "/",
      httpOnly: true,
      expires: getCookieExpiration(collectionConfig.auth.tokenExpiration),
      secure: collectionConfig.auth.cookies.secure,
      sameSite: collectionConfig.auth.cookies.sameSite,
      domain: collectionConfig.auth.cookies.domain || undefined,
    });

    res.redirect("/dashboard");
  }
);

passport.serializeUser((user: UserReqestBody, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  const data: Options<"customers"> = {
    collection: "customers",
    id: id,
  };

  try {
    const user = await payload.findByID(data);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3002);
};

start();

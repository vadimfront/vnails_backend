import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import { selectPlugin } from "payload-query";

import Pages from "./collections/Pages";
import MegaMenu from "./globals/MegaMenu";
import Categories from "./collections/Categories";
import { Media } from "./collections/Media";
import BeforeLogin from "./components/BeforeLogin";
import Admins from "./collections/Admins";
import Customers from "./collections/Customers";

export default buildConfig({
  admin: {
    user: "admins",
    bundler: webpackBundler(),
    //components: { afterLogin: [BeforeLogin] },
  },

  editor: slateEditor({}),
  collections: [Admins, Customers, Pages, Categories, Media],
  globals: [MegaMenu],

  localization: {
    locales: [
      {
        label: {
          en: "English",
          he: "אנגלית",
          ru: "Английский",
        },
        code: "en",
      },
      {
        label: {
          en: "Hebrew",
          he: "עברית",
          ru: "Иврит",
        },
        code: "he",
        rtl: true,
      },
      {
        label: {
          en: "Russian",
          he: "רוסית",
          ru: "Русский",
        },
        code: "ru",
      },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    disable: true,
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud(), selectPlugin()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});

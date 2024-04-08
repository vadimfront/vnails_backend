import { SlugField } from "@nouance/payload-better-fields-plugin";

const slug = [
  ...SlugField(
    {
      name: "slug",
      admin: {
        position: "sidebar",
      },
      unique: false,
    },
    {
      useFields: ["slugName"],
    }
  ),
];

export default slug;

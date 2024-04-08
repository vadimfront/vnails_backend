import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",

  labels: {
    singular: "Media",
    plural: "Media",
  },

  upload: {
    staticURL: "/assets",
    staticDir: "assets",
  },

  fields: [
    {
      name: "alt",
      label: "Alt",
      type: "text",
      required: true,
      localized: true,
    },
  ],
};

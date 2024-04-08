import { MegaMenu } from "./../payload-types";
import { CollectionConfig } from "payload/types";
import HeroBlock from "../blocks/HeroBlock";
import slug from "../fields/slug";
import AboutUsBlock from "../blocks/AboutUsBlock";
import ServicesBlock from "../blocks/ServicesBlock";
import payload from "payload";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },

  labels: {
    singular: "Page",
    plural: "Pages",
  },

  versions: {
    drafts: true,
  },
  // access: {
  //   read: () => true,
  // },
  fields: [
    {
      name: "slugName",
      type: "text",
      label: "Page name only in English for slug field",
      admin: {
        position: "sidebar",
      },
      required: true,
    },

    ...slug,
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      localized: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      admin: {
        initCollapsed: true,
      },

      blocks: [HeroBlock, AboutUsBlock, ServicesBlock],
    },
  ],
};

export default Pages;

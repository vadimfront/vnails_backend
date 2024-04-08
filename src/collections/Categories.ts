import { CollectionConfig } from "payload/types";
import slug from "../fields/slug";

const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  admin: {
    useAsTitle: "categoryName",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "categoryName",
      label: "Category name",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "slugName",
      type: "text",
      label: "Category name only in English for slug field",
      admin: {
        position: "sidebar",
      },
      required: true,
    },
    ...slug,
  ],
};

export default Categories;

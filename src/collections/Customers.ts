import { CollectionConfig } from "payload/types";

const Customers: CollectionConfig = {
  slug: "customers",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "Users",
  },

  access: { read: () => true },

  fields: [
    {
      name: "sub",
      label: "sub",
      type: "text",
      admin: { readOnly: true },
      access: { update: () => false },
    },
    {
      name: "pictureURL",
      label: "pictureURL",
      type: "text",
      admin: { readOnly: true },
      access: { update: () => false },
    },
  ],
};

export default Customers;

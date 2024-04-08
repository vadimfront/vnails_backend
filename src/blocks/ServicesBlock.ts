import { Block } from "payload/types";

const ServicesBlock: Block = {
  slug: "servicesBlock",
  interfaceName: "Services",
  fields: [
    {
      name: "services_list",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          localized: true,
          required: true,
        },
        {
          name: "description",
          type: "text",
          label: "Description",
          localized: true,
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Icon",
          required: true,
        },
      ],
    },
    {
      name: "serviceImage",
      type: "upload",
      relationTo: "media",
      label: "Service Image",
      //required: true,
    },
  ],
};

export default ServicesBlock;

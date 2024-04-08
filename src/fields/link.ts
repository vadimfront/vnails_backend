import payload from "payload";
import { Field } from "payload/types";

const link: Field = {
  name: "link",
  type: "array",
  label: false,
  fields: [
    {
      name: "type",
      type: "radio",
      options: [
        {
          label: "Custom URL",
          value: "custom",
        },
        {
          label: "Page",
          value: "page",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "page",
      label: "Page",
      type: "relationship",
      relationTo: "pages",
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === "page",
      },
    },
    {
      name: "label",
      label: "Label",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === "custom",
      },
    },
    {
      name: "url",
      label: "Custom URL",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === "custom",
      },
    },
  ],
};

export default link;

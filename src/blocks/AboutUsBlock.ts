import { Block } from "payload/types";
import { Media } from "../collections/Media";

const AboutUsBlock: Block = {
  slug: "aboutUsBlock",
  interfaceName: "About Us",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      localized: true,
    },
    {
      name: "shortDescription",
      type: "richText",
      label: "Short Description",
      localized: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: Media.slug,
      required: true,
      localized: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "btnText",
          type: "text",
          label: "Text button",
          localized: true,
        },
        {
          name: "btnLink",
          type: "text",
          label: "Link",
          localized: true,
        },
        {
          name: "isBtnShown",
          label: "Visibility switcherVisibility switcher of the button",
          type: "radio",
          defaultValue: "false",
          options: [
            {
              label: "show",
              value: "true",
            },
            {
              label: "show",
              value: "false",
            },
          ],
        },
      ],
    },
  ],
};

export default AboutUsBlock;

import { Block } from "payload/types";
import { Media } from "../collections/Media";

const HeroBlock: Block = {
  slug: "hero",
  interfaceName: "Hero",

  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      localized: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      localized: true,
    },
    {
      name: "backgroundImage",
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

export default HeroBlock;

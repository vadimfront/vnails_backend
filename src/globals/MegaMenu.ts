import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const MegaMenu: GlobalConfig = {
  slug: "mega-menu",
  access: {
    read: () => true,
  },

  // fields: [
  //   {
  //     name: "nav",
  //     type: "array",
  //     label: false,

  //     fields: [link],
  //   },
  // ],
  fields: [
    {
      name: "nav",
      type: "group",
      label: "Top navigation",
      //interfaceName: "Top navigation",

      fields: [link],
    },
  ],
};

export default MegaMenu;

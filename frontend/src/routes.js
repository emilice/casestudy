import Consumables from "layouts/consumables"

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Sarf Malzeme Tablosu",
    key: "consumables",
    icon: <Icon fontSize="small">table</Icon>,
    route: "/consumables",
    component: <Consumables />,
  },
];

export default routes;

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Sidebar>
      <Menu>
        <MenuItem> Home </MenuItem>
        <MenuItem> Admin </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Navigation;

import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import "./Menu.scss";

const Menu = () => {
  return (
    <Paper sx={{ width: "100%" }} className="menu">
      <MenuList className="p-0 rounded">
        <MenuItem className="p-0">
          <ListItemIcon className="p-3 me-3 bg-red ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              className="bi bi-list "
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </ListItemIcon>
          <ListItemText>ALL Categories</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default Menu;

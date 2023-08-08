import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutLinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutLinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutLinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutLinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutLinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutLinedIcon from "@mui/icons-material/MapOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import user from "../../assets/user.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}></Link>
    </MenuItem>
  );
};

const SidebarPanel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: `transparent !important`,
        },
        "& .pro-inner-item": {
          padding: `5px 35px 5px 20px !important`,
        },
        "& .pro-inner-item:hover": {
          color: `#868dfb !important`,
        },
        "& .pro-menu-item-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Logo And Menu Icon  */}

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={<MenuOutLinedIcon />}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  Admin Dashboard
                </Typography>
              </Box>
            )}
          </MenuItem>

          {/* User  */}

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={user}
                  style={{ cursor: "pointer", borderRadius: "50" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jatin
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Admin Dashboard
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items  */}

          <Box pl={isCollapsed ? null : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Info"
              to="/contacts"
              icon={<ContactsOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoice Balances"
              to="/invoices"
              icon={<ReceiptOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calender"
              to="/calender"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutLinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SidebarPanel;

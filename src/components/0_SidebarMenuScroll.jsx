import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Fab, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import TranslateIcon from '@mui/icons-material/Translate';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BlockIcon from '@mui/icons-material/Block';
import NightlightIcon from '@mui/icons-material/Nightlight';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SettingsIcon from '@mui/icons-material/Settings';
import ClearIcon from '@mui/icons-material/Clear';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SidebarMenuScroll = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* Floating Action Button */}
      <Fab color="primary" onClick={toggleDrawer} style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <MenuIcon />
      </Fab>

      {/* Sidebar Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List style={{ width: '250px', height: '100%', overflowY: 'auto' }}>
          {/* List of Menu Items */}
          <ListItem button={true}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Cari di halaman" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><ZoomInIcon /></ListItemIcon>
            <ListItemText primary="Zoom" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><ShareIcon /></ListItemIcon>
            <ListItemText primary="Bagikan" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><TranslateIcon /></ListItemIcon>
            <ListItemText primary="Terjemahkan" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><DesktopWindowsIcon /></ListItemIcon>
            <ListItemText primary="Situs desktop" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><BlockIcon /></ListItemIcon>
            <ListItemText primary="Block ads" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><NightlightIcon /></ListItemIcon>
            <ListItemText primary="Turn on night mode" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><DeveloperModeIcon /></ListItemIcon>
            <ListItemText primary="Developer tools" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Setelan" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><ClearIcon /></ListItemIcon>
            <ListItemText primary="Clear data" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Exit" />
          </ListItem>
          <Divider />
          {/* More Items */}
          <ListItem button={true}>
            <ListItemIcon><ZoomInIcon /></ListItemIcon>
            <ListItemText primary="Zoom Lanjutan" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Cari Lanjutan" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SidebarMenuScroll;


import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer} color="inherit">
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer} transitionDuration={500}>
        <List style={{ width: '250px' }}>
          <ListItem button>
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText primary="React Developer Tools" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><YouTubeIcon /></ListItemIcon>
            <ListItemText primary="Pengontrol Kecepatan Video" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText primary="Wappalyzer - Technology" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Automa" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><YouTubeIcon /></ListItemIcon>
            <ListItemText primary="YouTube BG" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ZoomInIcon /></ListItemIcon>
            <ListItemText primary="Tab Baru" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><HistoryIcon /></ListItemIcon>
            <ListItemText primary="Tab Samaran Baru" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><HistoryIcon /></ListItemIcon>
            <ListItemText primary="Histori" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><DownloadIcon /></ListItemIcon>
            <ListItemText primary="Download" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BookmarkIcon /></ListItemIcon>
            <ListItemText primary="Bookmark" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ZoomInIcon /></ListItemIcon>
            <ListItemText primary="Zoom" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SidebarMenu;


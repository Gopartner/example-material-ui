import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Fab, Divider, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';

const SidebarMenuScroll = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // User yang sedang login
  const [isAdmin, setIsAdmin] = useState(false);

  // Fetch user data yang sedang login (misalnya id 1 atau 2 untuk testing)
  useEffect(() => {
    axios.get('http://localhost:3001/users/1')  // Ganti dengan user ID yang ingin dicoba
      .then(response => {
        setCurrentUser(response.data);
        setIsAdmin(response.data.isAdmin);
      });
  }, []);

  // Fetch menu items dari db.json dan filter berdasarkan role
  useEffect(() => {
    axios.get('http://localhost:3001/menuItems')
      .then(response => {
        const items = response.data.filter(item => !item.adminOnly || (item.adminOnly && isAdmin));
        setMenuItems(items);
      });
  }, [isAdmin]);

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
          {/* Render dynamic menu items */}
          {menuItems.map((item) => (
            <ListItem button key={item.id}>
              <ListItemIcon>{React.createElement(require('@mui/icons-material')[item.icon])}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <Divider />
        </List>
      </Drawer>

      {/* User Information */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h6">
          {currentUser ? `Logged in as: ${currentUser.nama} (${isAdmin ? 'Admin' : 'User'})` : 'Loading...'}
        </Typography>
      </div>
    </div>
  );
};

export default SidebarMenuScroll;


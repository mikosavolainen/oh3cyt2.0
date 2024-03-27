import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ titles, setLanguage, language }) => {
  const [anchorEl, setAnchorEl] = useState(null); // Tilamuuttuja ankkurielementille
  const handleMenuOpen = (event) => { // Avaa valikon
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => { // Sulkee valikon
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Valikkoikonin asettaminen vasempaan yläkulmaan */}
        <IconButton
          aria-label="menu"
          aria-controls="nav-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        
        {/* Dropdown-valikko */}
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <a href="https://github.com/mikosavolainen" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">GitHub</a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="https://www.qrz.com/db/OH3CYT" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">QRZ</a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="https://www.eQSL.cc/Member.cfm?OH3CYT" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">eQSL</a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="https://rx.oh3cyt.com" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">OH3CYT WebSdr</a>
          </MenuItem>
        </Menu>
        
        {/* Kielinapit oikeaan yläkulmaan */}
        <div style={{ flexGrow: 1 }} />
        <div className="col-md-6 text-right">
          <Button color="inherit" onClick={() => setLanguage('fi')}>Suomi</Button>
          <Button color="inherit" onClick={() => setLanguage('en')}>English</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

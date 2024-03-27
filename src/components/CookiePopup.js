import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const CookiePopup = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookieConsent') === 'true';
    setOpen(!cookiesAccepted);
  }, []);

  const handleClose = () => {
    localStorage.setItem('cookieConsent', 'true');
    setOpen(false);
  };

  const handleAccept = () => {
    handleClose();
  };

  return (
    <Dialog open={open} disableEscapeKeyDown disableBackdropClick>
      <DialogTitle>Cookie usage</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This website uses cookies to ensure the best experience.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAccept} color="primary">
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookiePopup;

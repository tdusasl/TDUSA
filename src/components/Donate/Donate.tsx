import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Donate.css";

const Donate = () => {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
      };
  return (
    <div className="donate-container">
      <Button variant="outlined" onClick={handleClickOpen}>
        Donate
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            Donate
            <div>Hello</div>
        </DialogTitle>
        <DialogContent className="content">


          <DialogContentText id="alert-dialog-description"></DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Donate;

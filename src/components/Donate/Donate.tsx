import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Donate.css";
import { BiDonateHeart } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

const Donate = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
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
          <div className="donate-content">
            <div className="donate-text">
              <h3>TO MAKE YOUR VALUABLE CONTRIBUTION </h3>
              <br />
              <br />
              PLEASE CONTACT US :
              <div>
                Email :{" "}
                <a
                  target="_blank"
                  href="mailto:tdusa.sl@gmail.com"
                  rel="noreferrer"
                >
                  tdusa.sl@gmail.com
                </a>{" "}
              </div>
              <div>
                Whatsapp :{" "}
                <a
                  target="_blank"
                  href="https://wa.me/94742821247?text=Hello!%20Welcome%20to%20TDUSA"
                  rel="noreferrer"
                >
                  +94742821247
                </a>{" "}
              </div>
            </div>
            <div className="donate-icon">
              <BiDonateHeart />
            </div>
          </div>
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

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./Results.css";
import Papa from "papaparse";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { useState, useEffect } from "react";

const Results = () => {
  const resultUri = process.env.REACT_APP_RESULTS!;
  const [result, setResult] = useState<Result["data"]>();
  const [open, setOpen] = useState(false);
  const [stream, setStream] = useState("");
  const [indexNo, setIndexNo] = useState("");

  const handleStreamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setStream(event.target.value);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setIndexNo(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const streams = [
    {
      value: "Bio",
      label: "Biology",
    },
    {
      value: "Maths",
      label: "Maths",
    },
    {
      value: "Commerce",
      label: "Commerce",
    },
    {
      value: "Arts",
      label: "Arts",
    },
    {
      value: "Technology",
      label: "Technology",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };
  interface Result {
    data: {
      Name: string;
      IndexNo: string;
      School: string;
      Stream: string;
      Biology: string;
      Chemistry: string;
      Mathematics: string;
      Physics: string;
      Economics: string;
      BusinessStudies: string;
      InformationTechnology: string;
      Accounting: string;
      Rank: string;
      ZScore: string;
    };
  }

  const fetchResults = () => {
    Papa.parse(resultUri, {
      download: true,
      header: true,
      step: function (row: Result, parser) {
        // console.log("Row:", row.data);
        if (row.data.IndexNo === indexNo) {
          console.log("Row:", row.data);
          setResult(row.data);
          parser.abort();
        }
      },
      complete: function (results) {
        console.log("Fetched all Data");
        // console.log(results.data);
      },
    });
  };
  useEffect(() => {
    console.log(result);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Results works</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Check your Results
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Select your stream and Enter Index number"}
        </DialogTitle>
        <DialogContent className="content">
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Index Number</InputLabel>
            <Input
              id="component-simple"
              value={indexNo}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl variant="standard">
            <TextField
              className="input"
              id="outlined-select-stream"
              select
              label="Stream"
              value={stream}
              onChange={handleStreamChange}
              helperText="Please select your stream"
            >
              {streams.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <DialogContentText id="alert-dialog-description"></DialogContentText>
          {result && <div>
            <div>Stream: {result?.Stream}</div>
            <div>Name: {result?.Name}</div>
            <div>IndexNo: {result?.IndexNo}</div>
            {result?.Biology && <div>Biology: {result?.Biology}</div>}
            {result?.Chemistry && <div>Chemistry: {result?.Chemistry}</div>}
            {result?.Mathematics && <div>Mathematics: {result?.Mathematics}</div>}
            {result?.Physics && <div>Physics: {result?.Physics}</div>}
            {result?.Economics && <div>Economics: {result?.Economics}</div>}
            {result?.BusinessStudies && <div>BusinessStudies: {result?.BusinessStudies}</div>}
            {result?.InformationTechnology && <div>InformationTechnology: {result?.InformationTechnology}</div>}
            {result?.Accounting && <div>Accounting: {result?.Accounting}</div>}
            {result?.Rank && <div>Rank: {result?.Rank}</div>}
            <div>ZScore:{result?.ZScore}</div>
          </div>}
        </DialogContent>
        <DialogActions>
          <Button onClick={fetchResults}>Submit</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Results;

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./Results.css";
import Papa from "papaparse";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Results = () => {
  const bioResultUri = process.env.REACT_APP_RESULTS_BIO!;
  const mathsResultUri = process.env.REACT_APP_RESULTS_MATHS!;
  const commerceResultUri = process.env.REACT_APP_RESULTS_COMMERCE!;
  const technologyResultUri = process.env.REACT_APP_RESULTS_TECHNOLOGY!;
  const artsResultUri = process.env.REACT_APP_RESULTS_ARTS!;
  const [result, setResult] = useState<Result["data"]>();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [stream, setStream] = useState("");
  const [indexNo, setIndexNo] = useState("");
  const examYear = process.env.REACT_APP_EXAM_YEAR!;

  const handleStreamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStream(event.target.value);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    setError(undefined)
    setResult(undefined);
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
    setResult(undefined);
    setError(undefined)
    var uri = "";
    switch (stream) {
      case "Bio":
        uri = bioResultUri;
        break;
      case "Maths":
        uri = mathsResultUri;
        break;
      case "Commerce":
        uri = commerceResultUri;
        break;
      case "Arts":
        uri = artsResultUri;
        break;
      case "Technology":
        uri = technologyResultUri;
        break;
      default:
        window.alert("Please select a stream");
        return;
    }
    if(indexNo.length === 0) {
      window.alert("Please enter an index number");
      return;
    }
    setLoading(true);
    Papa.parse(uri, {
      download: true,
      header: true,
      step: function (row: Result, parser) {
        if (row.data.IndexNo === indexNo) {
          setResult(row.data);
          setLoading(false);
          parser.abort();
        }
      },
      complete: function (results) {
        setLoading(false);
        console.log("Fetched all Data");
        setError("No results found for this index number");
      },
    });
  };
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <div className="result-container">
      <Button variant="outlined" onClick={handleClickOpen}>
        Results
      </Button>
      <Dialog
        className=""
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialog-box">
          <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
            {"TDUSA Pilot Examination Results - " + examYear}
          </DialogTitle>
          <DialogContent className="dialog-content">
            <FormControl variant="standard">
              <TextField
                style={{ margin: "10px" }}
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
            <FormControl style={{ margin: "10px" }} variant="standard">
              <InputLabel htmlFor="component-simple">Index Number</InputLabel>
              <Input
                id="component-simple"
                value={indexNo}
                onChange={handleInputChange}
              />
            </FormControl>
            {(error&&!result) && <div className="result-error">{error}</div>}

            <DialogContentText id="alert-dialog-description"></DialogContentText>
            {result && (
              <div className="result">
                <div>
                  <div>Stream :</div> {result?.Stream}
                </div>
                <div>
                  <div>Name :</div> {result?.Name}
                </div>
                <div>
                  <div>IndexNo :</div> {result?.IndexNo}
                </div>
                {result?.Biology && (
                  <div>
                    <div>Biology :</div> {result?.Biology}
                  </div>
                )}
                {result?.Chemistry && (
                  <div>
                    <div>Chemistry :</div> {result?.Chemistry}
                  </div>
                )}
                {result?.Mathematics && (
                  <div>
                    <div>Mathematics :</div> {result?.Mathematics}
                  </div>
                )}
                {result?.Physics && (
                  <div>
                    <div>Physics :</div> {result?.Physics}
                  </div>
                )}
                {result?.Economics && (
                  <div>
                    <div>Economics :</div> {result?.Economics}
                  </div>
                )}
                {result?.BusinessStudies && (
                  <div>
                    <div>BusinessStudies :</div> {result?.BusinessStudies}
                  </div>
                )}
                {result?.InformationTechnology && (
                  <div>
                    <div>InformationTechnology :</div>{" "}
                    {result?.InformationTechnology}
                  </div>
                )}
                {result?.Accounting && (
                  <div>
                    <div>Accounting :</div> {result?.Accounting}
                  </div>
                )}
                {result?.Rank && (
                  <div>
                    <div>Rank :</div> {result?.Rank}
                  </div>
                )}
                <div>
                  <div>ZScore :</div>
                  {result?.ZScore}
                </div>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={fetchResults}>Submit</Button>
            <Button variant="outlined" color="error" onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </div>
        <Box sx={{ width: "100%" }}>
          {loading && <LinearProgress />}
        </Box>
      </Dialog>
    </div>
  );
};

export default Results;

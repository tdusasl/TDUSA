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
  const eTechnologyResultUri = process.env.REACT_APP_RESULTS_ETECHNOLOGY!;
  const bioTechnologyResultUri = process.env.REACT_APP_RESULTS_BTECHNOLOGY!;
  const [bioResult, setBioResult] = useState<BioResult["data"]>();
  const [mathsResult, setMathsResult] = useState<MathsResult["data"]>();
  const [commerceResult, setCommerceResult] = useState<ComResult["data"]>();
  const [eTechnologyResult, setETechnologyResult] = useState<ETechResult["data"]>();
  const [bioTechnologyResult, setBioTechnologyResult] =useState<BTechResult["data"]>();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [stream, setStream] = useState("");
  const [indexNo, setIndexNo] = useState("");
  const examYear = process.env.REACT_APP_EXAM_YEAR!;

  const handleStreamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStream(event.target.value);
    setIndexNo("");
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
      value: "BioTechnology",
      label: "Bio Technology",
    },
    {
      value: "ETechnology",
      label: "E Technology",
    },
  ];

  const setResultsUndefined = () => {
    setBioResult(undefined);
    setMathsResult(undefined);
    setCommerceResult(undefined);
    setETechnologyResult(undefined);
    // setBioTechnologyResult(undefined);
  };
  const handleClose = () => {
    setError(undefined);
    setResultsUndefined();
    setOpen(false);
  };
  interface BioResult {
    data: {
      Name: string;
      IndexNo: string;
      Biology: string;
      Chemistry: string;
      Physics: string;
      Rank: string;
      ZScore: string;
    };
  }
  interface MathsResult {
    data: {
      Name: string;
      IndexNo: string;
      Option: string;
      OptionRes: string;
      Mathematics: string;
      Physics: string;
      Rank: string;
      ZScore: string;
    };
  }
  interface ComResult {
    data: {
      Name: string;
      IndexNo: string;
      Economics: string;
      BusinessStudies: string;
      Accounting: string;
      Rank: string;
    };
  }
  interface ETechResult {
    data: {
      Name: string;
      IndexNo: string;
      Etech: string;
      SFT: string;
      Option: string;
      OptionRes: string;
      Rank: string;
      ZScore: string;
    };
  }
  interface BTechResult {
    data: {
      Name: string;
      IndexNo: string;
      Option: string;
      OptionRes: string;
      SFT: string;
      Btech: string;
      Rank: string;
      ZScore: string;
    };
  }

  const fetchResults = () => {
    setResultsUndefined();
    setError(undefined);
    var uri = "";
    switch (stream) {
      case "Bio":
        uri = bioResultUri;
        setLoading(true);
        Papa.parse(uri, {
          download: true,
          header: true,
          step: function (row: BioResult, parser) {
            // console.log(row.data.IndexNo,'', indexNo);
            if (row.data.IndexNo === indexNo) {
              setBioResult(row.data);
              setLoading(false);
              parser.abort();
              console.log(bioResult);
            }
          },
          complete: function (results) {
            setLoading(false);
            console.log("Fetched all Data");
            setError("No results found for this index number");
          },
        });
        break;
      case "Maths":
        uri = mathsResultUri;
        setLoading(true);
        Papa.parse(uri, {
          download: true,
          header: true,
          step: function (row: MathsResult, parser) {
            if (row.data.IndexNo === indexNo) {
              setMathsResult(row.data);
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
        break;
      case "Commerce":
        uri = commerceResultUri;
        setLoading(true);
        Papa.parse(uri, {
          download: true,
          header: true,
          step: function (row: ComResult, parser) {
            if (row.data.IndexNo === indexNo) {
              setCommerceResult(row.data);
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
        break;
      case "BioTechnology":
        uri = bioTechnologyResultUri;
        setLoading(true);
        let found1 = false;
        Papa.parse(uri, {
          download: true,
          header: true,
          step: function (row: BTechResult, parser) {
            if (row.data.IndexNo === indexNo) {
              found1 = true;
              setBioTechnologyResult(row.data);
              setLoading(false);
              parser.abort();
            }
          },
          complete: function (results) {
            setLoading(false);
            console.log("Fetched all Data");
            if (!found1) {
              setError("No results found for this index number");}
          },
        });
        break;
      case "ETechnology":
        uri = eTechnologyResultUri;
        setLoading(true);
        let found = false;
        Papa.parse(uri, {
          download: true,
          header: true,
          step: function (row: ETechResult, parser) {
            if (row.data.IndexNo === indexNo) {
              found = true;
              setETechnologyResult(row.data);
              setLoading(false);
              parser.abort();
            }
          },
          complete: function (results) {
            setLoading(false);
            console.log("Fetched all Data");
            if (!found) {
              setError("No results found for this index number");}
          },
        });
        break;
      default:
        window.alert("Please select a stream");
        return;
    }
    if (indexNo.length === 0) {
      window.alert("Please enter an index number");
      return;
    }
    setLoading(true);
    //   Papa.parse(uri, {
    //     download: true,
    //     header: true,
    //     step: function (row: Result, parser) {
    //       if (row.data.IndexNo === indexNo) {
    //         setResult(row.data);
    //         setLoading(false);
    //         parser.abort();
    //       }
    //     },
    //     complete: function (results) {
    //       setLoading(false);
    //       console.log("Fetched all Data");
    //       setError("No results found for this index number");
    //     },
    //   });
    // };
  };
  useEffect(() => {
    // eslint-disable-next-line
  }, [stream]);

  return (
    <div className="result-container">
      <Button variant="outlined" onClick={handleClickOpen}>
        Results
      </Button>
      <Dialog
        className="dialog-container"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialog-box">
          <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
            {"TDUSA Pilot Examination Results - " + examYear}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText style={{textAlign:'center'}} id="alert-dialog-description">
              <h1>Results will be released soon</h1>
            </DialogContentText> */}
          </DialogContent>
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
            {/* {error &&
              !(
                bioResult ||
                mathsResult ||
                commerceResult ||
                eTechnologyResult ||
                bioTechnologyResult
              ) && <div className="result-error">{error}</div>} */}
                          {error &&
              !(
                bioResult ||
                mathsResult ||
                commerceResult
              ) && <div className="result-error">{error}</div>}

            <DialogContentText id="alert-dialog-description"></DialogContentText>
            {bioResult && (
              <div className="result">
                <div>
                  <div>Stream :</div> Biology
                </div>
                <div>
                  <div>Name :</div> {bioResult?.Name}
                </div>
                <div>
                  <div>IndexNo :</div> {bioResult?.IndexNo}
                </div>
                {bioResult?.Biology && (
                  <div>
                    <div>Biology :</div> {bioResult?.Biology}
                  </div>
                )}
                {bioResult?.Chemistry && (
                  <div>
                    <div>Chemistry :</div> {bioResult?.Chemistry}
                  </div>
                )}
                {bioResult?.Physics && (
                  <div>
                    <div>Physics :</div> {bioResult?.Physics}
                  </div>
                )}
                {bioResult?.Rank && (
                  <div>
                    <div>Rank :</div> {bioResult?.Rank}
                  </div>
                )}
                {bioResult?.ZScore && (
                  <div>
                    <div>Z-Score :</div> {bioResult?.ZScore}
                  </div>
                )}
              </div>
            )}
            {mathsResult && (
              <div className="result">
                <div>
                  <div>Stream :</div> Physical Science
                </div>
                <div>
                  <div>Name :</div> {mathsResult?.Name}
                </div>
                <div>
                  <div>IndexNo :</div> {mathsResult?.IndexNo}
                </div>
                {mathsResult?.Mathematics && (
                  <div>
                    <div>Mathematics :</div> {mathsResult?.Mathematics}
                  </div>
                )}
                {mathsResult?.Physics && (
                  <div>
                    <div>Physics :</div> {mathsResult?.Physics}
                  </div>
                )}
                {mathsResult?.Option && (
                  <div>
                    <div> {mathsResult?.Option} :</div> {mathsResult?.OptionRes}
                  </div>
                )}
                {mathsResult?.Rank && (
                  <div>
                    <div>Rank :</div> {mathsResult?.Rank}
                  </div>
                )}
                {mathsResult?.ZScore && (
                  <div>
                    <div>Z-Score :</div> {mathsResult?.ZScore}
                  </div>
                )}
              </div>
            )}
            {commerceResult && (
              <div className="result">
                <div>
                  <div>Stream :</div> Commerce
                </div>
                <div>
                  <div>Name :</div> {commerceResult?.Name}
                </div>
                {commerceResult?.Economics && (
                  <div>
                    <div>Economics :</div> {commerceResult?.Economics}
                  </div>
                )}
                {commerceResult?.BusinessStudies && (
                  <div>
                    <div>Business Studies :</div> {commerceResult?.BusinessStudies}
                  </div>
                )}
                {commerceResult?.Accounting && (
                  <div>
                    <div>Accounting :</div> {commerceResult?.Accounting}
                  </div>
                )}
                {commerceResult?.Rank && (
                  <div>
                    <div>Rank :</div> {commerceResult?.Rank}
                  </div>
                )}
              </div>
            )}
            {bioTechnologyResult && (
              <div className="result">
                <div>
                  <div>Stream :</div> Bio Technology
                </div>
                <div>
                  <div>Name :</div> {bioTechnologyResult?.Name}
                </div>
                <div>
                  <div>IndexNo :</div> {bioTechnologyResult?.IndexNo}
                </div>
                {bioTechnologyResult?.Btech && (
                  <div>
                    <div>Bio Technology :</div> {bioTechnologyResult?.Btech}
                  </div>
                )}
                {bioTechnologyResult?.SFT && (
                  <div>
                    <div>S.F.T :</div> {bioTechnologyResult?.SFT}
                  </div>
                )}
                {bioTechnologyResult?.OptionRes && (
                  <div>
                    <div> {bioTechnologyResult?.Option} :</div> {bioTechnologyResult?.OptionRes}
                  </div>
                )}
                {bioTechnologyResult?.Rank && (
                  <div>
                    <div>Rank :</div> {bioTechnologyResult?.Rank}
                  </div>
                )}
                 {bioTechnologyResult?.ZScore && (
                  <div>
                    <div>Z-Score :</div> {bioTechnologyResult?.ZScore}
                  </div>
                )}
              </div>
            )}
            {eTechnologyResult && (
              <div className="result">
                <div>
                  <div>Stream :</div> Engineering Technology</div>
                <div>
                  <div> Name :</div> {eTechnologyResult?.Name}
                </div>
                <div>
                  <div>IndexNo :</div> {eTechnologyResult?.IndexNo}
                </div>
                {eTechnologyResult?.Etech && (
                  <div>
                    <div>E-Tech :</div> {eTechnologyResult?.Etech}
                  </div>
                )}
                {eTechnologyResult?.SFT && (
                  <div>
                    <div>S.F.T :</div> {eTechnologyResult?.SFT}
                  </div>
                )}
                {eTechnologyResult?.OptionRes && (
                  <div>
                    <div> {eTechnologyResult?.Option} :</div> {eTechnologyResult?.OptionRes}
                  </div>
                )}
                {eTechnologyResult?.Rank && (
                  <div>
                    <div>Rank :</div> {eTechnologyResult?.Rank}
                  </div>
                )}
                 {eTechnologyResult?.ZScore && (
                  <div>
                    <div>Z-Score :</div> {eTechnologyResult?.ZScore}
                  </div>
                )}
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={fetchResults}>
              Submit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClose}
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </div>
        <Box sx={{ width: "100%" }}>{loading && <LinearProgress />}</Box>
      </Dialog>
    </div>
  );
};

export default Results;

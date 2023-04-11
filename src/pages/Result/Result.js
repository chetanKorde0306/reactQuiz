// import { Button } from "@material-ui/core";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
// import {useNavigate} from "react-router-dom"
import "./Result.css";
import {Button} from '@mui/material'

const Result = ({ name, score }) => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!name) {
  //     navigate("/");
  //   }
  // }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      if ({score} {"<"}4) {
          <img src="./TeraKuchNahiHoneWalaAppurvGuptaGIF.gif" alt="nothing"></img>
      }
    </div>
  );
};

export default Result;
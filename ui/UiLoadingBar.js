import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const LoadingBarStyle = {
  position: "fixed",
  width: "100%",
  top: "64px",
  left: 0,
  right: 0,
};

function UiLoadingBar(props) {
  return (
    <LinearProgress
      style={
        props.style
          ?
          {
            ...LoadingBarStyle,
            ...props.style
          }
          :
          LoadingBarStyle
      }
      variant="indeterminate"
      color="primary"
    />
  );
}

export default UiLoadingBar;

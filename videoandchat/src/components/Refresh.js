import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import RefreshIcon from "@material-ui/icons/Refresh";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function refreshPage() {
  window.location.reload(false);
}
export default function RefreshFloat() {
  const classes = useStyles();

  return (
    <Fab color="primary" aria-label="add">
      <RefreshIcon onClick={refreshPage}></RefreshIcon>
    </Fab>
  );
}

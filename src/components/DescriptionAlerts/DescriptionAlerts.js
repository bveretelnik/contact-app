import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
function DescriptionAlerts({ type, title, text }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity={type}>
        <AlertTitle>{title}</AlertTitle>
        Contact — <strong>{text} check it out!</strong>
      </Alert>
    </div>
  );
}

export default DescriptionAlerts;

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FirebaseContext } from "../../context/firebase/firebaseContext";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "10px",
    margin: "15px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 4px",

    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function ContactList({ contact, handleOpen }) {
  const { removeContact } = useContext(FirebaseContext);
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {contact.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {contact.email}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {contact.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleOpen}
          variant="outlined"
          color="primary"
          size="small"
        >
          Share
        </Button>
        <Button
          onClick={() => removeContact(contact.id)}
          variant="outlined"
          color="secondary"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ContactList;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareIcon from "@material-ui/icons/Share";
import Typography from "@material-ui/core/Typography";
import { removeContact, catchContact } from "../../redux/action";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  button: {
    margin: "4px 9px",
  },
});
function ContactList({ contact, handleOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();
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
        <Typography variant="h5" component="h2" style={{ color: "#00467F" }}>
          {contact.email}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {contact.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          onClick={handleOpen}
          variant="outlined"
          color="primary"
          size="small"
        >
          <ShareIcon /> &nbsp; Share
        </Button>
        <Button
          component={Link}
          to="/edit"
          className={classes.button}
          variant="outlined"
          color="inherit"
          size="small"
          onClick={() => dispatch(catchContact(contact.id))}
        >
          <EditIcon /> &nbsp; Edit
        </Button>
        <Button
          className={classes.button}
          onClick={() => removeContact(contact.id)}
          variant="outlined"
          color="secondary"
          size="small"
        >
          <DeleteIcon /> &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
}
const mapDispatchToProps = {
  removeContact,
};
export default connect(null, mapDispatchToProps)(ContactList);

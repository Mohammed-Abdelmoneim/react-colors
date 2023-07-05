import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.4)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    bottom: "0",
    left: "0",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
  },
  DeleteIcon: {
    transition: "all 0.3s ease-in-out",
    color: "rgba(0,0,0,0.5)",
  },
};
function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon className={classes.DeleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);

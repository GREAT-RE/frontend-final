import React from "react";
import { createUseStyles } from "react-jss";

// import Card from "@material-ui/core/Card"
// import CardActionArea from "@material-ui/core/CardActionArea"
// import CardContent from "@material-ui/core/CardContent"
// import CardMedia from "@material-ui/core/CardMedia"
// import Typography from "@material-ui/core/Typography"
// import AspectRatioIcon from "@material-ui/icons/AspectRatio"
// import { Grid, IconButton } from "@material-ui/core"
// import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
// import CloseIcon from "@material-ui/icons/Close"

const useStyles = createUseStyles({
  //   root: {
  //     maxWidth: 230,
  //     position: "relative",
  //     zIndex: 1001,
  //     background:"#fafafa"
  //   },
  //   media: {
  //     height: 100,
  //   },
  //   close: {
  //     position: "absolute",
  //     left: 0,
  //     top: 0,
  //     zIndex: 1001,
  //     background: "white",
  //     width: "25px",
  //     height: "25px",
  //   },
  // });

  root: {
    maxWidth: 250,
    position: "relative",
    zIndex: 1001,
    background: "white",
  },

  close: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1001,
    background: "white",
    width: "25px",
    height: "25px",
  },

  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "18px",
    fontWeight: "900",
    padding: "10px",
    margin: "0",
  }
});

export default function UniversityCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.card} key={props.data.id}>
        <h3 className={classes.title}> {props.data.name}</h3>
      </div>
    </div>
  );
}

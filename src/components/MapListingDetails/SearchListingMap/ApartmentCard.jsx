import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
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

import imagePlaceholder from "../../../assets/placeholder-image.png";

const useStyles = createUseStyles({
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

  image_container: {
    display: "flex",
    width: "100%",
    height: "170px",
    justifyContent: "center",
  },

  text_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    fontSize: "18px",
    fontWeight: "900",
    padding: "10px",
    margin: "0",
  },
  price: {
    color: "#E6956C",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "0",
    margin: "0",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default function ApartmentCard(props) {
  const classes = useStyles();

  const [src, setSrc] = useState(props.data.picture_url);

  return (
    <div className={classes.root}>
      <div className={classes.card} key={props.data.id}>
        <div className={classes.image_container}>
          <img
            className={classes.image}
            src={src}
            onError={() => setSrc(imagePlaceholder)}
            alt={props.data.name}
          />
        </div>
        <div className={classes.text_container}>
          <h4 className={classes.title}>{props.data.name}</h4>
          <p>
            <span className={classes.price}>
              From € {props.data.price_in_eur}
            </span>{" "}
            /daily
          </p>
          <Link to={`/listing/${props.data.listing_id}`}>see more</Link>
        </div>
      </div>
    </div>
  );
}

import { createUseStyles } from "react-jss";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

import university_icon_pin from "../../../assets/google-icons/university-pin-icon.svg"

const styles = createUseStyles({
  root: {
    // background: "lightgrey",
    // backgroundColor:"red",
    borderRadius: "12px",
    padding: "8px",
    width: "10px",
    zIndex: 1000,
    position: "relative",
    // border: 'none'
  },
});

const icons = {
  library: {
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png",
  },
};

const UniversityPoint = (props) => {
  const {lat, lng, name} = props.data
  const {onClick} = props
  const classes = styles();
  // console.log("university", props)
  return (
    <div className={classes.root} onClick={()=>props.onClick(props.id)}>
      <img src={university_icon_pin} alt={name} style={{height:"40px", width:"40px"}} />
    {/* <Marker
      // key={id}
      icon={university_icon_pin}
        label={name}
      position={{ lat, lng }}
      onClick={onClick}
    />
      <h3> {name}</h3> */}
    </div>
  );
};

export default UniversityPoint;

import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    background: "white",
    borderRadius: "8px",
    border: '2px solid #43B19E',
    padding: "4px",
    width: "35px",
    zIndex: 1000,
    position: "relative",
    color:'#43B19E',
    fontSize:'12px'
    // border: 'none'
  }
})

const ApartmentPoint = props => {
  const classes = styles()
//   console.log("point", props)
  return (
    <div id={props.id} className={classes.root} onClick={()=>props.onClick(props.id)}>
     {`€ ${props.price}`}
    </div>
  )
}

export default ApartmentPoint

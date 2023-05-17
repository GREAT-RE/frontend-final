/* eslint-disable no-undef */
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
  Select,
  Image,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";
import { useRef, useState, useContext } from "react";

import "./ListingDetailsMap.css";
import walkingIcon from "../../../assets/google-icons/walk-distance.svg";
import busIcon from "../../../assets/google-icons/bus.svg";
import trainIcon from "../../../assets/google-icons/train.svg";
import carIcon from "../../../assets/google-icons/car-distance.svg";
import universityIcon from "../../../assets/google-icons/university-icon.svg";
import ListingsContext from "../../../context/ListingsContext";

const centerLisbon = { lat: 38.744052, lng: -9.151828 };

const ListingDetailsMap = ({ data }) => {
  //   const { isLoaded } = useJsApiLoader({
  //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  //     libraries: ["places"],
  //   });
  const [libraries] = useState(["places"]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const { universities } = useContext(ListingsContext);

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponseDriving, setDirectionsResponseDriving] = useState(null);
  const [directionsResponseWalking, setDirectionsResponseWalking] = useState(null);
  const [directionsResponseTransport, setDirectionsResponseTransport] = useState(null);
  const [distanceWalking, setDistanceWalking] = useState("");
  const [durationWalking, setDurationWalking] = useState("");
  const [distanceDriving, setDistanceDriving] = useState("");
  const [durationDriving, setDurationDriving] = useState("");
  const [distanceTransports, setDistanceTransports] = useState("");
  const [durationTransports, setDurationTransports] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (destinationRef.current.value === "") {
      return;
    }
    // let polylineOptionsWalking = new google.maps.Polyline({
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 1.0,
    //     strokeWeight: 10
    //     });

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const resultsDRIVING = await directionsService.route({
      origin: { lat: data.lat, lng: data.lng },
      //   origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
      
    });
    const resultsWALKING = await directionsService.route({
      //   origin: originRef.current.value,
      origin: { lat: data.lat, lng: data.lng },
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    //   polylineOptions: new google.maps.DirectionsPolyline({
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 1.0,
    //     strokeWeight: 10
    //     })
    });
    const resultsTRANSPORTS = await directionsService.route({
      //   origin: originRef.current.value,
      origin: { lat: data.lat, lng: data.lng },
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.TRANSIT,
    });
    // console.log(resultsTRANSPORTS);
    // console.log(resultsWALKING);
    // console.log(resultsDRIVING);
    setDirectionsResponseDriving(resultsDRIVING);
    setDirectionsResponseWalking(resultsWALKING);
    setDirectionsResponseTransport(resultsTRANSPORTS)
    setDistanceDriving(resultsDRIVING.routes[0].legs[0].distance.text);
    setDurationDriving(resultsDRIVING.routes[0].legs[0].duration.text);
    setDistanceWalking(resultsWALKING.routes[0].legs[0].distance.text);
    setDurationWalking(resultsWALKING.routes[0].legs[0].duration.text);
    setDistanceTransports(resultsTRANSPORTS.routes[0].legs[0].distance.text);
    setDurationTransports(resultsTRANSPORTS.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponseDriving(null);
    setDirectionsResponseWalking(null);
    setDirectionsResponseTransport(null);
    setDistanceDriving("");
    setDistanceWalking("");
    setDistanceTransports("");
    setDurationDriving("");
    setDurationWalking("");
    setDurationTransports("");
    destinationRef.current.value = "";
  }
  

    // var polylineOptionsActual = new google.maps.Polyline({
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 1.0,
    //     strokeWeight: 10
    //     });
    //     var polylineOptionsActual = new google.maps.Polyline({
    //         strokeColor: '#FF0000',
    //         strokeOpacity: 1.0,
    //         strokeWeight: 10
    //         });

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="700px"
      w="1500px"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={centerLisbon}
          zoom={13}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          {/* <Marker position={center} /> */}
          {directionsResponseDriving && (
            <DirectionsRenderer directions={directionsResponseDriving} />
            )}
            {directionsResponseWalking && (
            <DirectionsRenderer directions={directionsResponseWalking} />
            )}
              {directionsResponseTransport && (
            <DirectionsRenderer directions={directionsResponseTransport} />
            )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"
      >
        <HStack spacing={2} justifyContent="space-between">
          {/* <Box flexGrow={1}>
            <Autocomplete>
               <Input type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>
          </Box> */}
          <Box flexGrow={1}>
            <Autocomplete>
              {/* <Input
                type="text"
                placeholder="Destination"
                ref={destinationRef}
              /> */}
              <Select
                style={{ paddingLeft: "35px" }}
                placeholder="Select University"
                ref={destinationRef}
              >
                {universities.map((university) => (
                  <option key={university.id} value={university.name}>
                    {university.name}
                  </option>
                ))}
              </Select>
            </Autocomplete>
            <Box className="university-icon-container">
              <Image
                className="university-icon-search"
                src={universityIcon}
                alt="university-icon"
              />
            </Box>
          </Box>

          <ButtonGroup>
            <Button colorScheme="red" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        {directionsResponseDriving && directionsResponseTransport && directionsResponseWalking && (
          <HStack
            className="container-distances"
            spacing={4}
            mt={4}
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="row">
              <img
                src={walkingIcon}
                style={{ height: "50px", width: "50px", marginRight:"10px" }}
                alt="walking-icon"
              />
              <Box>
                <Text>{distanceWalking} </Text>
                <Text>{durationWalking} </Text>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <img
                src={busIcon}
                style={{ height: "50px", width: "50px", marginRight:"10px" }}
                alt="transports-icon"
              />
              <Box>
                <Text>{distanceTransports} </Text>
                <Text>{durationTransports} </Text>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <img
                src={carIcon}
                style={{ height: "50px", width: "50px", marginRight:"10px" }}
                alt="car-icon"
              />
              <Box>
                <Text>{distanceDriving} </Text>
                <Text>{durationDriving} </Text>
              </Box>
            </Box>
            <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                map.panTo(centerLisbon);
                map.setZoom(13);
              }}
            />
          </HStack>
        )}
      </Box>
    </Flex>
  );
};

export default ListingDetailsMap;

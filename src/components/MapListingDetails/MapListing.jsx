// import React from "react";

// import { FaLocationArrow, FaTimes } from "react-icons/fa";

// import {
//   useJsApiLoader,
//   useLoadScript,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import { useRef, useState } from "react";

// const center = { lat:  38.744052, lng: -9.151828 }

// const MapListing = () => {
// //   const { isLoaded } = useJsApiLoader({
// //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
// //     libraries: ["places"],
// //   });
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//     libraries: ["places"],
//   });

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null));
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState("");
//   const [duration, setDuration] = useState("");

//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const originRef = useRef();
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const destiantionRef = useRef();

//   if (!isLoaded) {
//     return <h1>LOADING.......</h1>;
//   }

//   async function calculateRoute() {
//     if (originRef.current.value === "" || destiantionRef.current.value === "") {
//       return;
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destiantionRef.current.value,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     });
//     setDirectionsResponse(results);
//     setDistance(results.routes[0].legs[0].distance.text);
//     setDuration(results.routes[0].legs[0].duration.text);
//   }

//   function clearRoute() {
//     setDirectionsResponse(null);
//     setDistance("");
//     setDuration("");
//     originRef.current.value = "";
//     destiantionRef.current.value = "";
//   }

//   return (
//       <div
//         position="relative"
//         flexDirection="column"
//         alignItems="center"
//         h="100vh"
//         w="100vw"
//       >
//         <div position="absolute" left={0} top={0} h="100%" w="100%">
//           {/* Google Map Box */}
//           <GoogleMap
//             center={center}
//             zoom={15}
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             options={{
//               zoomControl: false,
//               streetViewControl: false,
//               mapTypeControl: false,
//               fullscreenControl: false,
//             }}
//             onLoad={(map) => setMap(map)}
//           >
//             <Marker position={center} />
//             {directionsResponse && (
//               <DirectionsRenderer directions={directionsResponse} />
//             )}
//           </GoogleMap>
//         </div>
//         <div
//           p={4}
//           borderRadius="lg"
//           m={4}
//           bgColor="white"
//           shadow="base"
//           minW="container.md"
//           zIndex="1"
//         >
//           <div spacing={2} justifyContent="space-between">
//             <div flexGrow={1}>
//               <Autocomplete>
//                 <input type="text" placeholder="Origin" ref={originRef} />
//               </Autocomplete>
//             </div>
//             <div flexGrow={1}>
//               <Autocomplete>
//                 <input
//                   type="text"
//                   placeholder="Destination"
//                   ref={destiantionRef}
//                 />
//               </Autocomplete>
//             </div>

//             <div>
//               <button colorScheme="pink" type="submit" onClick={calculateRoute}>
//                 Calculate Route
//               </button>
//               <img
//                 aria-label="center back"
//                 src={<FaTimes />}
//                 onClick={clearRoute}
//               />
//             </div>
//           </div>
//           <div spacing={4} mt={4} justifyContent="space-between">
//             <p>Distance: {distance} </p>
//             <p>Duration: {duration} </p>
//             <img
//               aria-label="center back"
//               src={<FaLocationArrow />}
//               isRound
//               onClick={() => {
//                 map.panTo(center);
//                 map.setZoom(15);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//   );
// };

// export default MapListing;

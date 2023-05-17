// /* global google */
// import {
//     GoogleMap,
//     InfoWindow,
//     Marker,
//     useLoadScript,
//   } from "@react-google-maps/api";
//   import { useState } from "react";
//   import "./MapListingDetails.css";
  
//   const MapListingDetails = () => {
//     const { isLoaded } = useLoadScript({
//       googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//     });
//     const [mapRef, setMapRef] = useState();
//     const [isOpen, setIsOpen] = useState(false);
//     const [infoWindowData, setInfoWindowData] = useState();
//     const markers = [
//         {
//             name: "Instituto Superior Técnico",
//             lat: 38.735, 
//             lng: -9.137
//         },
//         {
//             name: "Universidade de Lisboa",
//             lat: 38.752, 
//             lng: -9.156
//         },
//         {
//             name: "Universidade Lusófona",
//             lat: 38.758,
//             lng: -9.153
//         },
//         {
//             name: "Universidade Católica",
//             lat: 38.754,
//             lng: -9.166
//         },
//         {
//             name: "ISCTE - Instituto Universitário de Lisboa",
//             lat: 38.748, 
//             lng: -9.153
//         }
//     ];

//     const home = [
//         {
//             name:"Heart of Alfama Lisbon Center - C\u0153ur de l'Alfama",
//                 lat: 38.71241,
//                 lng: -9.12706,
//         }
//     ]
  
//     const onMapLoad = (map) => {
//       setMapRef(map);
//       const bounds = new google.maps.LatLngBounds();
//       markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
//       map.fitBounds(bounds);
//     };

//     const handleMarkerClick = (id, lat, lng, name) => {
//       mapRef?.panTo({ lat, lng });
//       setInfoWindowData({ id, name });
//       setIsOpen(true);
//     };

//     const customMarkerUniversity = {
//         path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
//         fillColor: "red",
//         fillOpacity: 2,
//         strokeWeight: 1,
//         rotation: 0,
//         scale: 1,
//       };

//       const customMarkerHome = {
//         path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
//         fillColor: "green",
//         fillOpacity: 2,
//         strokeWeight: 1,
//         rotation: 0,
//         scale: 1,
//       };
  
//     return (
//       <div className="App">
//         {!isLoaded ? (
//           <h1>Loading...</h1>
//         ) : (
//           <GoogleMap
//             mapContainerClassName="map-container"
//             onLoad={onMapLoad}
//             onClick={() => setIsOpen(false)}
//           >
//             {markers.map(({ name, lat, lng }, ind) => (
//               <Marker
//                 key={ind}
//                 icon={customMarkerUniversity}
//                 position={{ lat, lng }}
//                 onClick={() => {
//                   handleMarkerClick(ind, lat, lng, name);
//                 }}
//               >
//                 {isOpen && infoWindowData?.id === ind && (
//                   <InfoWindow
//                     onCloseClick={() => {
//                       setIsOpen(false);
//                     }}
//                   >
//                     <>
//                         <h3>{infoWindowData.name}</h3>
//                         <h3>this sucks</h3>
//                     </>
//                   </InfoWindow>
//                 )}
//               </Marker>
//             ))}

//              {home.map(({ name, lat, lng }, ind) => (
//               <Marker
//                 key={ind}
//                 icon={customMarkerHome}
//                 position={{ lat, lng }}
//                 onClick={() => {
//                   handleMarkerClick(ind, lat, lng, name);
//                 }}
//               >
//                 {isOpen && infoWindowData?.id === ind && (
//                   <InfoWindow
//                     onCloseClick={() => {
//                       setIsOpen(false);
//                     }}
//                   >
//                     <>
//                         <h3>{infoWindowData.name}</h3>
//                         <h3>this sucks</h3>
//                     </>
//                   </InfoWindow>
//                 )}
//               </Marker>
//             ))}
//           </GoogleMap>
//         )}
//       </div>
//     );
//   };

//   export default MapListingDetails
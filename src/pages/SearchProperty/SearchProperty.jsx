import React, { useContext, useState, useEffect } from "react";
import feelAtHome from "../../assets/Feel at Home.jpg";
import "./SearchProperty.css";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
} from "@mui/material";
import api from "../../services/api";
import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";
import ListingsContext from "../../context/ListingsContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaArrowRight } from "react-icons/fa";

const SearchProperty = () => {

  const {
    universities,
    setListingsFilter,
    universitiesSelected,
    setUniversitiesSelected,
  } = useContext(ListingsContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectRoomType, setSelectRoomType] = useState("");
  const [firstValue, setFirstValue] = useState(20);
  const [secondValue, setSecondValue] = useState(1000);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setFirstValue(newValue[0]);
    setSecondValue(newValue[1]);
  };

  const handleUniversityChange = (event) => {
    setUniversitiesSelected(event.target.value);

    api
      .get(`/listing/universities/${event.target.value}`)
      .then((response) => {
        setListingsFilter(response.data);
        if (location.pathname === "/properties/popular") {
          navigate("/properties/list");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRoomChange = (event) => {
    setSelectRoomType(event.target.value);
    api
      .post(`/listing?room_type=${event.target.value}`)
      .then((response) => {
        setListingsFilter(response.data);
        if (location.pathname === "/properties/popular") {
          navigate("/properties/list");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let checkedResults = {};

  const handleCheckboxChange = (event) => {

    Object.assign(checkedResults, {
      [event.target.name]: event.target.checked,
    });

    if (universitiesSelected !== "") {

          if (Object.keys(checkedResults).length > 0) {
            api
              .post("/listing", {data:checkedResults, universities:universitiesSelected})
              .then((response) => {
                setListingsFilter(response.data);
                if (location.pathname === "/properties/popular") {
                  navigate("/properties/list");
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        } else {  
          if (Object.keys(checkedResults).length > 0) {
          api
            .post("/listing", {data:checkedResults, universities:null})
            .then((response) => {
              setListingsFilter(response.data);
              if (location.pathname === "/properties/popular") {
                navigate("/properties/list");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }

        }
  };

  return (
    <>
      <div className="searchPage">
        <img className="feelHome" src={feelAtHome} alt="feel" />
        <div className="optionsMenu">
          <h1 className="menuHeader">Feel at home</h1>
          <div className="searchOrientation">
            <div className="leftColumn">
              <div className="customSelect">
                <select
                  value={universitiesSelected}
                  onChange={handleUniversityChange}
                >
                  <option hidden value="">
                    Select a University
                  </option>
                  {universities.map((university) => (
                    <option key={university.id} value={university.id}>
                      {university.name}
                    </option>
                  ))}
                </select>
              </div>
              <select
                id="roomType"
                value={selectRoomType}
                onChange={handleRoomChange}
              >
                <option disabled hidden value="">
                  Select room type
                </option>
                <option value="Entire home/apt">Entire Home</option>
                <option value="Private room">Private Room</option>
              </select>
            
              <div>
                <div className="calendars-container">
                  <DatePicker
                    selected={startDate}
                    className={
                      !startDate ? "with-calendar" : "without-calendar"
                    }
                    placeholderText="Move in"
                    dateFormat="dd-MM-yyyy"
                    closeOnScroll={(e) => e.target === document}
                    onChange={(date) => setStartDate(date)}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    showDisabledMonthNavigation
                  />
                  <div className="arrow-container">
                    <FaArrowRight color="lightgray" />
                  </div>
                  <DatePicker
                    selected={endDate}
                    className={!endDate ? "with-calendar" : "without-calendar"}
                    placeholderText="Move out"
                    dateFormat="dd-MM-yyyy"
                    closeOnScroll={(e) => e.target === document}
                    onChange={(date) => setEndDate(date)}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    showDisabledMonthNavigation
                  />
                </div>
              </div>
            </div>
            <FormGroup className="extrasCheckbox">
              <FormControlLabel
                control={<Checkbox />}
                label="Wifi"
                name="Wifi"
                value="Wifi"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Kitchen"
                name="Kitchen"
                value="Kitchen"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Washer"
                name="Washer"
                value="Washer"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Microwave"
                name="Microwave"
                value="Microwave"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Refrigerator"
                name="Refrigerator"
                value="Refrigerator"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Oven"
                name="Oven"
                value="Oven"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Stove"
                name="Stove"
                value="Stove"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Cable TV"
                name="Cable TV"
                value="Cable TV"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Heating"
                name="Heating"
                value="Heating"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Air conditioning"
                name="Air conditioning"
                value="Air conditioning"
                onChange={handleCheckboxChange}
              />
            </FormGroup>
          </div>
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={[firstValue, secondValue]}
              step={1}
              min={20}
              max={1000}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
            <div className="price-range-container">
              <p>{firstValue}€</p>
              <p>{secondValue}€</p>
            </div>
          </Box>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SearchProperty;

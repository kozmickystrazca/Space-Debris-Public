import React from "react";
import { styled } from "@mui/material/styles";
import { default as SliderMUI } from "@mui/material/Slider";
import Box from "@mui/material/Box";
import "../components/Slider.css";

function valuetext(value) {
  return `${value}`;
}
const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const IOSSlider = styled(SliderMUI)(({ theme }) => ({
  color: "white",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 30,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: "white",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: "white",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "white",
    height: 13,
    width: 2,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
  "& .MuiSlider-markLabel": {
    color: "white",
  },
}));

export default function Slider(props) {
  const { setYear } = props;
  const marks = [
    {
      value: 1956,
      label: "1956",
    },
    {
      value: 1967,
      label: "1967",
    },
    {
      value: 1978,
      label: "1978",
    },
    {
      value: 1989,
      label: "1989",
    },
    {
      value: 2000,
      label: "2000",
    },
    {
      value: 2011,
      label: "2011",
    },
    {
      value: 2022,
      label: "2022",
    },
  ];
  const handlerange = (e) => {
    setYear(e.target.value);
  };
  return (
    <Box className="slider">
      <IOSSlider
        aria-label="Custom marks"
        min={1956}
        max={2022}
        defaultValue={
          sessionStorage.getItem("filters")
            ? JSON.parse(sessionStorage.getItem("filters")).year
            : 1970
        }
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handlerange}
      />
    </Box>
  );
}

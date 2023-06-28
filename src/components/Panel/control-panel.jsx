//en este archivo vamos a encontrar todos los componentes que se reenderizan en el archivo Filter.jsx


import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import {
  selectedCity,
  filterByType,
  filterByPrice,
  filterBySurface,
  filterByDelivered,
  ApplyFilters
} from "../../redux/actions";

export function ControlPanel({ setPopupInfo }) {
  const dispatch = useDispatch();
  const citys = useSelector((state) => state.citys);

  const handleChange = (event) => {
    const selectedCityObj = citys.find(
      (city) => city.city === event.target.value
    );
    setPopupInfo(null);
    dispatch(selectedCity(selectedCityObj));
  };

  return (
    <>
      <RadioGroup
        defaultValue={"Santiago, Provincia de Santiago"}
        aria-labelledby="control-panel-label"
        name="city"
        onChange={handleChange}
      >
        {citys.map((city, index) => (
          <FormControlLabel
            key={`city-${index}`}
            value={city.city}
            control={<Radio />}
            label={city.city}
          />
        ))}
      </RadioGroup>
    </>
  );
}

export function FilterType() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterByType(event.target.value));
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="Nuevo" control={<Radio />} label="Nuevo" />
          <FormControlLabel
            value="Seminuevo"
            control={<Radio />}
            label="Semi nuevo"
          />
          <FormControlLabel
            value="Parcela"
            control={<Radio />}
            label="Parcela"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export function FilterPrice() {
  const dispatch = useDispatch();

  const marks = [
    {
      value: 400,
      label: "250 UF",
    },
    {
      value: 5000,
      label: "5000 UF",
    },
  ];

  const [value, setValue] = React.useState([0, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(filterByPrice(newValue)); // Utiliza newValue en lugar de value
  };

  return (
    <Box sx={{ width: "90%", height: "100%" }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        marks={marks}
        valueLabelDisplay="auto"
        min={250}
        max={5000}
      />
    </Box>
  );
}

export function FilterSurface() {
  const dispatch = useDispatch();

  const marks = [
    {
      value: 41,
      label: "40 m2",
    },
    {
      value: 100,
      label: "100 m2",
    },
  ];

  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(filterBySurface(newValue));
  };

  return (
    <Box sx={{ width: "90%", height: "100%" }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        marks={marks}
        valueLabelDisplay="auto"
        min={40}
        max={100}
      />
    </Box>
  );
}

export function FilterDelivered() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterByDelivered(event.target.value));
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value="Entrega Futura"
            control={<Radio />}
            label="Entrega Futura"
          />
          <FormControlLabel
            value="Inmediata"
            control={<Radio />}
            label="Inmediata"
          />
          <FormControlLabel
            value="Pronta Entrega"
            control={<Radio />}
            label="Pronta Entrega"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export function Buttons() {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(ApplyFilters());
  };

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button onClick={handleChange}>Aplicar Filtros</Button>
    </ButtonGroup>
  );
}
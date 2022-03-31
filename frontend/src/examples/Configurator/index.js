import React, { useState } from "react";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setOpenConfigurator,
} from "context";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

function Configurator() {
  const [saveDate, setSaveDate] = React.useState(null);
  const [updateDate, setUpdateDate] = React.useState(null);
  const [checkedStatus, setCheckedStatus] = React.useState(false);
  const [state, setState] = useState({
    number_text: "",
    supplier: "",
    weight: "",
    status: "",
    save_date: "",
    update_date: "",
  });

  const { number_text, supplier, weight } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
    darkMode,
  } = controller;

  // Use the useEffect hook to change the button state for the sidenav type based on window size.

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);



  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDBox>
          <MDTypography variant="h5">Sarf Malzeme Ekle</MDTypography>
        </MDBox>

        <Icon
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </MDBox>

      <Divider />

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="number_text"
          id="outlined-basic"
          label="Malzeme Numarası"
          variant="outlined"
          value={number_text}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Malzeme Tedarikçisi"
          variant="outlined"
          name="supplier"
          value={supplier}
          text="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Malzeme Ağırlığı (kg)"
          name="weight"
          variant="outlined"
          value={weight}
          onChange={handleInputChange}
        />
        <br />
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Malzeme Durumu"
            name="status"
            value={checkedStatus}
            onChange={(value) => {
              console.log("status:", value);
              setCheckedStatus(value.target.checked);
            }}
          />
        </FormGroup>
        <br />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Kayıt Tarihi"
            name="save_date"
            value={saveDate}
            onChange={(newValue) => {
              console.log("save date:", newValue);
              setSaveDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <br />
          <DatePicker
            label="Güncelleme Tarihi"
            name="update_date"
            value={updateDate}
            onChange={(newValue) => {
              console.log("update date:", newValue);
              setUpdateDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <br />
        <Button
          style={{ with: "100px", marginTop: "20px" }}
          color="primary"
          variant="contained"
          disableElevation
          onClick={() => {
            console.log(state);
            console.log(saveDate);
            console.log(updateDate);
            console.log(checkedStatus);

            fetch("http://localhost/devtest/reactjs/consumables.php/", {
              method: "POST",
              body: JSON.stringify({
                number: 1,
                supplier: "emine",
                weight: "44",
                status: 1,
                save_date: "",
                update_date: "",
              }),
            });
          }}
        >
          <MDTypography variant="h6" color="white">
            Sarf Malzeme Ekle
          </MDTypography>
        </Button>
      </Box>
    </ConfiguratorRoot>
  );
}

export default Configurator;

import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";

const AddConsumable = () => {
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
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  SARF MALZEME EKLE{" "}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "35ch" },
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

                      fetch("http://localhost/consumables.php/", {
                        method: "POST",
                        body: JSON.stringify({
                          number: 1,
                          supplier: "emine",
                          weight: "44",
                          status: 1,
                          save_date:"",
                          update_date:""
                        }),
                      });
                    }}
                  >
                    <MDTypography variant="h6" color="white">
                      Sarf Malzeme Ekle
                    </MDTypography>
                  </Button>
                </Box>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default AddConsumable;

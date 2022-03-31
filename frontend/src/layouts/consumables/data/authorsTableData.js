/* eslint-disable react-hooks/rules-of-hooks */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { useEffect, useState } from "react";
import MDButton from "components/MDButton";

export default function data() {

  const [consumables, setConsumables] = useState([]);

  const getData=()=>{
    fetch("http://localhost/consumables.php/", { method: "GET" })
    .then((rest) => rest.json())
    .then((rest) => setConsumables(rest));
  }

  useEffect(() => {
    getData();
  });


  if(!consumables) return {rows: null}

  return {
    columns: [
      { Header: "numara1233", accessor: "numara", align: "left" },
      { Header: "tedarikci", accessor: "tedarikci", align: "left" },
      { Header: "agirlik", accessor: "agirlik", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "kayit tarihi", accessor: "kayitTarihi", align: "center" },
      { Header: "guncelleme tarihi", accessor: "guncellemeTarihi", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      ...consumables.map((item) => {
        return { 
          numara: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {item.number}
            </MDTypography>
          ),
          tedarikci: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
               {item.supplier}
            </MDTypography>
          ),
          agirlik: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {item.weight}
            </MDTypography>
          ),
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent={item.status == 1 ? "aktif" : "pasif"} color={item.status == 1 ? "success" : "warning"} variant="gradient" size="sm" />
            </MDBox>
          ),
          kayitTarihi: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {item.save_date}
            </MDTypography>
          ),
          guncellemeTarihi: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
             {item.update_date}
            </MDTypography>
          ),
          action: (
            <MDButton component="a" href="#" variant="caption" color="text" fontWeight="medium">
              Edit
            </MDButton>
          ),
        }
      })
    ],
  };
}

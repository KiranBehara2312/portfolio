import React, { useEffect, useState } from "react";
import { GlassBG, MyHeading } from "../../../components/custom";
import {
  BLOOD_GROUPS,
  GENDER_LIST,
  MARITAL_STATUS,
  SALUTATIONS,
} from "../../../constants/localDB/MastersDB";
import F_Input from "../../../components/custom/form/F_Input";
import F_Select from "../../../components/custom/form/F_Select";
import { REGEX_PATTERNS } from "../../../constants/Regex";
import { postData } from "../../../helpers/http";
import { Box, Typography } from "@mui/material";

const Doctor = ({ control, errors }) => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  useEffect(() => {
    fetchDoctors();
  }, []);
  const fetchDoctors = async () => {
    const response = await postData("/doctor/doctors", {
      page: 1,
      limit: 100,
    });
    setDoctors(
      response?.data?.map((x) => {
        return {
          ...x,
          value: x.userName,
          label: `Dr. ${x.firstName} ${x.lastName}`,
        };
      }) ?? []
    );
  };
  const docSelectionHandler = (doc) => {
    const selDoc = doctors.find((x) => x.userName === doc) ?? null;
    setSelectedDoc(selDoc);
  };

  const DocInfoCard = () => {
    return (
      <GlassBG cardStyles={{ width: "200px", height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            mt: 2.5,
          }}
        >
          <Typography variant="caption">
            Dr.{selectedDoc?.firstName} {selectedDoc?.lastName}
          </Typography>
          <Typography variant="caption">Name</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2.5,
            flexDirection: "column",
          }}
        >
          <Typography variant="caption">{selectedDoc?.designation}</Typography>
          <Typography variant="caption">Designation:</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2.5,
            flexDirection: "column",
          }}
        >
          <Typography variant="caption">{selectedDoc?.department}</Typography>
          <Typography variant="caption">Department:</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2.5,
            flexDirection: "column",
          }}
        >
          <Typography variant="caption">
            {selectedDoc?.qualification}
          </Typography>
          <Typography variant="caption">Qualification:</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2.5,
            flexDirection: "column",
          }}
        >
          <Typography variant="caption">
            {selectedDoc?.specialization}
          </Typography>
          <Typography variant="caption">Specialization:</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2.5,
            flexDirection: "column",
          }}
        >
          <Typography variant="caption">{selectedDoc?.fee}</Typography>
          <Typography variant="caption">Fees</Typography>
        </Box>
      </GlassBG>
    );
  };
  return (
    <>
      <GlassBG cardStyles={{ width: "240px", m: 1, height: "auto" }}>
        <MyHeading
          alignCenter
          text="Doctor Information"
          variant="h6"
          sx={{ mt: "-10px", fontSize: "15px", fontWeight: "bold" }}
        />

        <F_Select
          control={control}
          name={"doctor"}
          label={"Doctor"}
          list={doctors}
          rules={{ required: "Doctor is required" }}
          isRequired={true}
          errors={errors}
          onSelect={docSelectionHandler}
        />
        {selectedDoc && <DocInfoCard />}
      </GlassBG>
    </>
  );
};

export default Doctor;
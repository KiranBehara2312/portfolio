import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { GlassBG, MyHeading } from "../../../components/custom";
import { REGEX_PATTERNS } from "../../../constants/Regex";

const Communication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <GlassBG cardStyles={{ width: "300px", m: 1, height: "auto" }}>
        <MyHeading
          alignCenter
          text="Communication Information"
          variant="h6"
          sx={{ mt: "-10px", fontSize: "15px" }}
        />

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <TextField
            {...register("contactNo", {
              required: "Contact No is required",
              pattern: {
                value: REGEX_PATTERNS.mobileNumber,
                message: "Invalid mobile number",
              },
            })}
            type="text"
            label="Contact No"
            fullWidth
            placeholder=""
            margin="normal"
            size="small"
            autoComplete="off"
            error={!!errors.contactNo}
            helperText={errors.contactNo ? errors.contactNo.message : ""}
          />
          <TextField
            {...register("alternateMobileNo", {
              pattern: {
                value: REGEX_PATTERNS.mobileNumber,
                message: "Invalid mobile number",
              },
            })}
            type="text"
            label="Alt Contact No"
            fullWidth
            placeholder=""
            margin="normal"
            autoComplete="off"
            error={!!errors.alternateMobileNo}
            helperText={
              errors.alternateMobileNo ? errors.alternateMobileNo.message : ""
            }
          />

          {/* Submit Button */}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </GlassBG>
    </>
  );
};

export default Communication;

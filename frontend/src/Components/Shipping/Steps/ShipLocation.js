import React from "react";
import {
  Grid,
  TextField,
  FormHelperText,
  InputLabel,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";


function ShipLocation({
  handleNext,
  formvalues: {
    firstName,
    lastName,
    city,
    state,
    AddressLine1,
    AddressLine2,
    PostalCode,
  },
  handleChange,
}) {
  let isValid = false;
  if (
    firstName &&
    lastName &&
    state &&
    AddressLine1 &&
    PostalCode &&
    PostalCode &&
    city
  ) {
    isValid =
      firstName.length > 0 &&
      lastName.length > 0 &&
      state.length > 0 &&
      AddressLine1.length > 0 &&
      PostalCode.length > 0 &&
      city.length > 0;
  }

  return (
    <div className="otherPageCOntainer">
      <h1>Shipping</h1>
      <div className="shipInputContCorrect">
        <Grid container spacing={2} noValidate>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="off"
              fullWidth
              label="First Name"
              name="firstName"
              value={firstName || ""}
              onChange={handleChange}
              placeholder="Your first name"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="off"
              fullWidth
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              value={lastName || ""}
              placeholder="Your last name"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete="off"
              label="City"
              name="city"
              onChange={handleChange}
              value={city || ""}
              placeholder="Enter your city"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete="off"
              label="State or Region"
              name="state"
              required
              onChange={handleChange}
              value={state || ""}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              label="Address Line 1"
              name="AddressLine1"
              onChange={handleChange}
              value={AddressLine1 || ""}
              required
            />
            <FormHelperText>Street address, P.O. box</FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="off"
              label="Address Line 2"
              name="AddressLine2"
              onChange={handleChange}
              value={AddressLine2 || ""}
            />
            <FormHelperText>
              Apartment, suite, unit etc. (optional)
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete="off"
              label="Postal Code"
              name="PostalCode"
              onChange={handleChange}
              value={PostalCode || ""}
              required
            />
            <FormHelperText>Zip/Postal Code</FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth disabled>
              <InputLabel id="select-label">United States</InputLabel>
              <Select labelId="select-label"></Select>
              <FormHelperText>currently only operating in US</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ paddingTop: "20px" }}
      >
        <Grid item>
          <Button color="primary" href="/" >Go To Home</Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            disabled={!isValid}
            variant="contained"
            onClick={isValid ? handleNext : null}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ShipLocation;

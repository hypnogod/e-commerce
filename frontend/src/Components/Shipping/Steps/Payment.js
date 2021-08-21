import React from "react";
import {
  Grid,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

function Payment({
  prevButton,
  handleNext,
  handleChange,
  formvalues: { PaymentMethod },
}) {
  const Continue = PaymentMethod.length > 0;

  return (
    <div className="otherPageCOntainer">
      <h1>Payment</h1>
      <div className="listContainerConfirm">
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose a payment method:</FormLabel>
          <RadioGroup
            onChange={handleChange}
            value={PaymentMethod || ""}
            name="PaymentMethod"
          >
            <FormControlLabel
              value="Paypal"
              control={<Radio />}
              label="Paypal"
            />
            <FormControlLabel
              value="Credit"
              control={<Radio />}
              label="Credit Card"
            />
          </RadioGroup>
        </FormControl>
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
          <Button variant="contained" onClick={prevButton}>
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            disabled={!Continue}
            onClick={Continue ? handleNext : null}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Payment;

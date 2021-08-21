import React from "react";
import {
  Grid,
  Button,
  ListItemText,
  ListItem,
  List,
  Divider,
} from "@material-ui/core";
import { useSelector } from "react-redux";

function StepsConfirm({ prevButton, handleNext, formValues }) {
  const {
    firstName,
    lastName,
    city,
    state,
    AddressLine1,
    AddressLine2,
    PostalCode,
    PaymentMethod,
  } = formValues;
  const stateRe = useSelector((state) => state);
  const { cartItems } = stateRe.cart;

  var total = 0;
  var totalshipping = 0;
  function totalShipping() {
    if (cartItems.length > 0) {
      for (var i = 0; i < cartItems.length; i++) {
        totalshipping = cartItems[i].shipping + totalshipping;
      }
    }
  }
  function totalPrice() {
    if (cartItems.length > 0) {
      for (var i = 0; i < cartItems.length; i++) {
        total = cartItems[i].price + total;
      }
      total + totalshipping;
    }
  }
  totalShipping();
  totalPrice();

  return (
    <div className="otherPageCOntainer">
      <h1>Confirm</h1>
      <List disablePadding className="listContainerConfirm">
        <ListItem>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <ListItemText
                primary="First Name"
                secondary={firstName}
                className="listitemConfirm"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItemText
                primary="Last Name"
                secondary={lastName}
                className="listitemConfirm"
              />
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <ListItemText
                className="listitemConfirm"
                primary="Address"
                secondary={
                  AddressLine1 + ", " + city + ", " + state + PostalCode
                }
              />
            </Grid>
            {AddressLine2.length > 0 ? (
              <Grid item xs={12} sm={6}>
                <ListItemText
                  primary="Address Line 2"
                  secondary={AddressLine1}
                  className="listitemConfirm"
                />
              </Grid>
            ) : null}
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <ListItemText
                primary="Payment Method"
                secondary={PaymentMethod}
                className="listitemConfirm"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItemText
                primary={"Total Price: $" + total}
                secondary={"$" + totalshipping + " Shipping price"}
                className="listitemConfirm"
              />
            </Grid>
          </Grid>
        </ListItem>

        <Divider />
        <h2
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Products
        </h2>
        {cartItems.map((items) => (
          <div key={items.product}>
            <ListItem>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <img src={items.image} alt={items.name} width={150} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <ListItemText
                    secondary={
                      "Quantity: " + items.qty + "\n Price: $" + items.price
                    }
                    primary={items.name}
                  />
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
          </div>
        ))}
        <h3 style={{ float: "right", margin: "10px" }}>Total: ${total}</h3>
      </List>
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
          <Button color="secondary" variant="contained" onClick={handleNext}>
            Confirm
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default StepsConfirm;

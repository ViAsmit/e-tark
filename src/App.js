import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import AccordionComponent from "./AccordionComponent";
import AccordionComponent2 from "./AccordionComponent2";
import Appbar from "./Appbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      <br />
      <br />
      <Container style={{ width: "50%" }}>
        <center>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            About Us
          </Typography>
        </center>
        <br />
        <Typography variant="h6">
          ETark is an automated complaint resolution platform for smartphone
          complaints. We help in resolving both technical and non-technical
          smartphone problems via. our service offerings. ETark was
          conceptualized after identifying the plight of hapless smartphone
          customers and the inefficiency of the service centers.
        </Typography>
        <br />
        <Typography variant="h6">How ETark helps customers?</Typography>
        <br />
        <center>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Resolving technical problems:
          </Typography>
        </center>
        <br />
        <Typography variant="h6">
          Having a technical problem with your smartphone can be disastrous
          because unlike any other gadget, a smartphone lets you stay connected
          with the world and manage all your electronic records. The current
          approaches that a user usually takes :
        </Typography>
        <br />
        <AccordionComponent />
        <br />
        <center>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Resolving non-technical problems:
          </Typography>
        </center>
        <br />
        <Typography variant="h6">
          Problems like missing, damaged or duplicate items during purchase or
          Payment related issues like improper bill, wrongful deductions etc are
          some of the examples of non- technical problems that customers face.
        </Typography>
        <br />
        <Typography variant="h6">
          The ideal way to solve this is to reach out to the seller (e-commerce
          firm/ offline retailer) or the device manufacturer (e.g. Samsung,
          Apple etc.). However a customer’s voice can go unheard in a discussion
          with the other party. So to lend a strength to the customer’s voice,
          we do an instant analysis of his/ her complaint and share certain
          reports with him/ her which can help identify the merit of the
          complaint/ grievance.
        </Typography>
        <br />
        <AccordionComponent2 />
      </Container>
    </div>
  );
}

export default App;

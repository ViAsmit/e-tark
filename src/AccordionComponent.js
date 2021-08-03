import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    padding: "8px 20px",
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
    color: "rgb(36, 95, 211)",
  },
}));

function AccordionComponent({ texts }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Visit an authorized service center
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Typography variant="h6" style={{ fontWeight: "900" }}>
              While an authorized service center is always recommended, but as a
              user, you don’t know if:
            </Typography>
            {/* <br /> */}
            <Typography variant="h6" style={{ paddingLeft: "30px" }}>
              <ol type="A">
                <li>
                  Parts are available at the service center to service your
                  device
                </li>
                <li>
                  Your device would be considered within warranty by the service
                  center
                </li>
                <li>
                  The exact problem in your device and the price to be paid to
                  fix that
                </li>
              </ol>
            </Typography>
            <Typography variant="h6">
              All this demands you to visit the service center and wait in a
              queue with other customers which can often take hours with the
              possibility of parts not available or the device not considered
              within warranty by the service center or the quoted price of
              servicing out of your budget!
            </Typography>
          </Container>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Visit an unauthorized service center
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Typography variant="h6" style={{ fontWeight: "900" }}>
              Although an unauthorized service center might seem light on your
              pocket, this route is never recommended because :
            </Typography>
            {/* <br /> */}
            <Typography variant="h6" style={{ paddingLeft: "30px" }}>
              <ul>
                <li>
                  Due to the poor quality of servicing, they often result in
                  frequent annual repairs for the same issue or some other
                  problem thus making the actual cost of repair for that phone
                  way higher than the cost of repair by an authorized service
                  center
                </li>
                <li>
                  Your personal data could be retrieved from your device even if
                  you have removed the same from your device. So due to low
                  accountability of unauthorized service centers, data could be
                  stolen from your device during servicing.
                </li>
              </ul>
            </Typography>
            <Typography variant="h6">
              All this demands you to visit the service center and wait in a
              queue with other customers which can often take hours with the
              possibility of parts not available or the device not considered
              within warranty by the service center or the quoted price of
              servicing out of your budget!
            </Typography>
          </Container>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Book for a home visit repair service
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Typography variant="h6" style={{ fontWeight: "900" }}>
              Home visit repair services are quite popular nowadays due to the
              convenience of home repair that they promise but this should be
              avoided due to the following reasons:
            </Typography>
            {/* <br /> */}
            <Typography variant="h6" style={{ paddingLeft: "30px" }}>
              <ul>
                <li>
                  Most of the home repair services don’t have any authorization
                  from the device manufacture to provide servicing, thus the
                  accountability and quality of servicing is low
                </li>
                <li>
                  Many a times your device demands a part replacement which may
                  not be available for the home visit repair agent at that point
                  and post their inspection of the device at your location, they
                  might take your device to their service center thus causing an
                  additional delay in the servicing of the device
                </li>
              </ul>
            </Typography>
            <Typography variant="h6">
              All this demands you to visit the service center and wait in a
              queue with other customers which can often take hours with the
              possibility of parts not available or the device not considered
              within warranty by the service center or the quoted price of
              servicing out of your budget!
            </Typography>
          </Container>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Device Insurance companies
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Typography variant="h6" style={{ fontWeight: "900" }}>
              Although device Insurance companies promise to insure your device
              from future damage or malfunctioning:
            </Typography>
            <br />
            <Typography variant="h6">
              They often result in long waiting time to get clearance from the
              smartphone manufacturer to get the ensuing servicing covered which
              offsets the cost savings that they promise through their insurance
            </Typography>
            <br />
            <Typography variant="h6">
              All these approaches have their own share of flaws.
            </Typography>
            <br />
            <Typography variant="h6">
              ETark firmly believes that the best way to solve any technical
              issue is through authorized service centers only provided the
              inefficiencies of the service centers are removed and the customer
              doesn’t have to go through any hassle. This is exactly where we
              step in and we ensure that both the customer and the service
              center are seamlessly connected!
            </Typography>
          </Container>
        </AccordionDetails>
      </Accordion>
      <br />
    </div>
  );
}

export default AccordionComponent;

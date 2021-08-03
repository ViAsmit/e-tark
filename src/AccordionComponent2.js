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

function AccordionComponent2({ texts }) {
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
            Chances of winning
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Typography variant="h6">
              Chances of winning tells you how likely you are to win in a
              consumer court had the complaint been filed there
            </Typography>
            <br />
            <Typography variant="h6">Or Alternatively,</Typography>
            <br />
            <Typography variant="h6">
              How likely you are to win in a negotiation with the other party
              (device manufacturer or seller) by quoting your winning chances in
              a consumer court as a reference
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
            Expected compensation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            <Typography variant="h6">
              Expected compensation tells you what compensation (free servicing,
              product/ part replacement or monetary compensation) you are likely
              to get from the other party had your complaint been filed in a
              consumer court
            </Typography>
            <br />
            <Typography variant="h6">Or Alternatively,</Typography>
            <br />
            <Typography variant="h6">
              what compensation (free servicing, product/ part replacement) you
              are likely to get from the other party in a negotiation
            </Typography>
          </Container>
        </AccordionDetails>
      </Accordion>
      <br />
    </div>
  );
}

export default AccordionComponent2;

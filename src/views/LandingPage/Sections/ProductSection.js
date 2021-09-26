import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Where to find us?</h2>
          <h5 className={classes.description}>
          We are easy to be found, accessible via any land transport. Still confused? Click on the link below to get the location on a map!
          </h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15720.048900310032!2d76.3885948!3d9.9329394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd015a4d02070990!2sPPG%20TOURIST%20HOME!5e0!3m2!1sen!2sin!4v1632645553965!5m2!1sen!2sin"
            width="100%"
            height="600"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </GridItem>
      </GridContainer>
    </div>
  );
}

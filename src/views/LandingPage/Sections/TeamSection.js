import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Security, LocalParking, ArrowUpward, Tv } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>At your service</h2>
      <div className={classes.services}>
      <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Free Parking"
              description="Park your vehicle without any worry! We have a lot of space."
              icon={LocalParking}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Entertainment"
              description="Keep yourself entertained with free TV & WiFi services!"
              icon={Tv}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Escalator"
              description="Escalator lift services available, we care about the elderly."
              icon={ArrowUpward}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Security"
              description="24x7 front desk with security!"
              icon={Security}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

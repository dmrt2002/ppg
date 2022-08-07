import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Phone, Email, WhatsApp } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import InfoArea from "components/InfoArea/InfoArea";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          <h4 className={classes.description}>
            You can contact us by the following ways.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  description="Click on the icon to chat with us on whatsapp"
                  actionUrl="https://wa.me/917012622260"
                  icon={WhatsApp}
                  iconColor="primary"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  description="Call us on +91 04842711898, +91 9387262354"
                  icon={Phone}
                  iconColor="primary"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  description="Write to us at ppgtouristhome2015@gmail.com"
                  icon={Email}
                  actionUrl="mailto:ppgtouristhome2015@gmail.com"
                  iconColor="primary"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { getBookings } from "firestore.js";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import SectionCarousel from "./Sections/SectionCarousel.js";

const dashboardRoutes = [];
getBookings();
const useStyles = makeStyles(styles);

import banner from "assets/img/ppg-banner.png";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgFluid
  );
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Welcome To Your Second Home"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/bg.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <img src={banner} alt="..." className={imageClasses} />
              <h2 className={classes.subHeader}>The best hotel in town!</h2>
              <hr className={classes.divider}></hr>
              <h3>
                Book your rooms now so that you have a hassle free living experience while visiting Chottanikara, Kochi!
              </h3>
              <br />
              <Link to="/book">
              <Button
                color="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                round
              >
                Book Now
              </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <SectionCarousel />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js"
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import banner from "assets/img/ppg-banner.png";
import FormControl from "@material-ui/core/FormControl";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import Datetime from "react-datetime";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CustomInput from "components/CustomInput/CustomInput";
import CardFooter from "components/Card/CardFooter";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate , setEndDate] = React.useState(new Date())
  const classes = useStyles();
  const imageClassesBanner = classNames(
    classes.imgFluid
  );
  const submit = () => {
    console.log(startDate)
  }
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Book your room(s)."
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/bg.jpg").default}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <img src={banner} alt="..." className={imageClassesBanner} />
            </GridItem>
          </GridContainer>
        </div>
        </Parallax>
      <div >
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
            <GridItem xs={6} sm={6} md={6}>
              <Card className={classes.cardSize}>
                <form className={classes.form}>
                  <CardBody>
                    <CustomInput
                      labelText="Full Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                      }}
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                      }}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <CustomInput
                      labelText="Phone..."
                      id="phone"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "tel",
                      }}
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  </CardFooter>
                </form>
              </Card>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
              <Card className={classes.cardSize}>
                <form className={classes.form}>
                  {/* <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader> */}
                  <CardBody>
                  <FormControl fullWidth>
                    <Datetime
                      className={classes.date}
                      inputProps={{ placeholder: "Start Date" }}
                      onChange={date => setStartDate(date)}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "End Date" }}
                      onChange={date => setEndDate(date)}
                    />
                  </FormControl>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={submit} simple color="primary" size="lg">
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

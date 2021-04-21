import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from "assets/jss/material-kit-react.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
    
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    width: "26px",
    height: "26px"
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden"
  },
  title,
  description: {
    color: '#000000',
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "15px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "30px",
    height: "30px"
  }
};

export default infoStyle;

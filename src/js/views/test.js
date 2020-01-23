import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/demo.scss";

export const Test = props => {
	return <div className="container">Ciao, {props.name}</div>;
};
Test.propTypes = {
	name: PropTypes.string
};

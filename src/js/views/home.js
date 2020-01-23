import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Test } from "./test";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
			<Test name={store.test} />
			<Test name="Jose" />
			<Test />
			<Test />
			<Test />
			<Link to="/">
				<span className="btn btn-primary btn-lg" role="button">
					Back contact
				</span>
			</Link>
		</div>
	);
};

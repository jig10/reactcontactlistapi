import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const id = props.match.params.id;
	const { actions, store } = useContext(Context);
	const contactBeingEdited = store.contacts.find((c, i) => i == id);
	if (store.contacts.length == 0)
		return (
			<img
				src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
				style={{ position: "fixed", left: "50vw", top: "50vh" }}
			/>
		);
	if (!contactBeingEdited) return "Contact not found";

	const [name, setName] = useState(contactBeingEdited.full_name);
	const [email, setEmail] = useState(contactBeingEdited.email);
	const [address, setAddress] = useState(contactBeingEdited.address);
	const [phone, setPhone] = useState(contactBeingEdited.phone);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact: {name}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={e => setName(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={e => setPhone(e.target.value)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={e => setAddress(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={address}
						/>
					</div>
					<button
						onClick={() => actions.updateContact(id, name, address, email, phone)}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};

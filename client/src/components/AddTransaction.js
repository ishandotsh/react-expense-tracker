import React, { useState, useContext } from "react";

import { GlobalContext } from "./../context/GlobalState";

export const AddTransaction = () => {
	let [message, setMessage] = useState("");
	let [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const id = Math.floor(Math.random() * 100000);
		const transaction_message =
			message === "" ? `Transaction ID: ${id}` : message;

		const newTransaction = {
			id,
			text: transaction_message,
			amount: +amount, //convert string amount to number
		};

		addTransaction(newTransaction);
		setMessage("");
		setAmount(0);
	};

	return (
		<div>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="message">Message</label>
					<input
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Enter message..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount..."
					/>
				</div>
				<div className="btn-container">
					<button className="btn add-btn">Add Transaction</button>
				</div>
			</form>
		</div>
	);
};

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	transactions: [
		// { id: 1, text: "Yeet", amount: -300 },
		// { id: 2, text: "Meat", amount: -25 },
		// { id: 3, text: "Salary", amount: 1500 },
		// { id: 4, text: "Treat", amount: -1000 },
	],
};

// create Context
export const GlobalContext = createContext(initialState);

// global Provider

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Actions

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<div id="root">
			<GlobalProvider>
				<Header />
				<div className="container">
					<div className="info">
						<Balance />
						<IncomeExpenses />
						<TransactionList />
					</div>
					<div className="form">
						<AddTransaction />
					</div>
				</div>
			</GlobalProvider>
		</div>
	);
}

export default App;

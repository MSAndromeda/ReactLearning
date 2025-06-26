import DisplayTable from "./components/DisplayTable";
import Header from "./components/Header";
import InvestmentCalc from "./components/InvestmentCalc";

import { useState } from "react";

const INITIAL_VALUES = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 10,
  duration: 5,
};

function App() {
  const [investment, setInvestment] = useState(INITIAL_VALUES);
  function investmentHandler(inputIdentifier, newValue) {
    setInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const inputisValid = investment.duration >= 1;
  return (
    <>
      {/* <h1>React Investment Calculator</h1> */}
      <Header />
      <InvestmentCalc investment={investment} onChange={investmentHandler} />
      {!inputisValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputisValid && <DisplayTable investment={investment} />}
    </>
  );
}

export default App;

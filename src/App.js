import { useState } from "react";
import FormComponent from "./components/FormComponent/FormComponent";
import HeaderComponent from "./components/HeaderComponent";
import TheadComponent from "./components/TableComponent/TheadComponent";
import TrowComponent from "./components/TableComponent/TrowComponent";

function App() {
  const [yearData, setYearData] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    // console.log(userInput, "userInput in app");
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      let yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest = totalInterest + yearlyInterest;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution,
      });
    }
    setYearData([yearlyData]);
  };

  // console.log(yearData, "yearData");
  // yearData.map((item, ind) => {
  //   return console.log(item, ind, "map");
  // });
  return (
    <div>
      <HeaderComponent />
      <FormComponent onDataSubmit={calculateHandler} />
      <table className="result">
        <TheadComponent />
        <tbody>
          {yearData.map((item) =>
            item.map((ele, ind) => <TrowComponent key={ind} item={ele} />)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

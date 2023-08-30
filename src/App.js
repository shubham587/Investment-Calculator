import FormComponent from "./components/FormComponent/FormComponent";
import HeaderComponent from "./components/HeaderComponent";
import TheadComponent from "./components/TableComponent/TheadComponent";
import TrowComponent from "./components/TableComponent/TrowComponent";

function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <HeaderComponent />
      <FormComponent />
      <table className="result">
        <TheadComponent />
        <tbody>
          <TrowComponent
            year="year"
            saving="saving"
            interestYear="interestYear"
            interestTotal="interestTotal"
            capital="capital"
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;

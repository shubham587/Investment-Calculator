import { useState } from "react";
import ButtonComponent from "../UI/Buttons/ButtonComponent";
import InputComponent from "../UI/InputComponents/InputComponent";
import styles from "./FormComponent.module.css";
const FormComponent = (props) => {
  const [userInput, setUserInput] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
  });

  const changeHandler = (value, valueType) => {
    if (valueType === "currVal") {
      setUserInput.currentSavings = value;
    } else if (valueType === "yearVal") {
      setUserInput.yearlyContribution = value;
    } else if (valueType === "intVal") {
      setUserInput.expectedReturn = value;
    } else {
      setUserInput.duration = value;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onDataSubmit(userInput);
    setUserInput({
      currentSavings: "",
      yearlyContribution: "",
      expectedReturn: "",
      duration: "",
    });
  };

  return (
    <div className="Form-control">
      <form className={styles["form"]} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <InputComponent
              hFor="current-savings"
              iFor="Current Savings"
              iType="number"
              iId="current-savings"
              val={userInput.currentSavings}
              onValChange={(val) => changeHandler(val, "currVal")}
            />
          </p>
          <p>
            <InputComponent
              hFor="yearly-contribution"
              iFor="Yearly Savings"
              iType="number"
              iId="yearly-contribution"
              val={userInput.yearlyContribution}
              onValChange={(val) => changeHandler(val, "yearVal")}
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <InputComponent
              hFor="expected-return"
              iFor="Expected Interest (%, per year)"
              iType="number"
              iId="expected-return"
              val={userInput.expectedReturn}
              onValChange={(val) => changeHandler(val, "intVal")}
            />
          </p>
          <p>
            <InputComponent
              hFor="duration"
              iFor="Investment Duration (years)"
              iType="number"
              iId="duration"
              val={userInput.duration}
              onValChange={(val) => changeHandler(val, "durVal")}
            />
          </p>
        </div>
        <p className={styles["actions"]}>
          <ButtonComponent type="reset" cName="buttonAlt" bName="Reset" />
          <ButtonComponent type="submit" cName="button" bName="Calculate" />
        </p>
      </form>
    </div>
  );
};
export default FormComponent;

import ButtonComponent from "../UI/Buttons/ButtonComponent";
import InputComponent from "../UI/InputComponents/InputComponent";
import styles from "./FormComponent.module.css";
const FormComponent = (props) => {
  const changeHandler = (value, valueType) => {
    if(valueType==="currVal"){
      
    }else if(valueType==="yearVal"){

    }else if(valueType==="intVal"){

    }else{

    }
  };

  return (
    <div className="Form-control">
      <form className={styles["form"]}>
        <div className={styles["input-group"]}>
          <p>
            <InputComponent
              hFor="current-savings"
              iFor="Current Savings"
              iType="number"
              iId="current-savings"
              onValChange={(val) => changeHandler(val, "currVal")}
            />
          </p>
          <p>
            <InputComponent
              hFor="yearly-contribution"
              iFor="Yearly Savings"
              iType="number"
              iId="yearly-contribution"
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
              onValChange={(val) => changeHandler(val, "intVal")}
            />
          </p>
          <p>
            <InputComponent
              hFor="duration"
              iFor="Investment Duration (years)"
              iType="number"
              iId="duration"
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

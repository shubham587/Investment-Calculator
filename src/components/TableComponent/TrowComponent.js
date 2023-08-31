// import styles from "./TrowComponent.module.css";
const TrowComponent = (props) => {
  console.log(props.item.yearlyInterest, "hello");

  return (
    <>
        <tr>
          <td>{props.item.year}</td>
          <td>{props.item.savingsEndOfYear}</td>
          <td>{props.item.yearlyInterest}</td>
          <td>{props.item.totalInterest}</td>
          <td>{props.item.yearlyContribution}</td>
        </tr>
    </>
  );
};
export default TrowComponent;

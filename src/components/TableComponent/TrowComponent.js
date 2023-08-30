// import styles from "./TrowComponent.module.css";
const TrowComponent = ({year, saving, interestYear, interestTotal, capital}) => {
  return (
    <>
      <tr>
        <td>{year}</td>
        <td>{saving}</td>
        <td>{interestYear}</td>
        <td>{interestTotal}</td>
        <td>{capital}</td>
      </tr>
    </>
  );
};
export default TrowComponent;

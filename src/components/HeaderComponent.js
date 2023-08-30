import logo from '../assets/investment-calculator-logo.png';
import styles from './HeaderComponent.module.css'
const HeaderComponent = () => {
  return (
    <div className={styles["Header"]}>
      <header className={styles["header"]}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};
export default HeaderComponent;

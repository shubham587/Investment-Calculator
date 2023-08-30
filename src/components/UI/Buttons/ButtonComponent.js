import styles from './ButtonComponent.module.css'
const ButtonComponent = ({type, cName, bName}) => {
  return (
    <>
      <button type={type} className={styles[cName]}>
        {bName}
      </button>
    </>
  );
};

export default ButtonComponent;

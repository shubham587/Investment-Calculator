const InputComponent = ({hFor, iFor, iType, iId,onCurrChange}) => {
    const changeHandler = (event) => {
        let currValue = event.target.value
        onCurrChange(currValue)
    }

    return(
        <>
            <label htmlFor={hFor}>{iFor} ($)</label>
            <input type={iType} id={iId} onChange={changeHandler}/>
        </>
    )
}
export default InputComponent
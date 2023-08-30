const InputComponent = ({hFor, iFor, iType, iId, val,onValChange}) => {
    const changeHandler = (event) => {
        let currValue = event.target.value
        onValChange(currValue)
    }

    return(
        <>
            <label htmlFor={hFor}>{iFor} ($)</label>
            <input value={val} type={iType} id={iId} onChange={changeHandler}/>
        </>
    )
}
export default InputComponent
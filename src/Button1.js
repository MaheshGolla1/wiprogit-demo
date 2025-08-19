

function Button1(){
    const styles={
        color:'Green',
        width: "100px",
        height: "50px",
        backgroundColor:"orange",
    border:"none",
    borderRadius: "12px",
    cursor: "pointer",
    textAlign: "center",
    marginLeft: "580px",
    marginTop: "20px"
    }
    const pp={
        textAlign: "center",
    }
    return(
        <>
        <p style={pp}> the down button is inline css</p>
        <button style={styles}>Click Me </button>
        </>
    );
}
export default Button1;
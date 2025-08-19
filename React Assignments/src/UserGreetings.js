function UserGreetings(props){
    const LoginSucces= <h1>Welcome {props.Name} to Wipro</h1>;
    const again=<h1>please try again</h1>
    return(

        // (props.Login ? <h1>Welcome {props.Name} to Wipro</h1>
        //                : <h1>please try again</h1> )
        props.Login? LoginSucces : again

    );
}
UserGreetings.defaultProps={
    Login:true,
    Name:"pooja",
}
export default UserGreetings
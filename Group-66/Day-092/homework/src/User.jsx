const name = "Guga";

function User(props) {
    return (
        props.LoggedIn ? <h2>Hello {name}!!!</h2> : <h2>Please log in to your account</h2>
    )
}

export default User;
function User(props){
    const listStyle = {
        listStyleType: "none",
        textAlign: "center",
        backgroundColor: "lightgrey",
        padding: "10px",
        color: "blue",
    }
    return(
        <ul style={listStyle}>
            <li>Name: {props.name}</li>
            <li>Age: {props.age}</li>
            <li>Email: {props.email}</li>
        </ul>
    )
}

export default User;
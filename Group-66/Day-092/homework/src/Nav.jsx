import User from "./User";

function Nav(props) {
    return (
        <User LoggedIn={props.loggedIn} />
    )
}

export default Nav;
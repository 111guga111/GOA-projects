import Nav from "./Nav";

function Header(props) {
    return (
        <Nav loggedIn={props.loggedIn} />
    )
}


export default Header;
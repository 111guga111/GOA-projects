
function Nav({textColor, bgColor, title, text}) {
  return (
    <nav style={{ color: textColor, backgroundColor: bgColor}}>
        <h1 style={{ textAlign:"center" }}>{title}</h1>
        <ul>
          <li>{text}</li>
        </ul>
    </nav>
  );
}


export default Nav;
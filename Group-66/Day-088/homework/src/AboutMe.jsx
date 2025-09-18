const src = "https://scontent.ftbs3-1.fna.fbcdn.net/v/t39.30808-6/483487015_122112452546731474_1082694367932778199_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFs3U0YpCHGT4MaVUar--FuTmWck1x4jclOZZyTXHiNyQtEnVX4by4ff0LvAju0ogIVedW5WF7qx7oOD0O9OqlX&_nc_ohc=7AMxjOLawdwQ7kNvwF7Pvsd&_nc_oc=AdnL5s7hjvnMS1sm3oXxTPvmwPJP5rtgWwa1CVJ8NTaKXOWWEawPH1VnGhjKWRQo2LI&_nc_zt=23&_nc_ht=scontent.ftbs3-1.fna&_nc_gid=qMpUK1zfsTyLF9TK5MN7wg&oh=00_Afbij2BJkONvIS52piXtMSooAACmOJ94M2DXHxQRRzc7kA&oe=68D0C4BE"
const AboutMe = () => {
    return (
    <main>
        <h1>About Me</h1>
        <h3>My name is guram, but everyone calls me Guga, my profesion is programming and my hobby is MMA.</h3>
        <img src={src} />
    </main>
);
}

export default AboutMe;
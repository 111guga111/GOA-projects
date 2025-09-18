
const Contact = () => {
    return (
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Contact;
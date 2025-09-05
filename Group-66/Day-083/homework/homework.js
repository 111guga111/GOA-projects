import axios from "axios";
import chalk from "chalk"

const asy = async()=>{
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
    const joke = res.data
    console.log(chalk.green(joke.setup))
    setTimeout(()=>{console.log(chalk.red(joke.punchline))}, 5000)
};

asy();
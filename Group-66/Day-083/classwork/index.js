import chalk from "chalk";
import qrcode from "qrcode"

const link = "https://www.facebook.com/guram.topchishvili"



console.log(chalk.red("Works"));
console.log(chalk.green("Works"));
console.log(chalk.black("Works"));
console.log(chalk.blue("Works"));
console.log(chalk.grey("Works"));
console.log(chalk.cyan("Works"));
console.log(chalk.blueBright("Works"));
console.log(chalk.bgGray("Works"));
console.log(chalk.bgBlue("Works"));
console.log(chalk.bgBlack("Works"));



//package.json keeps my project info and what packages it uses

//node_modules npm installs packages here

//CommonJS system in node witch lets us use require and exports

//npm helps us update our packages, installs and manages packages

const opts = {
  errorCorrectionLevel: "H",
  type: "png",
  width: 300,
  margin: 1,
  color: {
    dark: "#000000",
    light: "#ffffff"
  }
};

qrcode.toFile("qr-code.png", link, opts, (err) => {
  if (err) throw err;
  console.log(chalk.green("QR code saved as qr-code.png"));
});
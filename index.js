
//taking user input 
import inquirer from 'inquirer';


import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
  .prompt([ 
    {
        message: "Enter URL: ",
        name: "URL"
    },
    
  ])
  .then((answers) => {
    const url = answers.URL;

    //using qr-image module to create a qr-code png to inpuuted URL 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));



    //using native fs module to create a txt file with url saved in it
    fs.writeFile("URL.txt", url, (err)=>{
        if (err) throw err;
        console.log("The file has been saved ")
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  


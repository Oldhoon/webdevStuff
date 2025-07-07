import inquirer from 'inquirer'; 
import qr from 'qr-image';
import fs from 'fs'; 

inquirer.prompt([{
    message: "type in your url:",
    name:"URL"
    }])
.then((answers) => {
    const url = answers.URL;
    let qrcode = qr.image(url);
    qrcode.pipe(fs.createWriteStream("qr_img.png"));
    

})
.catch((error) => {
    if (error) console.log("failed");
});

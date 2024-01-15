// var http = require('http');


// http.createServer(function (req, res) {
//   res.write('Hello World!'); 
//   res.end(); 
// }).listen(8080); 

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {'name':'URL','message':'Enter your url '}
  ])
  .then((answers) => {
   var url=  answers.URL;
   console.log(url)
   var qr_png = qr.image(url);
   console.log(url)
   qr_png.pipe(fs.createWriteStream('teddy_bear.png'));
  })
  
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  fs.writeFile(fileName,fileContent,(error)=>{
  if(error){
  console.log(error)
  }else{
    console.log(`${fileName} ${fileContent}`);
  }
  })
  
};

module.exports = { writeFile };

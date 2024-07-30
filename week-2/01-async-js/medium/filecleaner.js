// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

// ```

const fs = require("fs");
// const { stringify } = require("querystring");

function fileCleaner(){

    fs.readFile("a.txt","utf-8",(err,data)=>{

        // for(let i = 0; i<output.length; i++){
        //     if(output[i] == " " && output[i+1] == " "){
        //         output = output.replace(" ","");
        //     }
        // }
        let output = data.replace(/\s+/g," ");
        fs.writeFile("a.txt",output,(err)=>{
            if(err) throw err;
            console.log("File written successfully");
        })
        // console.log(data);
    })
}
fileCleaner();

// function fileCleaner(){

//     let data = "hello     world    my    name   is       raman";
//     let output = data.replace(/\s+/g," ");
//     fs.writeFile("a.txt",output,(err)=>{
//         if(err){
//             console.error(`Error writing file: ${err.message}`);
//             return;
//         }
//         console.log("File written successfully");
//     })
// }
// fileCleaner();
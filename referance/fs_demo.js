const fs= require('fs');
const path= require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if(err) throw err;
//     console.log('Folder Created')
// })

// Create and write the file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!' , err =>{
//     if (err) throw err;
//     console.log('file created...');
//     // File append
//     fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), "Hello world!!" , err => {
//         if (err) throw err;
//         console.log("file appended....")
//     })
// })

//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8', (err,data) =>{
//     if (err) throw err;
//     console.log(data);
// })

//Rename file
fs.rename(
    path.join(__dirname, '/text', 'hello.txt'),
    path.join(__dirname, '/text', 'helloWorld.txt'),
    err =>{
    if (err) throw err;
    console.log('rename file name...');
})
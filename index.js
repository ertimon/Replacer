const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const searchFile = process.argv[3];
const search = require(`./${searchFile}`);
const ignore = ['jpg','jpeg','png','gif','bmp', 'dib','tiff','webp'];

let handler = (dir) => {
    let files = fs.readdirSync(dir);

    files.forEach((file) => {
        file = path.resolve(dir, file);
        let stat = fs.statSync(file);

        if (stat && stat.isDirectory()) { 
           handler(file);
        } else if (!ignore.includes(getExtension(file))){ 
            let fileContent = fs.readFileSync(file,"utf8");

            for (k in search) {
                fileContent = replaceAll(fileContent, k, search[k]);
                fs.writeFileSync(file,fileContent);
            }
        }
    });
}
let replaceAll  = (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
}
let getExtension = (filename) => {
    let ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}
handler(directory);
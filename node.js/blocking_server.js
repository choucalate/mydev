var fs = require("fs");

function fncallb(err, results)
{
    if(err) 
    {
        console.log("failed");
        return;
    }
    console.log('File contents:\n', results);
}

function writeCB(err, results)
{
    if(err) 
    { 
        console.log("failed"); 
        return;
    }
    console.log("file contents written:\n", results);
}
fs.readFile(('/rand.txt'), 'utf-8', fncallb);

//fs.write('rand.txt', "asdfasdf", writeCB);
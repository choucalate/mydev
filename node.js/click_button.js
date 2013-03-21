var fs = require('fs');
var dns = require('dns');
dns.lookup('google.com', function(err, ipAddress){
    if(err) {
        console.log("failed on dns");
        return;
    }
    console.log('google.com resolved to ' + ipAddress);
});
/*
function fncallb(err, results)
{
    if(err) 
    {
        console.log("failed");
        return;
    }
    console.log('File contents: ', results);
}

fs.readFile(('/etc/passwd'), 'utf-8', fncallb);
*/
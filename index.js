const chainbytes = require('./chainbytes');

chainbytes.getMachines(100).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

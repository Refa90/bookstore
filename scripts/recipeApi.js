function getRecipe(arg){
    const request = require('request');
    
    request('http://food2fork.com/api/search?key=790edb877a7b2034d8a143910769dabc&q='+arg, { json: false }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    obj = JSON.parse(body);
    // TODO domething with the object, and return value
    });
}
exports.getRecipe = function(arg){
    getRecipe(arg);
}
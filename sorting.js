const fs = require('fs');
function readJSON(filePath, cb){
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const tag = JSON.parse(fileData);
            return cb && cb(null, tag);
        } catch (err){
            return cb && cb(err);
        }
       
    });
}

readJSON("./taglist.json", (err, taglist) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(taglist.wip);
});
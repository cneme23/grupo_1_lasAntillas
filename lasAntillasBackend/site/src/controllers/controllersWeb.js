const path = require("path");
module.exports = {
    index: (req, res) => {
        //res.sendFile(path.resolve(__dirname, "..", "views", "web", "index.html"));
        res.render(path.resolve(__dirname, "..", "views", "web", "index.ejs"));

    }
}
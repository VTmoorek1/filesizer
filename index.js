var express = require("express");
var multer = require("multer");

var app = express();
var upload = multer({dest: "./uploads/"});
var port = process.env.PORT || 5000;


app.use(express.static('public'));

app.post("/filesize",upload.single("sFile"), function(request, response) {
    var file = request.file;
    response.send({"size":file.size});
});

app.get("*", function(request, response) {
    response.send("404!");
});

app.listen(port, function() {
    console.log("App listening on port " + port);
});

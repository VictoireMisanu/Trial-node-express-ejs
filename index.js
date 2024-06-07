const express = require("express")
const main_app = express()
const articles = require("./data/db.json")

main_app.set("view engine", "ejs")
main_app.set("views", __dirname + "/views")
main_app.use(express.static(__dirname + "/css"))

main_app.get("/", function(req, res){
    res.render("index")
});

main_app.get("/about", function(req, res){
    res.render("about")
});

main_app.get("/*", function(req, res){
    res.render("404")
});



const port = 3000

main_app.listen(port, function(){
    console.log(`le serveur est lancé au port ${port} et l'application est disponible sur http://localhost:${port}`)
});
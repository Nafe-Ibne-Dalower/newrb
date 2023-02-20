const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs')
const { url } = require("inspector")
const path = require("path")


app.use(bodyParser.urlencoded({extended: true}));


// const http = require("https")
// EXPRESS SPECIFIC STUFF
app.use(express.static(path.join(__dirname,'static'))) // For serving static files
// ENDPOINTS
app.get('/', (req, res)=>{  
    res.status(200).sendFile(path.join(__dirname,'static'));
    // res.status(200).sendFile(path.join(__dirname,'static/index.html'));
    res.status(200).sendFile(path.join(__dirname,'static/Registration-form-RBMCAG.html'));
    res.status(200).sendFile(path.join(__dirname,'static/404.html'));
    res.status(200).sendFile(path.join(__dirname,'static/assets'));
    res.status(200).sendFile(path.join(__dirname,'static/assets/css/style.css'));
    res.status(200).sendFile(path.join(__dirname,'static/assets/css/form-css.css'));

})

app.post('/', (req, res)=>{
    n = req.body.fn
    Dof = req.body.dof
    gen = req.body.gen
    age = req.body.age
    sn = req.body.sn
    cls = req.body.cls
    tel = req.body.tel
    mail = req.body.mail
    let dirForFile = path.join(__dirname, 'database.txt');
    let outputToWrite  = `\n{Name: ${n}, Dof: ${Dof}, Gender: ${gen}, Age: ${age}, School_name: ${sn}, Class: ${cls}, Phone: ${tel}, E-mail: ${mail}}`
    fs.appendFileSync(dirForFile, outputToWrite, function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
    res.status(200).sendFile(path.join(__dirname,'static/congratulation.html'))
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
// Export the Express API
module.exports = app;

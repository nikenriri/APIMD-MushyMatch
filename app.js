const express = require('express');
const app = express();
const { db } = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/get-jamur', function (req, res){
    const queryStr = 'SELECT * FROM about';
    db.query(queryStr, (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.send(results);
            console.log(results);
        }
    })
})

app.get('/get-recipes', function (req, res){
     const queryStr = 'SELECT * FROM recipes';
     db.query(queryStr,(err, results) => {
         if(err){
             console.log(err);
         }else{
             res.send(results)
             console.log(results);
         }
     })
})

app.get('/list-recipes', function (req, res){
    const queryStr = 'SELECT id_recipe, name_recipe, pict_recipe FROM recipes';
    db.query(queryStr,(err, results) => {
        if(err){
            console.log(err);
        }else{
            res.send(results);
            console.log(results);
        }
    })
})

app.get('/detil-recipes', function (req, res){
    const param = req.query;
    const id = param.id;
    
    const queryStr = "SELECT * FROM recipes WHERE id_recipe = ?";
    const values = [id];
    db.query(queryStr, values, (err, results) => {
        if(err){
            console.log(err);
        }else{
            res.send(results);
            console.log(results);
        }
    })
})



app.listen(3001, () => {
    console.log('Server connected!')
});
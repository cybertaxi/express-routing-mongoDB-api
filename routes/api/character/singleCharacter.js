//contains all the DB functions on single character details
//More examples of MongJS @ https://github.com/mongo-js/mongojs

'use strict';

const mongojs = require('mongojs');
const db = mongojs('example')
const character = db.collection('characters');


function sCharacterContext(){

    function getCharacter(req, res){
        console.log('GET Request was made to: ' + req.originalUrl);
        const { name } = req.body || res.status(400).send("Error in body");
        character.findOne(
            { name: name }, {  _id: 0 },
        (err, doc) => {
            if(!doc || err ){res.status(400).send({error:'Somethings wrong, check your field'})};
            console.log(doc);
            res.status(200).send(doc);
        });
    }

    function insertCharacter(req, res){
        console.log('INSERT Request was made to: ' + req.originalUrl);
        const { name, job, country } = req.body || res.status(400).send ("error in request!");
        character.insert(
            { name: name, job: job, country: country},            
            { ordered: true, },
        (err, docs) => {
            console.log(docs);
            if(!doc || err ){res.status(400).send({error:'Somethings wrong, check your field'})};
            res.status(200).send({success:'Insert Successfully!'});
        });
    }

    function deleteCharacter(req, res){
        console.log('DELETE Request was made to: ' + req.originalUrl);
    }

    function updateCharacter(req, res){
        console.log('UPDATE Request was made to: ' + req.originalUrl);
    }

    return {
        get: getCharacter,
        post: insertCharacter,
        delete: deleteCharacter,
        update: updateCharacter
    };
}
module.exports = sCharacterContext;


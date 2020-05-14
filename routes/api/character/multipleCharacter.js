//contains all the DB functions
//More examples of MongJS @ https://github.com/mongo-js/mongojs
const mongojs = require('mongojs');
const db = mongojs('example')
const character = db.collection('characters');

function mCharacterContext(){
    function getAllCharacter(req, res){
        console.log('GET Request was made to: ' + req.originalUrl);
        // DB.getAll('Character');
        let parameters = [];
        let postData = {};
        character.find((err, docs)=>{ 
            docs.forEach((entry) => {
                parameters.push({ name: entry.name});
            });
            res.status(200).send(parameters);
        });
    }

    return {
        getAll: getAllCharacter
    };
}

module.exports = mCharacterContext;


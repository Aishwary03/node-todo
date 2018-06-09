//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to find Mongo DB server');
    }

    console.log('Conntected to Mongo DB server'); 
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
    //     console.log(result)
    // });

    // db.collection('Todos').deleteOne({text: 'Nothing to do'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({text: 'Nothing to do'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // })

    db.collection('Users').deleteMany({_id: new ObjectID('5b10e17397cd686d7e5873cf')}).then((result) => {
        console.log(result);
    })

    client.close();
});
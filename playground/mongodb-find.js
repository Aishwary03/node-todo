//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to find Mongo DB server');
    }
    console.log('Conntected to Mongo DB server'); 
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b0f898ad958262e384d0aa1')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find Todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find Todos', err);
    });

    db.collection('Users').find({name: 'Aishwary'}).toArray().then((users) => {
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Unable to find users');
    })

    client.close();
});
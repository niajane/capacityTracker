const {MongoClient} = require('mongodb');
require('dotenv').config();

async function main() {
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri);
    try{
        await client.connect();
        await updateAll(client);
    } catch(e) {
        console.error(e);
    } finally {
        await client.close()
    }

}

async function updateAll(client) {
    var results = await client.db("capacityTracker").collection("depotTest").updateMany(
        {},
        [{
            $set: {
                weekday: {
                    $dayOfWeek: "$date2"
                }
            }
    }]);
    console.log(results);
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function changeDate(client){
    let results = await client.db("capacityTracker").collection("depotTest")
                    .updateMany(
                        {date: {$not: {$type: 9}}},
                        [{$set: {date2: {$toDate :"$date"}}}])
    console.log(results)
}
 

main().catch(console.error);

//duplicate collection:
//db.originalColl.aggregate([ { $match: {} }, { $out: "resultColl"} ]);

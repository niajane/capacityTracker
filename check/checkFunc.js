exports = function() {
  
  const axios = require('axios');
  const regexp = /\'count\' : (.+),/
  
  const urls = context.values.get("URLs");
  
  for(let item of urls) {
    axios.get(item.url)
    .then((response) => {
      let count = parseInt(response.data.match(regexp)[1]);
      let collection = context.services.get("mongodb-atlas").db("capacityTracker").collection(item.name);
      let newItem = {
        "date": Date.now(),
        "count": count,
      };
      collection.insertOne(newItem)
        .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
        .catch(err => console.error(`Failed to insert item: ${err}`)) 
    })
  }
  
};
var admin = require("firebase-admin");


var serviceAccount = require("./permissions.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  
const db = admin.firestore();

async function addDetails(text){
    //console.log('====',text)
    const res = await db.collection('dynamicresponses').add({
          message:text
    })
    console.log('Document uploaded with id',res.id)
}

exports.addDetails = addDetails;
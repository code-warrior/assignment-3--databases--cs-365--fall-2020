const db = "passwords";
const database = db.getSiblingDB(db);
myObjectId = ObjectId();
myTimestamp = myObjectId.getTimestamp();
print(myTimestamp);
mongoimport --db passwords --collection thePasswordsCollection  --file usertabledatabase.json;
mongoimport --db passwords --collection thePasswordsCollection  --file logininfoandpassworddatabase.json;
database.thePasswordsCollection.updateMany({"loginInformation.password.passwordCreated":myTimestamp});
database.thePasswordsCollection.insert({"_id":"5fd9553540db20354a068ead", "loginInformation":{"username":"IJohn346","password":{"passwordForWebsite":"IsaiahSports10","passwordcreated": "May2020"},"website":{"websiteName":"ESPN","url":"https://www.espn.com", "comment": ""}}});
database.thePasswordsCollection.find({"loginInformation.password.passwordForWebsite": "I$a1ah45"}, {"loginInformation.password.passwordForWebsite": 1,"_id": 0}).pretty();
database.thePasswordsCollection.find({"loginInformation.website.url": "https://www.google.com"}, {"loginInformation.password.passwordForWebsite": 1, "loginInformation.website.websiteName": 1, "loginInformation.website.comment": 1, "loginInformation.username": 1, "loginInformation.website.url": 1, "loginInformation.password.passwordCreated": 1, "_id": 0}).pretty();
database.thePasswordsCollection.update({"loginInformation.password.passwordForWebsite": "I$a1ah45"}, {"$set": {"loginInformation.website.url": "https://www.microsoft.com"}});
database.thePasswordsCollection.update({"loginInformation.password.passwordForWebsite": "Isaiah$g1thub"}, {"$set": {"loginInformation.password.passwordForWebsite": "newpassword"}});
database.thePasswordsCollection.update({"loginInformation.password.passwordCreated": "Oct2017"}, {"$unset": {"loginInformation.password.passwordForWebsite": "Ch@tisa1ah"}});
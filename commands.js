const db = "passwords";
const database = db.getSiblingDB(db);
myObjectId = ObjectId("5fd2503f8b8bef95c4eaafef");
database.thePasswordsCollection.insert({"_id":ObjectId("5fd2503f8b8bef95c4eaaff9"),"login_information":{"username":"IJohn346","websiteName":"ESPN","URL":"https://www.espn.com", "comment": ""},"password":{"passwordForWebsite":"IsaiahSports10","passwordcreated":ObjectId(myObjectId).getTimestamp()}});
database.thePasswordsCollection.find({"user3.password.passwordForWebsite": "I$a1ah45"}, {"user3.password.passwordForWebsite": 1,"_id": 0}).pretty();
database.thePasswordsCollection.find({"user1.login_information.URL": "https://www.google.com"}, {"user1.password.passwordForWebsite": 1, "user1.login_information.websiteName": 1, "user1.login_information.comment": 1, "user1.login_information.username": 1, "user1.login_information.URL": 1, "user1.password.passwordcreated": 1, "_id": 0}).pretty();
database.thePasswordsCollection.update({"user5.password.passwordForWebsite": "19793674"}, {"$set": {"user5.login_information.URL": "https://www.microsoft.com"}});
database.thePasswordsCollection.update({"user7.password.passwordForWebsite": "Isaiah$g1thub"}, {"$set": {"user7.password.passwordForWebsite": "newpassword"}});
database.thePasswordsCollection.update({"user9.password.passwordcreated": "Oct2017"}, {"$unset": {"user9.password.passwordForWebsite": "Ch@tisa1ah"}});
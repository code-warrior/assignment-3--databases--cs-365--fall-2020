//use passwords
db.createCollection("thePasswordsCollection")
//inserting our initial 10 users. 
//one change I made when converting from mySQL to json was the creation of seperate fields for user_id and username since this was implemented poorly in assignment 1
db.thePasswordsCollection.insertMany(
[
{
 "user-id": "01",

 "website-info": {
  "website-name": "Letsrun",
  "website-url": "www.letsrun.com"
},

 "user-info": {
  "website-name": "Letsrun",
  "username": "JohnBob",
  "first-name": "John",
  "last-name": "Bob",
  "email": "johnbob@gmail.com",
  "account-created": "10/11/2020"
},

 "password-info": {
  "website-name": "letsrun",
  "website-url": "www.letsrun.com",
  "username": "JohnBob",
  "password": "password123",
  "comment": ""
}
},
{
 "user-id": "02",

 "website-info": {
  "website-name": "Hartford.edu",
  "website-url": "https://www.Hartford.edu"
},

 "user-info": {
  "website-name": "Hartford.edu",
  "username": "JohnStacyFinancialAdvisor",
  "first-name": "John",
  "last-name": "Stacy",
  "email": "JohnStacyFinancialAdvisor@outlook.com",
  "account-created": "10/08/2020"
},

 "password-info": {
  "website-name": "Hartford.edu",
  "website-url": "www.Hartford.edu",
  "username": "JohnStacyFinancialAdvisor",
  "password": "Johnpass",
  "comment": "for college"
}
},
{
 "user-id": "03",

 "website-info": {
  "website-name": "CNN",
  "website-url": "www.CNN.com"
},

 "user-info": {
  "website-name": "CNN",
  "username": "theWizard",
  "first-name": "Mary",
  "last-name": "Stevenson",
  "email": "theWizard@comcast.net",
  "account-created": "7/12/2020"
},

 "password-info": {
  "website-name": "CNN",
  "website-url": "https://www.CNN.com",
  "username": "theWizard",
  "password": "Wizard4456",
  "comment": "account for browsing news"
}
},
{
 "user-id": "04",

 "website-info": {
  "website-name": "Spotify",
  "website-url": "www.Spotify.com"
},

 "user-info": {
  "website-name": "Spotify",
  "username": "musiclover47",
  "first-name": "Cole",
  "last-name": "Cayer",
  "email": "colecayer47@gmail.com",
  "account-created": "10/22/2016"
},

 "password-info": {
  "website-name": "Spotify",
  "website-url": "www.Spotify.com",
  "username": "musiclover47",
  "password": "IloveMusic",
  "comment": "secondary account"
}
},
{
 "user-id": "05",

 "website-info": {
  "website-name": "Discord",
  "website-url": "www.discord.com"
},

 "user-info": {
  "website-name": "discord",
  "username": "BETTYBLUE@blue.com",
  "first-name": "Daniel",
  "last-name": "Reynolds",
  "email": "BETTYBLUE@blue.com",
  "account-created": "6/17/2008"
},

 "password-info": {
  "website-name": "discord",
  "website-url": "www.discord.com",
  "username": "BETTYBLUE@blue.com",
  "password": "dannyboy",
  "comment": "for Dr. Rosiene's class"
}
},
{
 "user-id": "06",

 "website-info": {
  "website-name": "mySQL",
  "website-url": "www.mySQL.com"
},

 "user-info": {
  "website-name": "mySQL",
  "username": "SQLHACKER",
  "first-name": "lorem",
  "last-name": "ipsum",
  "email": "dolor@hartford.edu",
  "account-created": "4/4/2020"
},

 "password-info": {
  "website-name": "mySQL",
  "website-url": "www.mySQL.com",
  "username": "SQLHACKER",
  "password": "hackme123",
  "comment": "change password soon"
}
},
{
 "user-id": "07",

 "website-info": {
  "website-name": "Outlook",
  "website-url": "www.outlook.com"
},

 "user-info": {
  "website-name": "Outlook",
  "username": "JohnBob",
  "first-name": "John",
  "last-name": "Bob",
  "email": "johnbob@outlook.com",
  "account-created": "8/15/2020"
},

 "password-info": {
  "website-name": "Outlook",
  "website-url": "www.outlook.com",
  "username": "JohnBob",
  "password": "workpassword",
  "comment": "Work email"
}
},
{
 "user-id": "08",

 "website-info": {
  "website-name": "Food.com",
  "website-url": "www.Food.com"
},

 "user-info": {
  "website-name": "Food.com",
  "username": "dibs",
  "first-name": "David",
  "last-name": "Gardner",
  "email": "dgardner@outlook.com",
  "account-created": "6/23/2020"
},

 "password-info": {
  "website-name": "Food.com",
  "website-url": "www.Food.com",
  "username": "dibs",
  "password": "dibs123",
  "comment": ""
}
},
{
 "user-id": "09",

 "website-info": {
  "website-name": "ESPN",
  "website-url": "www.ESPN.com"
},

 "user-info": {
  "website-name": "ESPN",
  "username": "LebronJames",
  "first-name": "Lebron",
  "last-name": "James",
  "email": "GOAT@gmail.com",
  "account-created": "1/17/2020"
},

 "password-info": {
  "website-name": "ESPN",
  "website-url": "www.ESPN.com",
  "username": "LebronJames",
  "password": "THEGOAT",
  "comment": ""
}
},
{
 "user-id": "10",

 "website-info": {
  "website-name": "Google",
  "website-url": "www.google.com"
},

 "user-info": {
  "website-name": "Google",
  "username": "nickobrien@gmail.com",
  "first-name": "Nick",
  "last-name": "OBrien",
  "email": "nickobrien@gmail.com",
  "account-created": ""
},

 "password-info": {
  "website-name": "Google",
  "website-url": "www.google.com",
  "username": "nickobrien@gmail.com",
  "password": "ilovepasswords",
  "comment": "personal email"
}
},
]
   
)
//insert a new user
db.thePasswordsCollection.insert(
{
 "user-id": "11",

 "website-info": {
  "website-name": "mongoDB",
  "website-url": "https//:docs.mongodb.com"
},

 "user-info": {
  "website-name": "mongoDB",
  "username": "mongoMaster",
  "first-name": "Josh",
  "last-name": "Stevens",
  "email": "joshStevens@gmail.com",
  "account-created": "12/15/2020"
},

 "password-info": {
  "website-name": "mongoDB",
  "website-url": "https//:docs.mongodb.com",
  "username": "mongoMaster",
  "password": "masterMongo",
  "comment": "mongodb commands and other useful info"
}
},
)

//get the password associated with the URL of one of your 10 entries 
db.thePasswordsCollection.find(  {"password-info.website-url" : "www.Google.com"} ).pretty()

//Get all the password-related data, including the password, associated with URLs that have https in one of your 10 entries
db.thePasswordsCollection.findOne({"website-info.website-url" : {$regex: "https://"}})

//Change a URL associated with one of the passwords in your 10 entries
db.thePasswordsCollection.update(
   { "user-id" : "11" },
   {
     $set: {
		"website-info.website-url" : "docs.mongoDB.com",
		"password-info.website-url" : "docs.mongoDB.com"
     }
   }
)
//Change any entry’s password
db.thePasswordsCollection.update(
   { "user-id" : "03" },
   {
     $set: {
		"password-info.password" : "WIZARD6654"
     }
   }
)

//remove a password
db.thePasswordsCollection.update(
   { "user-id" : "05" },
   {
     $set: {
		"password-info.password" : ""
     }
   }
)










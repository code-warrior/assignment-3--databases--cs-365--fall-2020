// Use Database
db = db.getSiblingDB('passwords');

// Reset and initialize collection
db.thePasswordsCollection.drop();
db.thePasswordsCollection.insertMany([
  { site: {url: "https://www.youtube.com/", website: "Youtube"}, username: "mangolover", email: "notfake@gmail.com", password: "mangoM0ngo", date: new Date() },
  { site: {url: "https://www.youtube.com/", website: "Youtube"}, username: "rainbowDrops88", email: "my2ndEmail@hotmail.com", password: "sweetCandy", date: new Date() },
  { site: {url: "https://www.facebook.com/", website: "facebook"}, username: "foodieFredrickson", email: "notfake@gmail.com", password: "hotpot666", date: new Date() },
  { site: {url: "https://www.minecraft.net/", website: "minecraft"}, username: "dreamFanlol", email: "notfake@gmail.com", password: "bbh$muffins", date: new Date() },
  { site: {url: "https://www.audible.com/", website: "Audible"}, username: "potterhead1010", email: "my2ndEmail@hotmail.com", password: "hufflepuffduffer", date: new Date() },
  { site: {url: "https://www.wizardingworld.com/", website: "Pottermore"}, username: "mangolover", email: "notfake@gmail.com", password: "hufflepuffduffer", date: new Date() },
  { site: {url: "https://www.coolmathgames.com/", website: "cool math games"}, username: "mangolover", email: "notfake@gmail.com", password: "amaaaaaazing!", date: new Date() },
  { site: {url: "https://github.com/", website: "github"}, username: "amanda-liang", email: "notfake@gmail.com", password: "definitelyFAk3", date: new Date() },
  { site: {url: "https://www.nytimes.com/", website: "The New York Times"}, username: "potterhead1010", email: "my2ndEmail@hotmail.com", password: "1000wordpday", date: new Date() },
  { site: {url: "https://www.glassdoor.com/index.htm", website: "glassdoor"}, username: "amandaLiang", email: "my2ndEmail@hotmail.com", password: "definitelyFAk3", date: new Date() }
])

// Insert to pre-existing database
db.thePasswordsCollection.insertOne(
  {
    site: {
      url: "https://www.facebook.com/",
      website: "facebook"
    },
    username: "killingmockingjays",
    email: "my2ndEmail@hotmail.com",
    password: "2bORnot2b",
    date: new Date()
  }
);

// Get password associated with one of the urls
db.thePasswordsCollection.find({"site.url": "https://www.minecraft.net/"}, {_id: false, password: true});

// Get all pasword-related data associated with one of the urls containing "https"
db.thePasswordsCollection.findOne({"site.url": { $regex:"^https"}});

// Change a URL associated with one of the passwords in one of the entries
db.thePasswordsCollection.updateMany({"site.url": "https://www.audible.com/"}, {$set: {"site.url":"https://www.amazon.com/"} });

// Change an entry's password
db.thePasswordsCollection.updateOne({"site.url": "https://github.com/"}, {$set: {"password": "definitelyN0TFAk3"} });

// Remove a password
db.thePasswordsCollection.deleteOne({"site.url": "https://www.glassdoor.com/index.htm", "username": "amandaLiang", "password": "definitelyFAk3"});

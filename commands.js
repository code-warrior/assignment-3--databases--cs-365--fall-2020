db = db.getSiblingDB('passwords');

db.createCollection('thePasswordsCollection');

db.thePasswordsCollection.insertMany([
    {
        siteUrl: "https://github.com/",
        siteName: "GitHub",
        userName: "keith-E",
        userFirstName: "Keith",
        userLastName: "Eagleson",
        userEmail: "keagleson28@gmail.com",
        userPassword: "123456",
        userComment: "Main Github account",
        lastModified: new Date().toISOString()
    },
    {
        siteUrl: "https://blackboard.hartford.edu/",
        siteName: "UHart Blackboard",
        userName: "keagleson",
        userFirstName: "Keith",
        userLastName: "Eagleson",
        userEmail: "keagleson@hartford.edu",
        userPassword: "12345678",
        userComment: "UHart Blackboard account.",
        lastModified: new Date().toISOString()
    },
    {
        siteUrl: "http://blackboard.hartford.edu/",
        siteName: "UHart Blackboard",
        userName: "keagleson",
        userFirstName: "Keith",
        userLastName: "Eagleson",
        userEmail: "keagleson@hartford.edu",
        userPassword: "12345678",
        userComment: "UHart Blackboard account.",
        lastModified: new Date().toISOString()
    },
    {
        siteUrl: "https://hackthebox.eu/",
        siteName: "HTB",
        userName: "h4x0r",
        userFirstName: "Keith",
        userLastName: "Eagleson",
        userEmail: "obscureemail@gmail.com",
        userPassword: "12dsafdsa!3",
        userComment: "Practice PenTesting.",
        lastModified: new Date().toISOString()
    }
]);

db.thePasswordsCollection.insertOne(
    {
        siteUrl: "https://github.com/",
        siteName: "GitHub",
        userName: "eagle-playground",
        userFirstName: "Jim",
        userLastName: "Bob",
        userEmail: "junkemail@gmail.com",
        userPassword: "1234",
        userComment: "GitHub sandbox account.",
        lastModified: new Date().toISOString()
    }
)

db.thePasswordsCollection.find({ siteUrl: "https://hackthebox.eu/" }).userPassword;

db.thePasswordsCollection.find({ siteUrl: { $regex: "/^https.*/" } });

db.thePasswordsCollection.findOneAndUpdate(
    { userPassword: "1234" },
    { $set: { siteUrl: "https://google.com" } }
);

db.thePasswordsCollection.findOneAndUpdate(
    { siteUrl: "https://hackthebox.eu/" },
    { $set: { userPassword: "1234" } }
);

db.thePasswordsCollection.findOneAndUpdate(
    { siteUrl: "https://hackthebox.eu/" },
    { $set: { userPassword: null } }
);

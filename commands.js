db = db.getSiblingDB('passwords');

db.createCollection('thePasswordsCollection');

db.thePasswordsCollection.insert([
    {
        "siteUrl": "https://github.com/",
        "siteName": "GitHub",
        "userName": "keith-E",
        "userFirstName": "Keith",
        "userLastName": "Eagleson",
        "userEmail": "keagleson28@gmail.com",
        "userPassword": "123456",
        "userComment": "Main Github account",
        "lastModified": "2020-12-08T02:17:04Z"
    },
    {
        "siteUrl": "https://blackboard.hartford.edu/",
        "siteName": "UHart Blackboard",
        "userName": "keagleson",
        "userFirstName": "Keith",
        "userLastName": "Eagleson",
        "userEmail": "keagleson@hartford.edu",
        "userPassword": "12345678",
        "userComment": "UHart Blackboard account.",
        "lastModified": "2020-12-08T02:17:04Z"
    },
    {
        "siteUrl": "https://blackboard.hartford.edu/",
        "siteName": "UHart Blackboard",
        "userName": "keagleson",
        "userFirstName": "Keith",
        "userLastName": "Eagleson",
        "userEmail": "keagleson@hartford.edu",
        "userPassword": "12345678",
        "userComment": "UHart Blackboard account.",
        "lastModified": "2020-12-08T02:17:04Z"
    }
]);
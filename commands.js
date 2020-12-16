//create collection
db.createCollection('thePasswordsCollection');

//Insert 10 entries into the collecion
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 1,
        fName: 'Patrick',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 1,
        email: 'pjosephgorman@gmail.com',
        username: 'pjosephgorman',
        password: 'abcdef12',
    },
    siteInfo: {
        sitename: 'Facebook',
        siteurl: 'https://facebook.com/',
        comment: 'This account is for Facebook.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 1,
        fName: 'Patrick',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 2,
        email: 'pjosephgorman@gmail.com',
        username: 'pjosephgorman',
        password: 'abcdef12',
    },
    siteInfo: {
        sitename: 'Google',
        siteurl: 'https://google.com/',
        comment: 'This account is for Google.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 1,
        fName: 'Patrick',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 3,
        email: 'pjosephgorman@gmail.com',
        username: 'pjosephgorman',
        password: 'abcdef12',
    },
    siteInfo: {
        sitename: 'Twitter',
        siteurl: 'https://twitter.com/',
        comment: 'This account is for Twitter.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 2,
        fName: 'Victoria',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 1,
        email: 'vgorman@gmail.com',
        username: 'vgorman',
        password: 'cheetos',
    },
    siteInfo: {
        sitename: 'Github',
        siteurl: 'https://github.com/',
        comment: 'This account is for Github.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 3,
        fName: 'Ed',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 1,
        email: 'edgorman@gmail.com',
        username: 'edgorman',
        password: 'lawyered',
    },
    siteInfo: {
        sitename: 'Instagram',
        siteurl: 'https://instagram.com/',
        comment: 'This account is for Instagram.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 3,
        fName: 'Ed',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 2,
        email: 'egorman@gmail.com',
        username: 'egorman',
        password: 'lawyered',
    },
    siteInfo: {
        sitename: 'Facebook',
        siteurl: 'https://facebook.com/',
        comment: 'This account is for Facebook.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 3,
        fName: 'Ed',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 3,
        email: 'egorman@gmail.com',
        username: 'egorman',
        password: 'lawyered',
    },
    siteInfo: {
        sitename: 'Github',
        siteurl: 'https://github.com/',
        comment: 'This account is for Github.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 3,
        fName: 'Ed',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 4,
        email: 'egorman@gmail.com',
        username: 'egorman',
        password: 'lawyered',
    },
    siteInfo: {
        sitename: 'Joseph A. Banks',
        siteurl: 'https://josabanks.com/',
        comment: 'This account is for Joseph A. Banks.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 3,
        fName: 'Ed',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 5,
        email: 'egorman@gmail.com',
        username: 'egorman',
        password: 'specific',
    },
    siteInfo: {
        sitename: 'Google',
        siteurl: 'https://google.com/',
        comment: 'This account is for Google.',
    },
});
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 4,
        fName: 'Abigail',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 1,
        email: 'agorman@gmail.com',
        username: 'agorman',
        password: 'sandwiches',
    },
    siteInfo: {
        sitename: 'Facebook',
        siteurl: 'https://facebook.com/',
        comment: 'This account is for Facebook.',
    },
});

//Create a new entry into the database, which already has your 10 initial entries
db.thePasswordsCollection.insert({
    userInfo: {
        userid: 4,
        fName: 'Abigail',
        lName: 'Gorman',
    },
    accountInfo: {
        acctid: 2,
        email: 'agorman@gmail.com',
        username: 'agorman',
        password: 'sandwiches',
    },
    siteInfo: {
        sitename: 'Google',
        siteurl: 'https://google.com/',
        comment: 'This account is for Google.',
    },
});

//Get all the password-related data, including the password, associated with URLs that have https in one of your 10 entries
db.thePasswordsCollection.find({
    'siteInfo.siteurl': { $regex: /^https/ },
}).pretty();

//Get the password associated with the URL of one of your 10 entries
db.thePasswordsCollection.find({
    'userInfo.userid': 4,
    'siteInfo.siteurl': 'https://facebook.com/',
}).pretty();

//Change any entry’s password
db.thePasswordsCollection.update(
    {
        'userInfo.userid': 1,
        'accountInfo.acctid': 1,
    },
    {
        $set: { 'accountInfo.password': 'updated' },
    }
);

//Change a URL associated with one of the passwords in your 10 entries
db.thePasswordsCollection.update(
    {
        'accountInfo.acctid': 5,
    },
    {
        'accountInfo.password': 'specific',
    },
    {
        $set: { 'siteInfo.siteurl': 'google.com' },
    }
);

//Remove a password
db.thePasswordsCollection.deleteOne({
    'userInfo.userid': 1,
    'accountInfo.acctid': 1,
});
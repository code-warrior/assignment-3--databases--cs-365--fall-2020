//create database if it does not exist, then use it.
passwordsDB = db.getSiblingDB('passwords');

//create collection
passwordsDB.createCollection('thePasswordsCollection');

//Insert 10 entries into the collecion
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 1,
      fName: 'Jon',
      lName: 'Goldenberg',
   },
   accountInfo: {
      acct_id: 1,
      email: 'jgoldenberg@gmail.com',
      username: 'jgoldenberg',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Facebook',
      site_url: 'https://facebook.com/',
      comment: 'This account is attached to the social site, Facebook.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 1,
      fName: 'Jon',
      lName: 'Goldenberg',
   },
   accountInfo: {
      acct_id: 2,
      email: 'jgoldenberg@gmail.com',
      username: 'jgoldenberg',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Google',
      site_url: 'https://google.com/',
      comment: 'This account is attached to the social site, Google.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 1,
      fName: 'Jon',
      lName: 'Goldenberg',
   },
   accountInfo: {
      acct_id: 3,
      email: 'jgoldenberg@gmail.com',
      username: 'jgoldenberg',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Twitter',
      site_url: 'https://twitter.com/',
      comment: 'This account is attached to the social site, Twitter.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 2,
      fName: 'Joe',
      lName: 'Shmo',
   },
   accountInfo: {
      acct_id: 1,
      email: 'jshmo@gmail.com',
      username: 'jshmo',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Github',
      site_url: 'https://github.com/',
      comment: 'This account is attached to the collaboration site, Github.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 3,
      fName: 'Bob',
      lName: 'Bill',
   },
   accountInfo: {
      acct_id: 1,
      email: 'bbill@gmail.com',
      username: 'bbill',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Instagram',
      site_url: 'https://instagram.com/',
      comment: 'This account is attached to the social site, Instagram.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 3,
      fName: 'Bob',
      lName: 'Bill',
   },
   accountInfo: {
      acct_id: 2,
      email: 'bbill@gmail.com',
      username: 'bbill',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Facebook',
      site_url: 'https://facebook.com/',
      comment: 'This account is attached to the social site, Facebook.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 3,
      fName: 'Bob',
      lName: 'Bill',
   },
   accountInfo: {
      acct_id: 3,
      email: 'bbill@gmail.com',
      username: 'bbill',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Github',
      site_url: 'https://github.com/',
      comment: 'This account is attached to the collaboration site, Github.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 3,
      fName: 'Bob',
      lName: 'Bill',
   },
   accountInfo: {
      acct_id: 4,
      email: 'bbill@gmail.com',
      username: 'bbill',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Online Bank',
      site_url: 'https://onlinebank.com/',
      comment: 'This account is attached to the bank site, Online Bank.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 3,
      fName: 'Bob',
      lName: 'Bill',
   },
   accountInfo: {
      acct_id: 5,
      email: 'bbill@gmail.com',
      username: 'bbill',
      password: '4321',
   },
   siteInfo: {
      site_name: 'Google',
      site_url: 'https://google.com/',
      comment: 'This account is attached to the search site, Google.',
   },
   timestamp: new Timestamp(),
});
passwordsDB.thePasswordsCollection.insert({
   userInfo: {
      user_id: 5,
      fName: 'Jack',
      lName: 'Smack',
   },
   accountInfo: {
      acct_id: 1,
      email: 'jsmack@gmail.com',
      username: 'jsmack',
      password: '1234',
   },
   siteInfo: {
      site_name: 'Facebook',
      site_url: 'https://facebook.com/',
      comment: 'This account is attached to the social site, Facebook.',
   },
   timestamp: new Timestamp(),
});

//find password associated with a url
passwordsDB.thePasswordsCollection
   .find({
      'userInfo.user_id': 3,
      'siteInfo.site_url': 'https://google.com/',
   })
   .pretty();

//Find all urls that being with https
passwordsDB.thePasswordsCollection
   .find({
      'siteInfo.site_url': { $regex: /^https/ },
   })
   .pretty();

//Update site url based one one of the 10 entries password
passwordsDB.thePasswordsCollection.updateOne(
   {
      'accountInfo.acct_id': 5,
   },
   {
      'accountInfo.password': '4321',
   },
   {
      $set: { 'siteInfo.site_url': 'google.com' },
   }
);

//Update any entries password
passwordsDB.thePasswordsCollection.updateOne(
   {
      'userInfo.user_id': 1,
      'accountInfo.acct_id': 1,
   },
   {
      $set: { 'accountInfo.password': '1234567' },
   }
);

passwordsDB.thePasswordsCollection.deleteOne({
   'userInfo.user_id': 1,
   'accountInfo.acct_id': 1,
});

//initialize databse and collection
db = db.getSiblingDB("passwords")

db.createCollection("thePasswordsCollection")

//insert data to database (i included an additonal 5 entries to have more websites without having more users)
//as mongo does not have a dedicated timestamp function, i opted to not include the timestamp field as there is no way to accurately and correctly utilize a timestamp
db.thePasswordsCollection.insert([{
  firstName:"John",
  lastName:"Smith",
  email:"jsmith@gmail.com",
  accounts:[
  {
    website:"netflix.com",
    userName:"jsmith",
    password:"smithyflix!",
    ssl:false,
    comment:"streaming service"
  },
  {
    website:"bankofamerica.com",
    userName:"jamessmith86",
    password:"smithybux!",
    ssl:true,
    comment:"banking"
  },{
    website:"facebook.com",
    userName:"9806503343",
    password:"smithyface!",
    ssl:true,
    comment:"facebook"
  },{
    website:"catlovers.com",
    userName:"mrmeowser1986",
    password:"smithypurr!",
    ssl:false,
    comment:"cat blog account"
  }
  ]
},{
  firstName:"Frank",
  lastName:"Richards",
  email:"frrranky@hotmail.com",
  accounts:[
  {
    website:"netflix.com",
    userName:"machonacho",
    password:"H0rn3t4ppl3Ch3353$",
    ssl:false,
    comment:"streaming account"
  },
  {
    website:"cigna.com",
    userName:"frankrichards",
    password:"K4r4t3L74m4Fr33d0m",
    ssl:true,
    comment:"healthcare web portal"
  },{
    website:"catlovers.com",
    userName:"kittyking77",
    password:"W1reUg4nd4F0rc3f137d",
    ssl:false,
    comment:"cat blog"
  }
  ]
},{
  firstName:"Tina",
  lastName:"Sway",
  email:"tsway@outlook.com",
  accounts:[
  {
    website:"twitter",
    userName:"3432226061",
    password:"h3JDx89eJ49lExAV9jf2D",
    ssl:true,
    comment:"social media"
  },
  {
    website:"twitch.tv",
    userName:"sidearmmecha",
    password:"34jd8skdfn3rligfhdsfasd7",
    ssl:true,
    comment:"livestreaming account"
  },
  {
    website:"netflix.com",
    userName:"tswazy",
    password:"84r7OnKsdlf3rhufbOYa784",
    ssl:false,
    comment:"streaming service account"
  },{
    website:"crunchyroll.com",
    userName:"xoxoteeabo",
    password:"jdKSigb4e9sKDn48e0SJeB48dLs",
    ssl:true,
    comment:"anime streaming account"
  }
  ]
},{
  firstName:"Sarah",
  lastName:"Dezart",
  email:"saradaradoo@gmail.com",
  accounts:[
  {
    website:"bankofamerica.com",
    userName:"sarahdez04",
    password:"123dylan!ABC",
    ssl:true,
    comment:"online banking"
  },
  {
    website:"tumblr.com",
    userName:"dezzysezzy",
    password:"123dylan!ABC",
    ssl:true,
    comment:"personal blog"
  },{
    website:"facebook.com",
    userName:"7776350809",
    password:"123dylan!ABC",
    ssl:true,
    comment:"facebook account"
  },{
    website:"catlovers.com",
    userName:"kookooforkittycats2005",
    password:"123dylan!ABC",
    ssl:false,
    comment:"kitty blog!!!"
  }
  ]
}])

//add one password to collection
db.thePasswordsCollection.update({"email":"frrranky@hotmail.com"},
  {
    $push: {
      accounts:{
        website:"facebook.com",
        userName:"6093312385",
        password:"Ch33t4hT155u3B4n4n4",
        ssl:true,
        comment:"facebook profile"
      }
    }
  })

  //select all passwords tied to one website
  db.thePasswordsCollection.find(
    {
      accounts:{
        website:"facebook.com"
      }
    })//initialize databse and collection
    db = db.getSiblingDB("passwords")

    db.createCollection("thePasswordsCollection")

    //insert data to database (i included an additonal 5 entries to have more websites without having more users)
    //as mongo does not have a dedicated timestamp function, i opted to not include the timestamp field as there is no way to accurately and correctly utilize a timestamp
    db.thePasswordsCollection.insert([{
      firstName:"John",
      lastName:"Smith",
      email:"jsmith@gmail.com",
      accounts:[
      {
        website:"netflix.com",
        userName:"jsmith",
        password:"smithyflix!",
        ssl:false,
        comment:"streaming service"
      },
      {
        website:"bankofamerica.com",
        userName:"jamessmith86",
        password:"smithybux!",
        ssl:true,
        comment:"banking"
      },{
        website:"facebook.com",
        userName:"9806503343",
        password:"smithyface!",
        ssl:true,
        comment:"facebook"
      },{
        website:"catlovers.com",
        userName:"mrmeowser1986",
        password:"smithypurr!",
        ssl:false,
        comment:"cat blog account"
      }
      ]
    },{
      firstName:"Frank",
      lastName:"Richards",
      email:"frrranky@hotmail.com",
      accounts:[
      {
        website:"netflix.com",
        userName:"machonacho",
        password:"H0rn3t4ppl3Ch3353$",
        ssl:false,
        comment:"streaming account"
      },
      {
        website:"cigna.com",
        userName:"frankrichards",
        password:"K4r4t3L74m4Fr33d0m",
        ssl:true,
        comment:"healthcare web portal"
      },{
        website:"catlovers.com",
        userName:"kittyking77",
        password:"W1reUg4nd4F0rc3f137d",
        ssl:false,
        comment:"cat blog"
      }
      ]
    },{
      firstName:"Tina",
      lastName:"Sway",
      email:"tsway@outlook.com",
      accounts:[
      {
        website:"twitter.com",
        userName:"3432226061",
        password:"h3JDx89eJ49lExAV9jf2D",
        ssl:true,
        comment:"social media"
      },
      {
        website:"twitch.tv",
        userName:"sidearmmecha",
        password:"34jd8skdfn3rligfhdsfasd7",
        ssl:true,
        comment:"livestreaming account"
      },
      {
        website:"netflix.com",
        userName:"tswazy",
        password:"84r7OnKsdlf3rhufbOYa784",
        ssl:false,
        comment:"streaming service account"
      },{
        website:"crunchyroll.com",
        userName:"xoxoteeabo",
        password:"jdKSigb4e9sKDn48e0SJeB48dLs",
        ssl:true,
        comment:"anime streaming account"
      }
      ]
    },{
      firstName:"Sarah",
      lastName:"Dezart",
      email:"saradaradoo@gmail.com",
      accounts:[
      {
        website:"bankofamerica.com",
        userName:"sarahdez04",
        password:"123dylan!ABC",
        ssl:true,
        comment:"online banking"
      },
      {
        website:"tumblr.com",
        userName:"dezzysezzy",
        password:"123dylan!ABC",
        ssl:true,
        comment:"personal blog"
      },{
        website:"facebook.com",
        userName:"7776350809",
        password:"123dylan!ABC",
        ssl:true,
        comment:"facebook account"
      },{
        website:"catlovers.com",
        userName:"kookooforkittycats2005",
        password:"123dylan!ABC",
        ssl:false,
        comment:"kitty blog!!!"
      }
      ]
    }])

    //add one account to collection
    //because the accounts are nested into the users, an update is required rather than an insert
    db.thePasswordsCollection.update({"email":"frrranky@hotmail.com"},
      {
        $push: {
          accounts:{
            website:"facebook.com",
            userName:"6093312385",
            password:"Ch33t4hT155u3B4n4n4",
            ssl:true,
            comment:"facebook profile"
          }
        }
      }
    )

    //select all passwords tied to one website
    //reference for use of aggregate on subdocument arrays- https://www.tutorialspoint.com/mongodb-query-to-find-and-return-subdocument-with-criteria
    db.thePasswordsCollection.aggregate([{
      $match:{"accounts.website":"facebook.com"}
      },{
        $addFields: {
          accounts:{
            $filter:{
                input: "$accounts",
                cond: {
                  $eq:["$$this.website","facebook.com"]
                }
            }
          }
        }
      }
    ])

    //get all password related data associated to sites with ssl urls
    db.thePasswordsCollection.aggregate([{
      $match:{"accounts.ssl":true}
      },{
        $addFields: {
          accounts:{
            $filter:{
                input: "$accounts",
                cond: {
                  $eq:["$$this.ssl",true]
                }
            }
          }
        }
      }
    ])

    //change a url
    //was unable to succesfully update subdocument fields
    db.thePasswordsCollection.updateMany(
      {
        accounts:{
          website":"netflix.com"
        }
      },
      {
        set:
        {
          accounts:
          {
            website:"hulu.com",
            ssl:true
          }
        }
      }
    )

    //change a password
    db.thePasswordsCollection.updateOne(
      {
        email:"saradaradoo@gmail.com",
        "accounts.website":"facebook.com"
      },
      {
        "accounts.password":"ABCDylan!123"
      }
    )

    //remove a url
    db.thePasswordsCollection.deleteMany(

    )

    //remove a password
    db.thePasswordsCollection.deleteOne(

    )

  //get all password related data associated to sites with ssl urls

  //change a url

  //change a password

  //remove a url

  //remove a password

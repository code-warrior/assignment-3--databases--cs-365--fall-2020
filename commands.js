<script>
const db = 'passwords'
const database = db.getSiblingDB(db)

    myObjectId = objectId("5fd2503f8b8bef95c4eaafef")
    database.thePasswordsCollection.insert({"user11": {"user": {"name": {"first": "Isaiah","last":"Johnson"},"email":"IsaiahJ3@gmail.com"},"login_information":{"username":"IJohn346","websiteName":"ESPN","URL":"https://www.espn.com",
                "comment": ""},"password":{"passwordForWebsite":"IsaiahSports10","passwordcreated":objectId(myObjectId).getTimestamp()}}});
                    finding_password_for_website_in_database: database.thePasswordsCollection.find({'user3.password.passwordForWebsite': 'I$a1ah45'}, {
                        'user3.password.passwordForWebsite': 1,'_id': 0}).pretty();
                    finding_all_password_related_data_in_database: database.thePasswordsCollection.find({'user1.login_information.URL': 'https://www.google.com'}, {
                        'user1.password.passwordForWebsite': 1,
                        'user1.login_information.websiteName': 1,
                        'user1.login_information.comment': 1,
                        'user1.login_information.username': 1,
                        'user1.login_information.URL': 1,
                        'user1.password.passwordcreated': 1,
                        '_id': 0
                    }).pretty();
                    updating_URL_in_database: database.thePasswordsCollection.update({'user5.password.passwordForWebsite': '19793674'}, {'$set': {'user5.login_information.URL': 'https://www.microsoft.com'}})
                    replacing_password_in_database: database.thePasswordsCollection.update({'user7.password.passwordForWebsite': 'Isaiah$g1thub'}, {'$set': {'user7.password.passwordForWebsite': 'newpassword'}})
                    removing_password_in_database: database.thePasswordsCollection.update({'user9.password.passwordcreated': 'Oct2017'}, {'$unset': {'user9.password.passwordForWebsite': 'Ch@tisa1ah'}})
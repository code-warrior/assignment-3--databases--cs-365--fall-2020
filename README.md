# Fall 2020 Principles of Databases — Assignment 3

* **Do not start this project until you have read these instructions carefully.**  
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**  

## ❖・Introduction・❖
Convert the MySQL `passwords` database from assignment 1 into a MongoDB database for this assignment. Because MongoDB doesn’t observe a conventional, relation-based database model, you’ll need to carefully analyze how best to translate MySQL to MongoDB.

**Note**: Because we’re not dealing with Node, or any other third-party scripting language to generate high-security cryptographic strings, store your passwords as plain text in your MongoDB database.

---

## ❖・Rules・❖
* Name your collection, `thePasswordsCollection`.
* Name the database, `passwords`.
* Export the database as BSON using the `mongodump` command. Ensure the database’s BSON file is saved to the `dump` folder.
* Export the database to the included `passwords.json` file as JSON using the `mongoexport` command.
* Don’t mix tabs with spaces; choose one or the other.
* If using spaces, indent by 2.
* Copy and translate all entries used to populate the original MySQL database.
* As in the first assignment, create MongoDB commands to do the following:
   + Create a new entry into the database, which already has your 10 initial entries
   + Get the password associated with the URL of one of your 10 entries
   + Get all the password-related data, including the password, associated with URLs that have `https` in one of your 10 entries
   + Change a URL associated with one of the passwords in your 10 entries
   + Change any entry’s password
   + Remove a password

---

## ❖・Due・❖
Friday, 4 December 2020, at 8:00 PM.

---

## ❖・Grading・❖
| Item                                   | Points |
|----------------------------------------|:------:|
| *Similarity to original MySQL project* | `25`   |
| *Implementation quality*               | `25`   |
| *Code Quality*                         | `25`   |
| *Following Instructions*               | `25`   |

---

## ❖・Submission・❖
You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**NO late submissions will be accepted.**

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.

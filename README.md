# Contacts App

This application uses the scalable Django web framework, along with the Django Restful Framework to create and store contact information in a list.
The user is able to enter a contact's name and phone number, and filter them using AngularJS directives on the front-end. 
The user can also enjoy a pleasing, responsive interface built using the modern front-end framework Materialize.

Contacts-App

Installing
Basic Usage
Installation

To install, simply do the following:

Create a virtual environment for our sample project and download our required packages.

For the server you will need to install Anaconda. A virtual environment to run python commands and Django. https://conda.io/docs/install/full.html

After Anaconda is installed:

$ conda create -n env_name
Navigate to the root directory of the application and activate the environment:

$ source activate env_name *MacOS
           OR
$ activate env_name *Windows
Navigate to the application directory(contacts_app) and enter:

$ pip install -r requirements.txt
$ cd client
$ npm install
$ bower install
$ cd .. #Return to application directory
Then we then need to start our Django Server:

$ python server/manage.py runserver
If migrations are necessary:

$ python server/manage.py makemigrations contacts
$ python server/manage.py migrate
Open a new terminal tab and navigate to the client folder. We will start our node server to serve our front end:

Once in the client folder run:
$ npm start
Now go to localhost:8081 in your browser to use the app!

Usage

You can use the add contact button or click the new contact tab to create a new contact.

New Contact:

Enter Name *required
Select Country *required
Enter Phone number *required
Upload Photo *not required
Once contacts are created you can search by Name or Number.

To edit a contact click the edit button and make any changes and submit.

To delete the contact click the trash can button.

'use strict';

// Import the Dialogflow module and response creation dependencies from the
// Actions on Google client library.
const {
    dialogflow,
    Suggestions,
} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'Default Welcome Intent'.
app.intent('Default Welcome Intent', (conv) => {
    conv.ask('This is Timetable Organiser. What date are you interested in?');
});


// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.

app.intent('university timetable', (conv, {date}) => {
    console.error(date);

    const dt = new Date(date);
    console.log(dt);
    console.log(typeof dt);
    if (dt.getDay() === 1) {
        // Respond with the user's lucky number and end the conversation.
        conv.close(`Your subject is Artificial Intelligence`);
    } else{
        conv.close(`You don't have lessons`)
    }
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

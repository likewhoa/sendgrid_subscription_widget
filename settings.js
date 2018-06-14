// Change the url to the domain of your app
exports.url = 'https://blackboxstocks-sendgrid.herokuapp.com';

exports.senderEmail = "fernando.r@weboperative.com";
exports.senderName = "Fernando is likewhoa";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = 3548999;

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = null;//6586ac87-0cc4-4a7b-9e0a-4f947dac5fd6;

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = "design@missionaccomplish.com";

// Change the url to the domain of your app
exports.url = 'https://blackboxstocks-sendgrid.herokuapp.com';

exports.senderEmail = "info@blackboxstocks.com";
exports.senderName = "Info";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = 4084518;

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = "5a740de9-a5ba-457f-afad-8b804c02b2a5";

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = "gentooligan@gmail.com";

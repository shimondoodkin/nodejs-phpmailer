// if you run this example it should work.

//how to use:

var phpmailer=require('nodejs-phpmailer');

// 1. define phpmailer.options to your options
// 2. send 

// defaults for gmail
phpmailer.options={
 "IsSMTP":true,
 "SMTPSecure":"ssl",
 "Host":"smtp.gmail.com",
 "Port":465,
 "SMTPAuth":true,
 "Username":"username@gmail.com",
 "Password":"********",
 "From":"username@gmail.com",
 "FromName":"My site's mailer",
 "Sender":"username@gmail.com",
 //"AddReplyTo":[{"email":"shimondoo@gmail.com","name":"Replies for my site Doodkin"}],
 //"AddAddress":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 //"AddCC":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 //"AddBCC":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 "IsHTML":true,
 "AutoImages":true,
 "AutoImagesPath":__dirname+"/images/",
};

// defaults for localhost
phpmailer.options={
 "IsSMTP":true,
 //"SMTPSecure":"ssl",
 "Host":"localhost",
 "Port":25,
 //"SMTPAuth":true,
 //"Username":"username@gmail.com",
 //"Password":"********",
 "From":"username@gmail.com",
 "FromName":"My site's mailer",
 "Sender":"username@gmail.com",
 //"AddReplyTo":[{"email":"shimondoo@gmail.com","name":"Replies for my site Doodkin"}],
 //"AddAddress":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 //"AddCC":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 //"AddBCC":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 "IsHTML":true,
 "AutoImages":true,
 "AutoImagesPath":__dirname+"/images/",
};

//send example with bcc cc & replyto :
phpmailer.send({
 "AddReplyTo":[{"email":"shimondoo@gmail.com","name":"Replies for my site Doodkin"}],
 "AddAddress":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 "AddCC":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 "AddBCC":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 "Subject":"Test 1 Subject",
 "Body":"<html><head></head><body background=\"phpmailer_mini.gif\"><h1>Test 1 of PHPMailer html</h1><table ><tr><td>sadfasdfasdf</td></tr></table><p>This is a test picture: <img src=\"phpmailer.gif\" /></p></body></html>",
 "AltBody":"Test 1 Alt Body",
 "AddAttachment":
 [
 {
  "path":"/home/someone/www/dev.username/deps/nodejs-phpemail/PHPMailer_v5.1/examples/images/phpmailer_mini.gif",
  "name":"phpmailer.gif"
 }
 ]
});


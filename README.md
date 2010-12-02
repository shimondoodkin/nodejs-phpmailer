##nodejs-phpmailer
At the moment there is no mime encoding email module for node js.
I wanted to send beutiful registration emails with inline images.
So I did some integration.

It is not good for frequent emailing. Because it might be slow.

```javascript
//how to use:

var phpmailer=require('nodejs-phpmailer');

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
 "AutoImagesPath":__dirname."/images/",
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
 "AutoImagesPath":__dirname."/images/",
};

//send example:
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

//simple html send example:
phpmailer.send({
 "AddAddress":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
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


//simple text send example:
phpmailer.send({
 "AddAddress":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 "Subject":"Test 1 Subject",
 "IsHTML":false,
 "Body":"Test  text Body",
 "AddAttachment":
 [
 {
  "path":"/home/someone/www/dev.username/deps/nodejs-phpemail/PHPMailer_v5.1/examples/images/phpmailer_mini.gif",
  "name":"phpmailer.gif"
 }
 ]
});

//simpler text send example:
phpmailer.send({
 "AddAddress":["helpmepro1@gmail.com"],
 "Subject":"Test 1 Subject",
 "Body":"Test text Body",
 "IsHTML":false,
});


 AddAddress,AddReplyTo,AddCC,AddBCC are arrays of objects like
 
 {
  "email":"example@example.com",
  "name":"Recipient name"
 }
 
 or
 
 "example@example.com"
 
 So it could be an object with properties or a string.
 
 if "AutoImages" is true then it searches for img tags and for background tags
 and replaces them with cid and adds an item to AddEmbeddedImage with AutoImagesPath.
 
 AddEmbeddedImage is an array of objects like
 {
  "path":__dirname."/phpmailer.gif",
  "cid":"logoimg"
 }
 
 AddAttachment is an array of objects like
 {
  "path":__dirname."/phpmailer_mini.gif",
  "name":"phpmailer_mini.gif"
 }

```

Also you could use a template engine to generate the html = )

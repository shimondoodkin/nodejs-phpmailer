{
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
 "AddReplyTo":[{"email":"shimondoo@gmail.com","name":"Replies for my site Doodkin"}],
 "AddAddress":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 "AddCC":[{"email":"helpmepro1@gmail.com","name":"Replies CC for my site Helpmepro1"}],
 "AddBCC":[{"email":"helpmepro1@gmail.com","name":"Replies BCC for my site Helpmepro1"}],
 "Subject":"Test 1 Subject",
 "IsHTML":true,
 "AutoImages":true,
 "AutoImagesPath":"/home/someone/www/dev.username/deps/nodejs-phpemail/PHPMailer_v5.1/examples/images/",
 "Body":"<html><head></head><body background=\"phpmailer_mini.gif\"><h1>Test 1 of PHPMailer html</h1><table background=\"cid:logoimg\" ><tr><td>sadfasdfasdf</td></tr></table><p>This is a test picture: <img src=\"phpmailer.gif\" /></p></body></html>",
 "AltBody":"Test 1 Alt Body",
 "AddEmbeddedImage":[
 {
  "path":"phpmailer.gif",
  "cid":"logoimg"
 }
 ],
 "AddAttachment":
 [
 {
  "path":"phpmailer_mini.gif",
  "name":"phpmailer_mini.gif"
 }
 ]
}
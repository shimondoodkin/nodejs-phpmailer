// if you run this example it should work.

var phpmailer=require('./');

// defaults for gmail
phpmailer.options={
 "IsSMTP":true,
 "SMTPSecure":"ssl",
 "Host":"smtp.gmail.com",
 "Port":465,
 "SMTPAuth":true,
 //  Settings of a test account I just oppend.
 "Username":"test.nodejs.phpmailer@gmail.com",
 "Password":"test.nodejs.phpmailer1234",
 "From":"test.nodejs.phpmailer@gmail.com",
 "FromName":"My site's mailer TEST",
 "Sender":"test.nodejs.phpmailer@gmail.com",
 //"AddReplyTo":[{"email":"shimondoo@gmail.com","name":"Replies for my site Doodkin"}],
 //"AddAddress":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 //"AddCC":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 //"AddBCC":[{"email":"helpmepro1@gmail.com","name":"Replies for my site Helpmepro1"}],
 "IsHTML":true,
 "AutoImages":true,
 "AutoImagesPath":__dirname+"/images/",
};

//send example:
phpmailer.send({
 "IsHTML":false,
 "AddAddress":["test.nodejs.phpmailer@gmail.com"],
 "Subject":"Test 1  Subject",
 "Body":"Test TEXT  \r\nשעמון\\\t\' \" Body"
});

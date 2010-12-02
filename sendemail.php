<?php
//if(count($_SERVER['argv'])!=2){ print_r($_SERVER['argv']); exit('need 2 arguments');}
//if(!file_exists($_SERVER['argv'][1])) exit;
//$json =file_get_contents($_SERVER['argv'][1]);
//echo "START";
$json =file_get_contents('php://stdin');//rawurldecode($_SERVER['argv'][1]);

$obj=json_decode($json,true);
//echo '\r\ndebug1:\r\n';
//echo "\r\n|".$json."|\r\n";
//var_dump($obj);
if(!$obj)
{
$obj=json_decode(stripslashes($json));
//echo '\r\ndebug2:\r\n';
//var_dump($obj);
}

require("PHPMailer_v5.1/class.phpmailer.php");


function cid($output,$sender="localhost")
{
 $Host=split('@',$sender);
 $Host=$Host[1] or '';
 return preg_replace('/[^a-zA-Z0-9]*/','', $output).microtime(true).'@'.$Host;
}
//echo cid("file.jpg",$obj['Sender']);


if(@$obj['AddEmbeddedImage']) $AddEmbeddedImage=$obj['AddEmbeddedImage'];
if(!isset($AddEmbeddedImage))$AddEmbeddedImage=array();

if(@$obj['AutoImages']&&@$obj['AutoImagesPath']&&@$obj['IsHTML'])
{
$already_embeded=array();
preg_match_all('/<img[^>]+?src=[\'"]+([^\'"]*)[\'"][^>]*>/i', $obj['Body'], $matches);
$matches['1'] = array_unique($matches['1']);
foreach($matches['1'] as $match){
 //echo $obj['AutoImagesPath'].$match."\n";
 $cid=cid($match,$obj['Sender']);
 $search = '#(<img[^>]+?src=[\'"]+)'.preg_quote($match,"#").'([\'"][^>]*>)#i';
 $replace = '$1cid:'.$cid.'$2';
 $obj['Body'] = preg_replace($search, $replace, $obj['Body']);
 if(!in_array($match,$already_embeded))
 {
  $obja=(object)Array('path'=>$obj['AutoImagesPath'].$match, 'cid'=>$cid );
  $AddEmbeddedImage[]=$obja;
  $already_embeded[]=$match;
 }
}
$tags=array('table','td','tr','body');
foreach($tags as $tag)
{
preg_match_all('/<'.$tag.'[^>]+?background=[\'"]+([^\'"]*)[\'"][^>]*>/i', $obj['Body'], $matches);
$matches['1'] = array_unique($matches['1']);
foreach($matches['1'] as $match){
 //echo $obj['AutoImagesPath'].$match."\n";
 $cid=cid($match,$obj['Sender']);
 $search = '#(<'.$tag.'[^>]+?background=[\'"]+)'.preg_quote($match,"#").'([\'"][^>]*>)#i';
 $replace = '$1cid:'.$cid.'$2';
 $obj['Body'] = preg_replace($search, $replace, $obj['Body']);
 if(!in_array($match,$already_embeded))
 {
  $obja=(object)Array('path'=>$obj['AutoImagesPath'].$match, 'cid'=>$cid );
  $AddEmbeddedImage[]=$obja;
  $already_embeded[]=$match;
 }
}
}
}


$mail = new PHPMailer();$mail = new PHPMailer();
$mail->CharSet='utf-8';
if(@$obj['IsSMTP'])$mail->IsSMTP();
if(@$obj['SMTPSecure'])$mail->SMTPSecure = $obj['SMTPSecure']; 
if(@$obj['Host'])$mail->Host = $obj['Host'];
if(@$obj['Port'])$mail->Port = $obj['Port'];  
if(@$obj['SMTPAuth'])$mail->SMTPAuth = $obj['SMTPAuth'];
if(@$obj['Username'])$mail->Username = $obj['Username'];
if(@$obj['Password'])$mail->Password = $obj['Password'];

if(@$obj['From'])$mail->From=$obj['From'];
if(@$obj['FromName'])$mail->FromName=$obj['FromName'];
if(@$obj['Sender'])$mail->Sender=$obj['Sender'];
if(@$obj['AddReplyTo'])
foreach($obj['AddReplyTo'] as $AddReplyTo)
{
 if(is_string($AddReplyTo))
  $mail->AddReplyTo($AddReplyTo);
 else
  $mail->AddReplyTo($AddReplyTo['email'], $AddReplyTo['name']);
}

if(@$obj['AddAddress'])
foreach($obj['AddAddress'] as $AddAddress)
{
 if(is_string($AddAddress))
  $mail->AddAddress($AddAddress);
 else
  $mail->AddAddress($AddAddress->email, $AddAddress->name);
}

if(@$obj['AddCC'])
foreach($obj['AddCC'] as $AddCC)
{
 if(is_string($AddCC))
  $mail->AddCC($AddCC);
 else
  $mail->AddCC($AddCC['email'], $AddCC['name']);
}

if(@$obj['AddBCC'])
foreach($obj['AddBCC'] as $AddBCC)
{
 if(is_string($AddBCC))
  $mail->AddBCC($AddBCC);
 else
  $mail->AddBCC($AddBCC['email'], $AddBCC['name']);
}

if(@$obj['Subject'])$mail->Subject = $obj['Subject'];

//$mail->AddEmbeddedImage('logo.jpg', 'logoimg', 'logo.jpg'); // attach file logo.jpg, and later link to it using identfier logoimg
foreach($AddEmbeddedImage as $AddEmbeddedImageArgs)
{
 if(is_string($AddEmbeddedImageArgs))
  $mail->AddEmbeddedImage($AddEmbeddedImageArgs,$AddEmbeddedImageArgs);
 else
  $mail->AddEmbeddedImage(
                    $AddEmbeddedImageArgs->path,
                    $AddEmbeddedImageArgs->cid,
                    basename($AddEmbeddedImageArgs->path)
                    );
}

if(@$obj['AddAttachment'])
foreach($obj['AddAttachment'] as $AddAttachment)
{
 if(is_string($AddAttachment))
  $mail->AddEmbeddedImage($AddAttachment,basename($AddAttachment));
 else
  $mail->AddEmbeddedImage(
                    $AddAttachment->path,
                    $AddAttachment->name or basename($AddAttachment->path)
                    );
}

if(@$obj['IsHTML'])$mail->IsHTML(true);
if(@$obj['Body'])$mail->Body = $obj['Body'];

// "<h1>Test 1 of PHPMailer html</h1>
//    <p>This is a test picture: <img src=\"cid:logoimg\" /></p>";

if(@$obj['AltBody'])$mail->AltBody= $obj['AltBody'];

if(!$mail->Send())
{
   echo "Error sending: " . $mail->ErrorInfo;;
   exit (1);
}
else
{
  // echo "Letter is sent";
   exit (0);
}
?>
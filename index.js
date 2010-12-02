var exec  = require('child_process').exec;

this.options=false;//{}

 function addslashes (str)
 {
    return (str+'').replace(/[\\"'\n\t\r]/g,function(c)
    { 
     switch(c)
     {
      case '\\':
       return '\\\\';
       break;
      case '"':
       return '\\"';
       break;
      case "'":
       return "\\'";
       break;
      case "\n":
       return "\\n";
       break;
      case "\t":
       return "\\t";
       break;
      case "\r":
       return "\\r";
       break;
     }
    }).replace(/\u0000/g, '\\0');
  }

var that=this; 

var lastcommand;

function show_error(error, stdout, stderr)
{
  if(stdout)console.log('nodejs-phpmailer_stdout: ' + stdout);
  if(stderr)console.log('nodejs-phpmailer_stderr: ' + stderr);
  if (error !== null)
  {
    console.log('nodejs-phpmailer last command: ' + lastcommand);
    console.log('nodejs-phpmailer error: ' + error);
  }
}

var exec_option={timeout:1500};

function send(options,callback)
{
  // add missing options from this.options
  var this_options=that.options;
  if(this_options)
  for(name in this_options)
  {
   if(Object.hasOwnProperty.call(this_options,name))
   {
    if(!(name in options))
    {
     options[name]=this_options[name];
    }
   }
  }
  //
  
  var args_str='-f "'+addslashes(__dirname+'/sendemail.php')+'"';  
  var cmd='export LANG=en_US.UTF-8;php '+args_str+"",exec_option;

  lastcommand=cmd;
  var child = exec(cmd,  show_error );
  child.stdin.write(JSON.stringify(options));
  child.stdin.end();
  //var child = exec('export LANG=en_US.UTF-8;env ',  show_error );
  child.on('exit',function (code, signal)
  {
   if(callback)
   {
   if(code==0)
   {
    callback(true);
   }
   else
   {
    callback(false)
   }}
  });
} this.send=send;


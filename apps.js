var UserName = prompt ('HELLO');
var UserName1 = prompt ('whats your name')
alert ( 'Welcome'  +  UserName1 )
var UserPlayer = prompt ("who is the best football player in the wolrd Messi or Ronaldo ?");
if (UserPlayer === 'messi' ) {
  document.write (' <img src="https://th.bing.com/th/id/R03686cd0a3b7dd268ee30c16b78bf7fd?rik=XHMYWUrLchBZ8A&pid=ImgRaw">')
  }
  else if(UserPlayer === 'ronaldo')
   { 
    document.write ('<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/03/21/cristiano-ronaldo-goal.jpg">'); 
  } else {
    alert( ' Go back and choose one ' );
  }
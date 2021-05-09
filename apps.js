var UserName = prompt ('HELLO');
var UserName1 = prompt ('whats your name')
alert ( ' Welcome '  + UserName1 )
var UserPlayer = prompt ("who is the best football player in the wolrd Messi or Ronaldo ?");

if (UserPlayer === 'messi' ) {
  document.write (' <img src="https://th.bing.com/th/id/R03686cd0a3b7dd268ee30c16b78bf7fd?rik=XHMYWUrLchBZ8A&pid=ImgRaw">')
  }

  else if(UserPlayer === 'ronaldo')
   { 
    document.write (' GO OUT OF HERE '); 
  } else {
    alert( ' Go back and choose one ' );
  }
   var userFavClub = prompt ( 'what is your favourite club ?' ) 
   function knowBestPlayer(){

   while( userFavClub !== 'barchelona' && userFavClub !== 'barca' ) {  
    userFavClub = prompt ( "choose barca or barchelona please ! ")
     }
     knowBestPlayer();
   }
     var photos = prompt('How many photos do you want to see?')
     
     var image = ""
     for (var i=0;i<photos;i++) {
       if (userFavClub === 'barca' )  
       {
         image = image +'<img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f15af31465263000625ce08%2F0x0.jpg">'
        } else if  (userFavClub === 'barchelona' ) {
          image = image + '<img scr="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f15af31465263000625ce08%2F0x0.jpg">'}
        }
        document.write (image)
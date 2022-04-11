/*
   Author: Nathan Chorlton
   Date: April 10th, 2022

   Filename: comments.js


*/

function submitRate(){
      //gets form values and displays them for now
      var user = document.getElementById('username').value;
      var comment = document.getElementById("comment").value;
      var stars = document.getElementById("stars").value;

      //creates the blockquote all the parts of the review will be added to
      var block = document.createElement("blockquote");

      //adding stars to the blockquote
      var starPara = document.createElement("p");
      for (var i = 0; i < stars; i++){
         //loop decides how many star images to append
         var starImg = document.createElement("img");
         starImg.src = "image/star.png";
         starPara.appendChild(starImg);
      }
      block.appendChild(starPara);

      //adding comment to the blockquote
      var commentPara = document.createElement("p");
      var commentsNode = document.createTextNode(comment);
      commentPara.appendChild(commentsNode);
      block.appendChild(commentPara);
      
      //adding username signature to the blockquote
      var userPara = document.createElement("p");
      var signature = " -- ";
      var signatureNode = document.createTextNode(signature);
      userPara.appendChild(signatureNode);

      //adding username after signature
      var userNode = document.createTextNode(user);
      userPara.appendChild(userNode);
      block.appendChild(userPara);
      
      //adding date to the blockquote
      var datePara = document.createElement("p");
      var today = new Date();
      var dateNode = document.createTextNode(today);
      datePara.appendChild(dateNode);
      block.appendChild(datePara);

      //prepends it all to the review section of the html file
      if (user != "" && comment != "") { //makes sure both are filled out
         document.getElementById("reviews").prepend(block);
      }
      
      //clears the text feilds after the comments have been added
      document.getElementById('username').value="";
      document.getElementById('comment').value="";     
}

window.onload = function(){
   //function that appends the whole comment review to the web page
   document.getElementById("addReview").addEventListener("click", function() {
      submitRate();
   });
}

window.onload=function(){
    this.getdata();
}


function getdata(){
    // firebase.database().ref('blogs/').once('value').then(function(snapshot){

    firebase.database().ref('blogs/').on('value', function(snapshot){
     
      //get your posts div
      var posts_div=document.getElementById('posts');
      //remove all remaining data in that div
      posts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML="<div class='col-sm-4 mt-2 mb-1'>"+
        // "<div class='card' style='padding: 0 .5rem; border-radius: 1.25em;'>"+
        "<div class='card' style='padding: 0 .5rem;  border-radius: 1.25em;' >"+
        "<img class='card-img-top my-4' src='"+value.imageURL+" loading='lazy' style='height:300px; width:auto;object-fit: contain;' >"+
        // "<div class='card-body'><p class='card-text '>"+value.text+"</p>"+
        // "<p class='card-text'>"+"R"+value.cost+"</p>"+
        // "<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)'>Delete</button>"+
        "<h5 class='h5 card-title text-center'>"+value.text+"</h5>"+
        "<h5 class='card-title text-center mt-4 mb-4'>"+"R"+value.cost+"</h5>"+
        "<a href='#' class='btn btn-danger btn-pink d-block w-75 mx-auto text-uppercase font-weight-bold mb-3'>Buy Now ➔</a>"+

        "</div></div></div>"+posts_div.innerHTML;






      }
    
    });
}

function delete_post(key){
    var answer = window.confirm("Are you sure?");
    if (answer) {
        firebase.database().ref('blogs/'+key).remove();
        getdata();
    }
    else {
        //some code
    }   

}
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
//var gif_url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC"
//$("#search-button").click(function(){
  
  //var searchTerm = $("input").val()
//  search(searchTerm);
  
  //$.ajax({
    //url: gif_url,
    //method: "GET",
    //success: function(response) {
    
    
        //console.log(response.data);
        
       // $("body").append("<img src='" + response.data[0].images.fixed_height_still.url + "'>");
    //}  
  //});
//});


$("#search-button").click(function(){ 
    var userInput = $("#search-term").val();
    
    
    var request_url = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=dc6zaTOxFJmzC";
    
    $.ajax({
      url: request_url,
      method: "GET",
      success: function(response) {
          // var pic_url = response.data[14].images.fixed_width.url;
           
           response.data.forEach(function(n){
              $('#images').append('<img src=' + n.images.fixed_width.url + '>');

// debugger;
           });
      },
    });
    
});

$("#search-button").click(function(){
  function emptyImages(){
  $("#search-term").empty();
  $("#images").empty();
}
});
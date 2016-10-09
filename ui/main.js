//making counter work
var button = document.getElementById("counter");

button.onclick = function (){
    // create a request
    var request = new XMLHttpRequest();
    
    //capture response and store in variable
    request.onreadystatechange = function(){
       if(request.readystate == XMLHttpRequest.DONE){
           // take some action
       }
        //not done yet
        if(request.status == 200){
            var counter = request.responsText;
             var span = document.getElementById("count");
    span.innerHTML = counter.toString();
        }
    };
    
    
    //make a request
   request.open('GET', 'http://abhishek-misra96.imad.hasura-app.io/counter', true);
request.send(null);

   
    
    
};
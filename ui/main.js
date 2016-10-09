//making counter work
var button = document.getElementById("counter");

button.onclick = function (){
    // create a request
    var request = new XMLHttpRequest();
    
    //capture response and store in variable
    request.onreadystatechange = function(){
       if(request.readystate == XMLHttpRequest.DONE){
           // take some action
      
        //not done yet
        if(request.status == 200){
            var counter = request.responseText;
             var span = document.getElementById('count');
    span.innerHTML = counter.toString();
        }
       }
    };
    
    
    //make a request
   request.open('GET', 'http://abhishek-misra96.imad.hasura-app.io/counter', true);
request.send(null);
};


//submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit =  document.getElementById("submit_btn");
submit.onclick = function(){
    //make th request and send the name
    
    
    //capture a list of name and render it
    var names = ['name1','name2','name3'];
    var list = '';
    for(var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById("nameslist");
    ul.innerHTML = list;
};


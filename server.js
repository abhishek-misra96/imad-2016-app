var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = { 
    
   'article-one' : {
       
    title: 'Chapter One | Arsim',
    heading: 'Chapter one',
    date: 'October 6,2016',
    content: `
    <!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Number1</title>
 </head>
 <body>
   
  This is number 1
  
  </div>
 </body>
</html>
    
    `
},
 'article-two' : {
         title: 'Chapter Two | Arsim',
    heading: 'Chapter two',
    date: 'October 6,2016',
    content: `
    <!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Number2</title>
 </head>
 <body>
   
  This is number 2
  
  </div>
 </body>
</html>
    
    `
 },
'article-three':{
        title: 'Chapter Three | Arsim',
    heading: 'Chapter three',
    date: 'October 6,2016',
    content: `
    <!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Number3</title>
 </head>
 <body>
   
  This is number 3
  
  </div>
 </body>
</html>
    
    `
}
};
 
 function createTemplate(data){ 

     var title = data.title;
     var date = data.date;
         var heading = data.heading;
           var content = data.content;
              
     
var htmlTemplate =`
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>${title}</title>
 </head>
 <h3>${heading}</h3>
 ${content}
  <div>
     ${date}
  </div> 
 </body>
</html>`;
   return htmlTemplate;  
 }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName; 
  res.send(createTemplate(articles[articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/lol.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'lol.jpg'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

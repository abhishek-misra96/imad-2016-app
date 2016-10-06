var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
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
};
 
 
 function createTemplate(data){ 
       var date  = data.date;
         var heading = data.heading;
           var content = data.content;
               var title = data.title;
     
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

app.get('/Chapter-1', function (req, res) {
  res.send (createTemplate(articleOne));
});

app.get('/Chapter-2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Chapter-2.html'));
});

app.get('/Chapter-3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Chapter-3.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

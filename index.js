//Routing Mechanism - URL Define Here.
const express = require('express');

//Mongo Object
var ObjectId = require('mongodb').ObjectID;
//Express Only Get Data If Body-Parser Is Worked.

//To Get Value Of Any Control Body-Parser Is Compulsory.
var bodyParser = require('body-parser');


//Object of Express
const app = express();
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));


//URL Of MongoDB Server.
const url = "mongodb+srv://admin:05030503@cluster0-m7pgy.mongodb.net/test?retryWrites=true&w=majority";

//Mongo Client Variable
const MongoClient = require('mongodb').MongoClient;

//Database Name.
const dbName = "HTML";
	
	
app.get('/', (req, res) => {
	res.render('home');
});

//Redirecting to the Main URL
app.get('/:id', (req, res) => {
	MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
		
				const db = client.db(dbName);
				const collection = db.collection('pages');
				var id=req.params.id;
				collection.find({ linkkey : id }).toArray(function(err,docs)
				{
					//console.log(docs);
					if(docs.length==1)
					{
						console.log(docs);
						res.send(""+docs[0].content);
					}	
					else
					{
						//Else 404.
						res.redirect('/404');
					}
				});
				client.close();
				
			});
});

app.post('/makehtml', (req, res) => {
	
	var content=req.body.content;
	var t=2;
	var temp=getrandom(t);
	while(CheckAvailability(temp)==0)
	{
		//Increasing the size of Random URL
		temp=getrandom(t++);
	}
	newshort=temp;
	
	//Just Entering the Data in DB.
	MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
		
				const db = client.db(dbName);
				const collection = db.collection('pages');
				
				collection.insertOne(
				{
					
					content: content,
					linkkey:newshort,
					DateOfCreation:new Date().toLocaleString()
						
				},function(data,err)
				{
					res.send('https://hosthtml.herokuapp.com/'+newshort);
				});
				client.close();
				
			});
		
	
});

//Random URl Generation
function getrandom(no){
    var random_string = Math.random().toString(32).substring(2, no) + Math.random().toString(32).substring(2, 5);    
	//console.log(random_string);
	return random_string;
}

//Checking Random URL is Available or not.
function CheckAvailability(temp)
{
	
	MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
		
				const db = client.db(dbName);
				const collection = db.collection('links');
				
				collection.find({ linkkey : temp }).toArray(function(err,docs)
				{
					console.log(docs);
					if(docs.length==0)
					{
						return 1;
					}	
					else
					{
						return 0;
					}
				});
				client.close();
				
	});
}

//Httpserver Port Number 3000.
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

//Set The File Type To App As EJS.
app.set('view engine', 'ejs');

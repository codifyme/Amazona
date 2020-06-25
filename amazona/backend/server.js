import express from 'express';
import data from './data';

const app = express();
const courses=[
	{id:1, name:'course1'},
	{id:2, name:'course2'},
	{id:3, name:'course3'}

];

app.get('/api/products', (req, res) => {
	res.send[(data.products)];
});

app.get('/', (req, res)=>{
	res.send('Hola amigoss!!!!');
});
app.get('/api/courses', (req,res)=>{
	res.send(courses);
});
app.get('/api/posts/:year/:month',(req,res)=>{
	res.send(req.params);
});
app.get('/api/posts/:year/:month',(req,res)=>{
	res.send(req.query);
});
//single course
app.get('/api/courses/:id', (req,res)=>{
	const course=courses.find(c=> c.id ===parseInt(req.params.id));
	if(!course) res.status(404).send('The course with given ID was not found.'); //404 object not found
	res.send(course);
});
//handling POST request
app.post('/api/courses', (req, res)=>{
	const course={
		id:courses.length +1,
		name:req.body.name
	};
	courses.push(course);
	res.send(course);
});


//PORT ENVIROMENT VARIABLE
const port=process.env.PORT ||5000;
app.listen(port, () => 
	// console.log("Server started at http://localhost:5000");
	console.log(`Listening on port ${port}...`)
);

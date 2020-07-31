import express from 'express';
import data from './data';
// import Joi from '.joi';

const app = express();
// const Joi = require('joi');
// const Joi=require('joi');
// app.use(express.json());

// const courses=[
// 	{id:1, name:'course1'},
// 	{id:2, name:'course2'},
// 	{id:3, name:'course3'}

// ];

app.get('/api/products', (req, res) => {
	res.send[data.products];
});

app.get('/', (req, res) => {
	res.send('Hola amigoss!!!!');
});
// app.get('/api/courses', (req,res)=>{
// 	res.send(courses);
// });
// // app.get('/api/posts/:year/:month',(req,res)=>{
// // 	res.send(req.params);
// // });
// // app.get('/api/posts/:year/:month',(req,res)=>{
// // 	res.send(req.query);
// // });
// // app.get('/api/courses/:id', (req,res)=>{
// // 	const course=courses.find(c=> c.id ===parseInt(req.params.id));
// // 	if(!course) res.status(404).send('The course with given ID was not found.'); //404 object not found
// // 	res.send(course);
// // });
// //HANDLING POST
// app.post('api/courses', (req,res)=>{
// 	const schema={
// 		name:Joi.string().min(3).required()
// 	};

// 	const result=Joi.validate(req.body, schema);

// 	// if(!req.body.name || req.body.name.length<3){
// 		if(result.error){
// 		//400 bad request
// 		res.status(400).send(result.error.details[0].message);
// 		return;
// 	}
// 	const course={
// 		id:courses.length +1,
// 		name:req.body.name
// 	};
// 	courses.push(course);
// 	res.send(course);
// });
// //Handling PUT Requests
// app.put('/api/courses/:id', (req, res)=>{
// //Look up the course
// //If the course doesnt exist, return 404
// const course=courses.find(c=> c.id ===parseInt(req.params.id));
// 	if(!course) res.status(404).send('The course with given ID was not found.'); //404 object not found
// 	res.send(course);
// //otherwise, if that is not a valid course or INVALID, will return 400 - Bad request
// //Update the course
// const schema={
// 	name:Joi.string().min(3).required()
// };
// const result=Joi.validateCourse(req.body, schema);
// if(result.error){
// 	//400 bad request
// 	res.status(400).send(result.error.details[0].message);
// 	return;
// }
// //UPpdate course
// course.name=req.body.name;
// //return the update course
// res.send(course);
// });
// function validateCourse(course){
// 	const schema={
// 		name:Joi.string().min(3).required()
// 	};
// 	return Joi.validate(course, schema);
// }

//PORT ENVIROMENT VARIABLE

// const port=process.env.PORT ||5000;
// app.listen(port, () =>
// 	// console.log("Server started at http://localhost:5000");
// 	console.log(`Listening on port ${port}...`)
// );

app.get('/api/products', (req, res) => {
	res.send(data.products);
});
app.listen(5000, () => {
	console.log('Server started at http://localhost:5000');
});

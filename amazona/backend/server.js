import express from 'express';
import data from './data';

const app = express();

// app.get('/api/products', (req, res) => {
// 	res.send[(data.products)];
// });

app.get('/', (req, res)=>{
	res.send('Hola amigoss!!!!');
});
app.get('/api/courses', (req,res)=>{
	res.send([1,2,3]);
});

app.get('/api/courses/:id', (req,res)=>{
	res.send(req.params.id);
});

//PORT ENVIROMENT VARIABLE
const port=process.env.PORT ||5000;
app.listen(port, () => 
	// console.log("Server started at http://localhost:5000");
	console.log(`Listening on port ${port} ...`)
);

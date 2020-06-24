import express from 'express';
import data from './data';

const app = express();

// app.get('/api/products', (req, res) => {
// 	res.send[(data.products)];
// });

app.get('/', (req, res)=>{
	res.send('Hello World mi amigo');
});
app.get('/api/courses', (req,res)=>{
	res.send([1,2,3]);
});

app.listen(5000, () => {
	console.log("Server started at http://localhost:5000");
});

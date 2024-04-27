const express=require("express") 
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.post('/', (req, res) => {
  try{
	let data = req.body;
	data.forEach(info => {
		let keys = Object.keys(info);
		keys.forEach(key=>{
			if(Array.isArray(info[key])){
				info[key] && info[key].forEach((sKey,index)=>{
                    console.log(`Key ${key} : ${info[key][index]}`)
                })
			} else {
                console.log(`Key ${key} : ${info[key]}`);
            }
		})

	})
  }
  catch(e){
    console.log(`Error ${e}`);
  }
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
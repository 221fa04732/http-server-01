// const express = require("express");
// const fs = require("fs");
// const app = express();
// const port = 100;

// // Middleware to parse JSON bodies
// app.use(express.json());

// app.put('/add', (req, res) => {

//   // Append data to the file
//   fs.appendFile('a.txt', data, 'utf8', (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//       return res.status(500).send('Internal Server Error');
//     }
    
//     console.log('Data added to file successfully.');
//     return res.status(200).send('Data added successfully');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



// const express = require("express");
// const fs = require("fs");
// const app = express();
// const port = 100;

// // Middleware to parse JSON bodies
// app.use(express.json());

// app.get('/add', (req, res) => {
//   // Get the name from query parameters
//   const name = req.query.name || 'Default Name\n'; // Default name if not provided
//   const data = `${name}\n`;

//   // Append data to the file
//   fs.appendFile('a.txt', data, 'utf8', (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//       return res.status(500).send('Internal Server Error');
//     }
    
//     console.log('Data added to file successfully:', name);
//     return res.status(200).send('Data added successfully');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require ("express");

const app = express();
const port=3000;

app.get('/',(req, res) =>
{
  setTimeout(() =>
  {
    res.send("Done");
  },2000);
  
  console.log("Added");
})

app.listen(port, ()=>{
  console.log(`listining on port ${port}`);
})
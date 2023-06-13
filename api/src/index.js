const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./database/index');


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));

//starting the server
async function main () {
    await db.sync();
    console.log('DB is connectedd');
app.listen(3001, () => {
    console.log('Server running on port 3001');
    }
);
}

main();
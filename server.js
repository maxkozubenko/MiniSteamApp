// const express = require('express');
// const path = require('path');
// const app = express();

// // app.use(express.static(__dirname, '/dist/MiniSteamCICDApp'));

// // app.get('/', function (req, res) {
// //     res.sendFile(path.join(__dirname + '/dist/MiniSteamCICDApp/index.html'));
// // });

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

// app.listen(process.env.PORT || 8080);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    // response.send('Hello from Express!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
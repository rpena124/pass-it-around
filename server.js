const express = require('express');
const app = express();

// Routes

app.get('/', function (req, res) {
    const num = 98;
    res.send(`
        <h1>99 Bottles of beer on the wall</h1>
        <a href="http://localhost:3000/${num}">take one down, pass it around</a>
    `)
})
app.get('/:number_of_bottles', (req, res) => {

    let bottles = req.params.number_of_bottles

    if(bottles > 0){
        res.send(
            `
                <h1> ${bottles} Bottles of beer on the wall</h1>
                <a href="http://localhost:3000/${bottles - 1}">take one down, pass it around</a>
            `
        )
    }
    else{
        res.send(
            `
                <h1> ${bottles} Bottles of beer on the wall</h1>
                <a href="http://localhost:3000/">Start Over</a>
            `
        )
    }

})

//Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
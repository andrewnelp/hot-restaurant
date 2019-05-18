//what data the user sees and what is posted from the server
let tableData = require('../data/table-data.js');
let waitListData = require('../data/waitinglist-data.js');

//(app)represents express
module.exports = function (app) {
    //getting data from server
    app.get('/api/tables', function(req, res) {
        res.json(tableData);
    });

    app.get('/api/waitlist', function(req, res) {
        res.json(waitListData);
    });

    //posting data to apis
    app.post('/api/tables', function(req, res)   {

        if(tableData.length < 5)    {
            //pushing to the table data arr
            tableData.push(req.body);
            //we can triger a different message to the user
            res.json(true);
        } else  {
            waitListData.push(req.body);
            res.json(false);
        }
    });

    //writing api clear routes
    app.post('/api/clear', function()   {
        tableData = [];
        waitListData = [];

        console.log(tableData);
        console.log(waitListData);
    })
}
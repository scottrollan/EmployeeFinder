let employeeList = require('../data/employees.js');

//GET the employeeList
module.exports = function (app) {
    app.get('/api/employeeList', function (req, res) {
        res.json(employeeList);
      });

    app.post('/api/employeeList', function(req, res) {
      employeeList.push(req.body);

    res.end();
    });
}    
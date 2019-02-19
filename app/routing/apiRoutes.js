let employees = require('../data/employees.js');

//GET the employees
module.exports = function (app) {
  app.get('/api/employees', function (req, res) {
      res.json(employees);
  });
  
  // process after user submit
  app.post('/api/employees', function(req, res) {
      const bestMatch = {
      name: '',
      photo: '',
      employeeDifference: 41
    }
  
    const userData = req.body;
    const userScores = userData.scores;
    
    let totalDifference;

    //loop through the already set-up employees list
    for(let i=0; i<employees.length; i++) {
      const currentEmployee = employees[i];
      totalDifference = 0;

      //loop through the scores array inside each employee, as provided from loop above and
      //compare user input scores (currentUserScore) to currentEmployee.scores and
      //caluculate numerical difference in absolute value
      for(let j = 0; j<currentEmployee.scores.length; j++) {
        const currentEmployeeScore = currentEmployee.scores[j];
        const currentUserScore = userScores[j];
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentEmployeeScore));

      }
    
      //replace bestMatch (and, hence, .name and .photo values) with any  
      //employee whose totalDifference is less than the ones before
      if (totalDifference <= bestMatch.employeeDifference) {
        bestMatch.name = currentEmployee.name;
        bestMatch.photo = currentEmployee.photo;
        bestMatch.employeeDifference = totalDifference;
      }
    }
    console.log(bestMatch);
    employees.push(userData);

  });
};
   
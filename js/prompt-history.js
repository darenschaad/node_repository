//name not John 
//OR
//surname not Smith
//
//example: John Ross
//
//name not John = FALSE
//name not Smith = TRUE
//evaluates to TRUE b/c only one statement needs to evaluate to TRUE in a chain of OR statements for the expression to evaluate to TRUE


var prompt = require('prompt');

  prompt.get([{
    name: 'name',
    description: 'Your name',
    type: 'string',
    required: true
  }, {
    name: 'surname',
    description: 'Your surname',
    type: 'string',
    required: true,
    message: 'Please dont use the demo credentials',
    conform: function(surname) {
      var name = prompt.history('name').value;
      return (name !== 'John' || surname !== 'Smith');
    }
  }], function(err, results) {
    console.log(results);
  });
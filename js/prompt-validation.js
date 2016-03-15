var prompt = require('prompt');
var revalidator = require('revalidator');

var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };

var schema2 = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    password: {
      description: 'Enter your password',     // Prompt displayed to the user. If not supplied name will be used. 
      type: 'string',                 // Specify the type of input to expect. 
      pattern: /^[a-zA-Z]+$/,                  // Regular expression that input must be valid against. 
      message: 'Password must be letters', // Warning message to display if validation fails. 
      hidden: true,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string. 
      replace: '*',                        // If `hidden` is set it will replace each hidden character with the specified string. 
      default: 'lamepassword',             // Default value to use if no value is entered. 
      required: true,                        // If true, value entered must be non-empty. 
      before: function(value) { return 'v' + value; } // Runs before node-prompt callbacks. It modifies user's input 
    }
  }
};

// 
// Start the prompt 
// 
prompt.start();

// 
// Get two properties from the user: email, password 
// 
prompt.get(schema2, function (err, result) {
  // 
  // Log the results. 
  // 
  console.log('Command-line input received:');
  console.log('  name: ' + result.name);
  console.log('  password: ' + result.password);
});
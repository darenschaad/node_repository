//Two ways of exporting pingPong function
//1 - exports in function name (see directly below)
//2 - include 'module.exports.function_name = function_name' at bottom of file and use 'function function_name(params)' convention for naming function 


// exports.pingPong = function(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 == 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// }

function pingPong(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

//ORIGINAL
// function pingPong(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 == 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// }

module.exports.pingPong = pingPong;
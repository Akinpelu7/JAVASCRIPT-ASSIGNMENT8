function addValue(){
    // get the operands value
 var  operand1 = parseInt(document. getElementById('input_a').value);
 var   operand2 = parseInt(document. getElementById('input_b').value);
  
    // perform operation
  var sum =  operand1 + operand2;
    // creating the text output
    text =     operand1 + " + " + operand2 + " = " +sum
    // (if you want to check) print out in console
   // console.log(sum);
    // change the text area
    
    document.mycalculator.output.value = String(text);
}


function mulValue(){

     // get the operands value
 var  operand1 = parseInt(document. getElementById('input_a').value);
 var   operand2 = parseInt(document. getElementById('input_b').value);
  
    // perform operation
  var sum =  operand1 * operand2;
    // creating the text output
    text =     operand1 + " * " + operand2 + " = " +sum
    // (if you want to check) print out in console
   // console.log(sum);
    // change the text area
    
    document.mycalculator.output.value = String(text);

}

function divValue(){

   // get the operands value
 var  operand1 = parseInt(document. getElementById('input_a').value);
 var   operand2 = parseInt(document. getElementById('input_b').value);
  
    // perform operation
  var sum =  operand1 / operand2;
    // creating the text output
    text =     operand1 + " / " + operand2 + " = " +sum
    // (if you want to check) print out in console
   // console.log(sum);
    // change the text area
    
    document.mycalculator.output.value = String(text);
}



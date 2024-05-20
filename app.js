// Determines button clicked via id
function getResult(id) {
    document.calc.result.value+=id;
  }
  
  // Clears calculator input screen
  function clearScreen() {
    document.calc.result.value="";
  }
  
  // Compute input values
  function calculate() {
    try {
      const input = eval(document.calc.result.value);
      document.calc.result.value=input;
    } catch(err){
        document.calc.result.value="Error";
      }
  }
function calculate() {
    const  firstnumber = parseFloat(document.getElementById ('firstnumber').value)
    const  secondnumber = parseFloat(document.getElementById ('secondnumber').value)
    const  operator = document.getElementById ('operator').value
    const button = document.querySelector("btn")
    let result;

    if (operator === 'Addition'){
        result = firstnumber + secondnumber
    }
    else if (operator === 'Subtraction'){
        result = firstnumber - secondnumber
    }
    else if (operator === 'Multiplication'){
        result = firstnumber * secondnumber
    }
    else if (operator === 'Division'){
        result = firstnumber / secondnumber
    }
    else {
        result ="Please enter a value"
    }
    document.getElementById('result').innerHTML = 'Result:' + result
  }

let mode = 'Dark'
  btn.addEventListener('click',() =>{
   if (mode === 'Dark'){
     mode = 'Light'
     document.body.classList.add('dark')
     
   }else{
     mode = 'Dark'
     document.body.classList.remove('dark')
   }
  })
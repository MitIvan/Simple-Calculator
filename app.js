// Calculator

let clearBtn = document.querySelector('.btn-c');
let screen = document.getElementById('screen');
let equal = document.querySelector('.btn-eq');

//All number Buttons
let allNumBtn = document.querySelectorAll('.btn-num');
//All operator Buttons
let allOpBtn = document.querySelectorAll('.btn-op');

//Add event listeners to all number buttons
for (let i = 0; i < allNumBtn.length; i++){
    allNumBtn[i].addEventListener('click', updateScreen);  
}
//Add event listeners to all operator buttons
for (let i = 0; i < allOpBtn.length; i++){
    allOpBtn[i].addEventListener('click', operationBtnPress);  
}

//Stores value on Screen
let displayNum = ''
// Stores previous displayNum value
let previousNum;
// Stores the result from the operation
let result;
//Store previous math operator clicked
let mathOperator;
// Is decimal clicked
let decimal = false;

//Display number on Screen
 function updateScreen(e) {   
    let number = e.target.innerText;
    let error = 'Number to big'

    if(result){
        displayNum = number;
        result = '';
    }else{
        if(number === '.'){
            if(decimal != true) {
                displayNum += number;
                decimal = true    
            }
        }else{
            displayNum += number
        }
    }
    
    screen.innerText = displayNum;            
    
    if(displayNum.length > 19){
        screen.innerText = error
    }
}

//function for operator btn
function operationBtnPress(e){
//store the first num in previousNum variable
    if(!result){
        previousNum = displayNum;
    } else {
// set previous num to the result        
        previousNum = result
    }

//Empty the first number from memory
    displayNum = ''
//reset decimal    
    decimal = false
//store the math Operator i memory    
    mathOperator = e.target.innerText
//reset result     
    result = ''
    screen.innerText = previousNum
}

//function for equal button 
equal.addEventListener('click', function equal(){
   
    decimal= false;
    previousNum = parseFloat(previousNum);
    displayNum = parseFloat(displayNum);

    if(mathOperator === '+'){
        result = previousNum + displayNum
        screen.innerText = result;
    }
    else if(mathOperator === '-'){
        result = previousNum - displayNum
        screen.innerText = result;
    }
    else if(mathOperator === 'X'){
        result = previousNum * displayNum
        screen.innerText = result;
    }
    else if(mathOperator === '/'){
        if(displayNum === 0){
            screen.innerText = "Can't divide by 0"
        } else {
            result = previousNum / displayNum
            screen.innerText = result;
        }
     } 
   
    previousNum = result
});

//delete button
clearBtn.addEventListener('click', function(){
    displayNum = '';
    previousNum = ''
    screen.innerText = '0'
    result = ''
})


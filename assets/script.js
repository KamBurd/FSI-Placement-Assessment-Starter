// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Kameron Burden" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinuBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinuBtn = document.querySelector('#minus-cc')
const sugPlusBtn = document.querySelector('#add-sugar')
const sugMinuBtn = document.querySelector('#minus-sugar')
console.log(gbPlusBtn)
console.log(gbMinuBtn)
console.log(ccPlusBtn)
console.log(ccMinuBtn)
console.log(sugPlusBtn)
console.log(sugMinuBtn)

let gbnumber = document.querySelector('#qty-gb')
console.log(gbnumber)
let ccnumber = document.querySelector('#qty-cc')
console.log(ccnumber)
let sugnumber = document.querySelector('#qty-sugar')
console.log(sugnumber)

let totaln = document.querySelector('#qty-total')
console.log(totaln)


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies

gbPlusBtn.addEventListener('click', function(e) {
    gb = gb + 1;
    gbnumber.textContent = gb;
    totaln.textContent = sugar + cc + gb;
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    })

// TODO: Hook up event listeners for the rest of the buttons

gbMinuBtn.addEventListener('click', function(e) {
    gb = gb -1;
    gbnumber.textContent = gb;
    totaln.textContent = sugar + cc + gb;
    })
 
ccPlusBtn.addEventListener('click', function (e){
    cc = cc + 1;
    ccnumber.textContent = cc;
    totaln.textContent = sugar + cc + gb;
  
})


 
ccMinuBtn.addEventListener('click', function (e){
    cc = cc - 1;
    ccnumber.textContent = cc;
    totaln.textContent = sugar + cc + gb;
   
})
 
sugPlusBtn.addEventListener('click', function (e){
    sugar = sugar + 1;
    sugnumber.textContent = sugar;
    totaln.textContent = sugar + cc + gb;
})


 
sugMinuBtn.addEventListener('click', function (e){
    sugar = sugar - 1;
    sugnumber.textContent = sugar;

    totaln.textContent = sugar + cc + gb;
    
})



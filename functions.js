
const billInput = document.querySelector(".bill-input");
const buttons = document.querySelectorAll(".btn-n");
const numberOfPeopleInput = document.querySelector(".n-people-input");
const customTipInput = document.querySelector(".custom-tip-input")

const billPerPerson = document.querySelector(".personalBill");
const tipPerPerson = document.querySelector(".tipOutput");
const resetButton = document.querySelector(".reset-btn-btn")

let billValue = 0;
let percentage = 0;
let numberOfPeople = 1;
let totalPerPerson = 0;
let tipTotalPerPerson = 0;
                                                                                                                                                                                                                                                                                                                                        
billInput.addEventListener("input", (event)=>{
  billValue = parseFloat(event.target.value);
  if (billValue && numberOfPeople > 0) {
    totalPerPerson = (billValue / numberOfPeople).toFixed(2);
  }
}, false);

numberOfPeopleInput.addEventListener("input", (event)=> {
  numberOfPeople = event.target.value
  if (billValue > 0 && numberOfPeople) {
    totalPerPerson = (billValue / numberOfPeople).toFixed(2);
  }
} , false);

buttons.forEach((button) => { 
  button.addEventListener("click", (event) => {
    percentage = event.target.value
    tipTotalPerPerson = (totalPerPerson * percentage)
    console.log(tipTotalPerPerson)
  }, false)
});

resetButton.addEventListener("click", event => {
  billInput.value = `\$ ${"0.00"}`;
  numberOfPeople.value = 0;
  billPerPerson.value = `\$ ${"0.00"}`;
  tipPerPerson.value = `\$ ${"0.00"}`;
})

customTipInput.addEventListener("input", event => {
  const percentage = event.target.value
  if (event.target.value) {
    tipTotalPerPerson = totalPerPerson * (percentage/100)
    console.log(tipTotalPerPerson)
  }
})
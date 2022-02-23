

const billInput = document.querySelector(".bill-input");
const buttons = document.querySelectorAll(".btn-n");
const numberOfPeopleInput = document.querySelector(".n-people-input");
const customTipInput = document.querySelector(".custom-tip-input")

const billPerPerson = document.querySelector(".personalBill");
const tipPerPerson = document.querySelector(".tipOutput");
const resetButton = document.querySelector(".reset-btn-btn");
const button10 = document.querySelector(".btn10");

//billInput.value = `\$ ${"0.00"}`;
//ponle todo el codigo que ocupes ahorita

let billValue = 0.00;
let percentage = 0.10;
let numberOfPeople = 1.00;
let totalPerPerson = 0.00;
let tipTotalPerPerson = 0.00;

//button10.onload = function () {
//  ($this).css({"color":"darkslategray" , "background-color": "rgb(0, 243, 243)"})
//}
                                                                                                                                                                                                                                                                                                                                        
billInput.addEventListener("input", (event)=>{
  billValue = event.target.value;
  if (billValue && numberOfPeople > 0) {
    totalPerPerson = (billValue / numberOfPeople).toFixed(2);
    console.log(totalPerPerson);
    tipTotalPerPerson = (totalPerPerson * percentage).toFixed(2);
    console.log(tipTotalPerPerson);
    billPerPerson.textContent = `\$ ${totalPerPerson}`;
    tipPerPerson.textContent = `\$ ${tipTotalPerPerson}`;

  }
}, false);

numberOfPeopleInput.addEventListener("input", (event)=> {
  numberOfPeople = event.target.value
  if (billValue > 0 && numberOfPeople) {
    totalPerPerson = (billValue / numberOfPeople).toFixed(2);
    console.log(totalPerPerson);
    tipTotalPerPerson = (totalPerPerson * percentage).toFixed(2);
    console.log(tipTotalPerPerson);

    billPerPerson.textContent = `\$ ${totalPerPerson}`;
tipPerPerson.textContent = `\$ ${tipTotalPerPerson}`;
  }
} , false);

buttons.forEach((button) => { 
  button.addEventListener("click", (event) => {
    percentage = event.target.value
    tipTotalPerPerson = (totalPerPerson * percentage).toFixed(2);
    console.log(tipTotalPerPerson)
    tipPerPerson.textContent = `\$ ${tipTotalPerPerson}`;
  }, false)
});

//billPerPerson.textContent = `\$ ${totalPerPerson}`;
//tipPerPerson.textContent = `\$ ${tipTotalPerPerson}`;


resetButton.addEventListener("click", event => {
  billValue = 0;
  billInput.value = 0;
  numberOfPeople = 1;
  numberOfPeopleInput.value = 1;
  percentage = 0.1;
  //customTipInput= 0;
  //buttons.value = 0.1;
  billPerPerson.value = `\$ ${"0.00"}`;
  tipPerPerson.value = `\$ ${"0.00"}`;
})


window.onload = function() {
  billValue = 0;
  billInput.value = 0;
  numberOfPeople = 1;
  numberOfPeopleInput.value = 1;
  percentage = 0.1;
  //customTipInput = 0;
  //buttons.value = 0.1;
  billPerPerson.value = `\$ ${"0.00"}`;
  tipPerPerson.value = `\$ ${"0.00"}`;
 }


customTipInput.addEventListener("input", event => {
  const percentage = event.target.value
  if (event.target.value) {
    tipTotalPerPerson = (totalPerPerson * (percentage/100)).toFixed(2);
    tipPerPerson.textContent = `\$ ${tipTotalPerPerson}`;
  }
})
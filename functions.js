
const billInput = document.querySelector(".bill-input");
const buttons = document.querySelectorAll(".btn-n");
const numberOfPeopleInput = document.querySelector(".n-people-input");

const billPerPerson = document.querySelector(".personalBill");
const tipPerPerson = document.querySelector(".tipOutput");
const resetButton = document.querySelector(".reset-btn-btn")

let billValue = 0;
let percentage = 0.0;
let numberOfPeople = 0;


//tengo que tener variables que guarden el estado e inicializarlas 
                                                                                                                                                                                                                                                                                                                                              
billInput.addEventListener("input", (event)=>{
  if (event.target.value) {
    console.log("dentro del if", event.target.value)
  }
  console.log("fuera de if", event.target.value)

/*     billValue = parseFloat(event.target.value);

    let totalPerPerson = (bill/(people)).toFixed(2);

    if (bill == 0 || people == 0 ) {
      billPerPerson.textContent = `\$ ${"0.00"}`;
   }


   else {

       billPerPerson.textContent =`\$ ${totalPerPerson}`;

   }
    
    let tipPerPersonFormula = (((bill)*(percentageValue))/people).toFixed(2);

    if (bill == 0 || people == 0 ) {
      tipPerPerson.textContent = `\$ ${"0.00"}`;
    }
    
    if (people !== Number ) {
      tipPerPerson.textContent = `\$ ${"0.00"}`;
    }
    

    else {

       tipPerPerson.textContent =`\$ ${tipPerPersonFormula}`;
    }

 */

}, false);

 ////////////////////////////    


numberOfPeople.addEventListener("input", (event)=> {


    let bill = parseFloat(billInput.value);

    let people = parseFloat(event.target.value);

    let percentageValue = (buttons.value);



    let totalPerPerson = (bill/(people)).toFixed(2);

    if (bill == 0 || people == 0  ) {
      billPerPerson.textContent = `\$ ${"0.00"}`;
   }


   else {

       billPerPerson.textContent =`\$ ${totalPerPerson}`;
   }

   
    
    let tipPerPersonFormula = (((bill)*(percentageValue))/people).toFixed(2);

    if (bill == 0 || people == 0  ) {
      tipPerPerson.textContent = `\$ ${"0.00"}`;
    }


    else {

       tipPerPerson.textContent =`\$ ${tipPerPersonFormula}`;
    }


     } , false );

     ///////////////////////




buttons.forEach((button) => { button.addEventListener("click", (event) => {


        let bill = parseFloat(billInput.value);

        let people = parseFloat(numberOfPeople.value);

        let percentageValue = parseFloat(event.target.value);



        let totalPerPerson = (bill/(people)).toFixed(2);

        if (bill == 0 || people == 0 ) {
         billPerPerson.textContent = `\$ ${"0.00"}`;
      }
   
      else {

           billPerPerson.textContent =`\$ ${totalPerPerson}`;

      }
       
        
        let tipPerPersonFormula = (((bill)*(percentageValue))/people).toFixed(2);

        if (bill == 0 || people == 0 ) {
         tipPerPerson.textContent = `\$ ${"0.00"}`;
       }
   
       else {
   

           tipPerPerson.textContent =`\$ ${tipPerPersonFormula}`;
       }


         } , false ) }  );






resetButton.addEventListener("click",(event)=>{

    billInput.value = `\$ ${"0.00"}`;
    numberOfPeople.value = 0;
    billPerPerson.value = `\$ ${"0.00"}`;
    tipPerPerson.value = `\$ ${"0.00"}`;

})
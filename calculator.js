const bill = document.getElementById('bill');
const Tips= document.getElementsByClassName('tips');
const numberOfPeople = document.getElementById('numberOfPeople');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');
const resetButton= document.getElementById('reset_button');
const customTip= document.getElementById('custom');
const errorMessagePpl= document.getElementById('error_msg_ppl');
const errorMessageBill= document.getElementById('error_msg_bill');
const errorMessageTip=document.getElementById('error_msg_tip');

let t = 0;
let billValue=0;
let pplValue=0;
let customedTip=0;
let totalOverall = billValue * ( 1 + t );
// tipPerPerson.innerHTML= (totalOverall/t) / numberOfPeople.value;

// tipPerPerson = bill.value;
console.log(Tips);

// Tips.forEach(tip => {
//     tip.addEventListener('click', function(){

//        console.log('click working');

//         tip.classList.toggle('active');
//     })
// });

tipPerPerson.innerHTML= "$0.00";
totalPerPerson.innerHTML= "$0.00";

resetButton.setAttribute("disabled","disabled");
resetButton.classList.add('desactivated');

window.addEventListener('load', function(){
    for(const tip of Tips) {
        if(tip.value == 0.05) {
            t = parseFloat(tip.value);
            tip.classList.toggle('active');
        }
    }
})

for(let tip of Tips){

    tip.addEventListener('click',function(){

        for(let i = 0; i < Tips.length; i++) {

            if(Tips[i].classList.contains('active')) {

                if(tip.classList.contains('active')) {
                    continue;
                }
                Tips[i].classList.remove('active');
            }

        }

        console.log('click working');
        console.log(tip.value);
        
        tip.classList.toggle('active');

        if(tip.classList.contains('active')) {
            t = parseFloat(tip.value);
        }
        else{t = NaN;}

        console.log(t);
        

        // totalOverall = `${bill.value} * ${( 1 + t )}`;
        totalOverall = billValue * ( 1 + t );

        // tipPerPerson.innerHTML= (bill.value * t) / numberOfPeople.value;
        // totalPerPerson.innerHTML= totalOverall / numberOfPeople.value;

        //Rounding number to 2 decimal places
        tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
        totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;

        console.log(`Total overall is ${totalOverall}`);
        console.log(`Bill is ${billValue}`);

        if(!bill.value && !t && !numberOfPeople.value) {
            resetButton.setAttribute("disabled","disabled");
            resetButton.classList.add('desactivated');
        }
        else{
            resetButton.removeAttribute("disabled"); console.log("succesfully removed");
            resetButton.classList.remove('desactivated');
        }
            
        // if(resetButton.hasAttribute('disabled')) {
        //     resetButton.classList.add('desactivated');
        // }

        // if(!bill.value || !t || !numberOfPeople.value) {
        //     tipPerPerson.innerHTML= "$...";
        //     totalPerPerson.innerHTML= "$...";
        // }

        // if(t != customTip.value) {
        //     customTip.style.outline ="";
        //     errorMessageTip.style.display="none";
        // }

        customTip.style.outline ="";
        errorMessageTip.style.display="none";

        if(!billValue || !pplValue || !t){
            tipPerPerson.innerHTML= "$0.00";
            totalPerPerson.innerHTML= "$0.00";
        }
        else{
            tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
            totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;
        }

    
    })
}

console.log(numberOfPeople.value);
console.log(totalPerPerson);

bill.addEventListener('keyup',function(){

    /*

    .value is readonly so no operation like parseFloat can alter it's nature;
    bill.value = parseFloat(bill.value); will not work
    console.log(typeof(bill.value));
    
    */
   
    if(bill.value.match(/[a-zA-Z]/)){
        bill.value="";
    }

    billValue = parseFloat(bill.value);

    // if(bill.value.match(/0-9/g)) {
    //     billValue = parseFloat(bill.value);
    // }
    // else{
    //     bill.value="";
    // }

    console.log('keyup working');
    console.log(billValue);
    totalOverall = billValue * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;

    // if(!bill.value && !t.value && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else{resetButton.removeAttribute("disabled");}

    // if(!bill.value && !t && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else if(bill.value || t || numberOfPeople.value){
    //     resetButton.removeAttribute("disabled");}
    //     console.log("succesfully removed");

    if(!bill.value && !customTip.value && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }

    // if(!bill.value || !t || !numberOfPeople.value) {
    //     tipPerPerson.innerHTML= "$...";
    //     totalPerPerson.innerHTML= "$...";
    // }

    if(billValue <1 && billValue != NaN) {
        bill.style.outline = "2px solid crimson";
        errorMessageBill.style.display = "block";
    }
    else{
        bill.style.outline = "";
        errorMessageBill.style.display="none";
    }

    if(!billValue || !pplValue || !t){
        tipPerPerson.innerHTML= "$0.00";
        totalPerPerson.innerHTML= "$0.00";
    }
    else{
        tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
        totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;
    }
});

// numberOfPeople.addEventListener('click',function(){

//     if(numberOfPeople.value<1 && numberOfPeople.value){
//         numberOfPeople.style.outline = "2px solid crimson";
//         errorMessagePpl.style.display = "block";
//     }
//     else{
//         numberOfPeople.style.outline = "";
//         errorMessagePpl.style.display="none";
//     }
// })

numberOfPeople.addEventListener('keyup',function(){

    if(numberOfPeople.value.match(/[a-zA-Z]/)){
        numberOfPeople.value="";
    }

    pplValue = parseFloat(numberOfPeople.value);

    if(pplValue <1 && pplValue != NaN){
        numberOfPeople.style.outline = "2px solid crimson";
        errorMessagePpl.style.display = "block";
    }
    else{
        //line of code below definitely let outline be this color even if input not focused
        // numberOfPeople.style.outline = "2px solid hsl(172, 67%, 45%)";
        numberOfPeople.style.outline = "";
        errorMessagePpl.style.display="none";
    }

    console.log('keyup working');
    console.log(pplValue);
    totalOverall = billValue * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;

    // if(!bill.value && !t.value && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else{resetButton.removeAttribute("disabled");}


    // if(!bill.value && !t && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else if(bill.value || t || numberOfPeople.value){
    //     resetButton.removeAttribute("disabled");}
    //     console.log("succesfully removed");

    if(!bill.value && !customTip.value && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }

    // if(!numberOfPeople.value) {
    //     tipPerPerson.innerHTML= "€rr";
    //     totalPerPerson.innerHTML= "€rr";
    // }

    if(!billValue || !pplValue || !t){
        tipPerPerson.innerHTML= "$0.00";
        totalPerPerson.innerHTML= "$0.00";
    }
    else{
        tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
        totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;
    }
});

customTip.addEventListener('keyup',function(){

    if(customTip.value.match(/[a-zA-Z]/)) {
        customTip.value="";
    }

    // customedTip = parseFloat(customTip.value);
    customedTip = parseFloat(customTip.value);

    if(customedTip <1 && customedTip !=NaN) {
        customTip.style.outline = "2px solid crimson";
        errorMessageTip.style.display = "block";
    }
    else{
        customTip.style.outline = "";
        errorMessageTip.style.display="none";
    }

    console.log('customTip working');
    console.log(customedTip);
    t = customedTip /100;
    totalOverall = billValue * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;

    // if(!bill.value && !t.value && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else{resetButton.removeAttribute("disabled");}

    if(!bill.value && !customTip.value && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }

    // if(!bill.value || !t || !numberOfPeople.value) {
    //     tipPerPerson.innerHTML= "$...";
    //     totalPerPerson.innerHTML= "$...";
    // }

    if(!billValue || !pplValue || !t){
        tipPerPerson.innerHTML= "$0.00";
        totalPerPerson.innerHTML= "$0.00";
    }
    else{
        tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
        totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;
    }
});

customTip.addEventListener('click',function(){

    customedTip = parseFloat(customTip.value);

    if(customedTip <1 && customedTip !=NaN) {
        customTip.style.outline = "2px solid crimson";
        errorMessageTip.style.display = "block";
    }

    else{
        customTip.style.outline = "";
        errorMessageTip.style.display="none";
    }

    for(let z = 0; z < Tips.length; z++) {
        Tips[z].classList.remove('active');
    }

    t = customedTip /100;

    totalOverall = billValue * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;

    // if(!bill.value && !t.value && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else{resetButton.removeAttribute("disabled");}

    if(!bill.value && !customTip.value && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }

    // if(!bill.value || !t || !numberOfPeople.value) {
    //     tipPerPerson.innerHTML= "$...";
    //     totalPerPerson.innerHTML= "$...";
    // }

    if(!billValue || !pplValue || !t){
        tipPerPerson.innerHTML= "$0.00";
        totalPerPerson.innerHTML= "$0.00";
    }
    else{
        tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
        totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;
    }
});

resetButton.addEventListener('click',function(){

    // t=0;
    // totalOverall=0;
    // tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    // totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;

    t=0;
    // tipPerPerson.innerHTML= "$0.00";
    // totalPerPerson.innerHTML= "$0.00";

    for(let z = 0; z < Tips.length; z++) {
        Tips[z].classList.remove('active');
    }
    
    bill.value="";
    billValue=0;
    customTip.value="";
    customedTip=0;
    numberOfPeople.value="";
    pplValue=0;

    numberOfPeople.style.outline = "";
    errorMessagePpl.style.display="none";
    customTip.style.outline = "";
    errorMessageTip.style.display="none";
    bill.style.outline = "";
    errorMessageBill.style.display="none";

    // if(!bill.value && !t.value && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else{resetButton.removeAttribute("disabled");}

    if(!bill.value && !customTip.value && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }

    if(!billValue || !pplValue || !t){
        tipPerPerson.innerHTML= "$0.00";
        totalPerPerson.innerHTML= "$0.00";
    }
    else{
        tipPerPerson.innerHTML= "$"+ Math.round( ( (billValue * t)/pplValue ) * 100) / 100 ;
        totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/pplValue) * 100) / 100;
    }
    
});

const bill = document.getElementById('bill');
const Tips= document.getElementsByClassName('tips');
const numberOfPeople = document.getElementById('numberOfPeople');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');
const resetButton= document.getElementById('reset_button');
const customTip= document.getElementById('custom');
const errorMessage= document.getElementById('error_msg');

let t = 0;
let totalOverall = bill.value * ( 1 + t );
// tipPerPerson.innerHTML= (totalOverall/t) / numberOfPeople.value;

// tipPerPerson = bill.value;
console.log(Tips);

// Tips.forEach(tip => {
//     tip.addEventListener('click', function(){

//        console.log('click working');

//         tip.classList.toggle('active');
//     })
// });

for(let tip of Tips){

    tip.addEventListener('click',function(){

        for(let i = 0; i < Tips.length; i++) {

            if(Tips[i].classList.contains('active')) {

                if (tip.classList.contains('active')) {
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
        else{t=0;}

        console.log(t);
        

        // totalOverall = `${bill.value} * ${( 1 + t )}`;
        totalOverall = bill.value * ( 1 + t );

        // tipPerPerson.innerHTML= (bill.value * t) / numberOfPeople.value;
        // totalPerPerson.innerHTML= totalOverall / numberOfPeople.value;

        //Rounding number to 2 decimal places
        tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
        totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;

        console.log(`Total overall is ${totalOverall}`);
        console.log(`Bill is ${bill.value}`);

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
    })
}

console.log(numberOfPeople.value);
console.log(totalPerPerson);

bill.addEventListener('keyup',function(){
    
    console.log('keyup working');
    console.log(bill.value);
    totalOverall = bill.value * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;

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

    if(!bill.value && !t && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }
});

numberOfPeople.addEventListener('keyup',function(){

    if(numberOfPeople.value<1 && numberOfPeople.value){
        numberOfPeople.style.outline = "2px solid crimson";
        errorMessage.style.display = "block";
    }
    else{
        //line of code below definitely let outline be this color even if input not focused
        // numberOfPeople.style.outline = "2px solid hsl(172, 67%, 45%)";
        numberOfPeople.style.outline = "";
        errorMessage.style.display="none";
    }

    console.log('keyup working');
    console.log(numberOfPeople.value);
    totalOverall = bill.value * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;

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

    if(!bill.value && !t && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }
});

customTip.addEventListener('keyup',function(){

    console.log('customTip working');
    console.log(customTip.value);
    t = customTip.value /100;
    totalOverall = bill.value * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;

    // if(!bill.value && !t.value && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else{resetButton.removeAttribute("disabled");}

    if(!bill.value && !t && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }
});

customTip.addEventListener('click',function(){

    for (let z = 0; z < Tips.length; z++) {
        Tips[z].classList.remove('active');
    }

    t = customTip.value /100;

    totalOverall = bill.value * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;

    // if(!bill.value && !t.value && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else{resetButton.removeAttribute("disabled");}

    if(!bill.value && !t && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }
});

resetButton.addEventListener('click',function(){

    // t=0;
    // totalOverall=0;
    // tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    // totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;

    t=0;
    tipPerPerson.innerHTML= "$0.00";
    totalPerPerson.innerHTML= "$0.00";

    for (let z = 0; z < Tips.length; z++) {
        Tips[z].classList.remove('active');
    }
    
    bill.value="";
    customTip.value="";
    numberOfPeople.value="";

    // if(!bill.value && !t.value && !numberOfPeople.value) {
    //     resetButton.setAttribute("disabled","disabled");
    // }
    // else{resetButton.removeAttribute("disabled");}

    if(!bill.value && !t && !numberOfPeople.value) {
        resetButton.setAttribute("disabled","disabled");
        resetButton.classList.add('desactivated');
    }
    else{
        resetButton.removeAttribute("disabled"); console.log("succesfully removed");
        resetButton.classList.remove('desactivated');
    }
    
});

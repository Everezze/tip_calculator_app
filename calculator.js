const bill = document.getElementById('bill');
const Tips= document.getElementsByClassName('tips');
const numberOfPeople = document.getElementById('numberOfPeople');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');
const resetButton= document.getElementById('reset_button');
const customTip= document.getElementById('custom');

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

        if (tip.classList.contains('active')) {
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
});

numberOfPeople.addEventListener('keyup',function(){

    console.log('keyup working');
    console.log(numberOfPeople.value);
    totalOverall = bill.value * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;
});

customTip.addEventListener('keyup',function(){

    console.log('customTip working');
    console.log(customTip.value);
    t = customTip.value /100;
    totalOverall = bill.value * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;
});

customTip.addEventListener('click',function(){

    for (let z = 0; z < Tips.length; z++) {
        Tips[z].classList.remove('active');
    }

    t = customTip.value /100;

    totalOverall = bill.value * ( 1 + t );

    tipPerPerson.innerHTML= "$"+ Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
    totalPerPerson.innerHTML= "$"+ Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;
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
    numberOfPeople.value="";
});

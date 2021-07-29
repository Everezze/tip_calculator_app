const bill = document.getElementById('bill');
const Tips= document.getElementsByClassName('tips');
const numberOfPeople = document.getElementById('numberOfPeople');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');

let t=null;
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
                Tips[i].classList.toggle('active');
            }

        }

        console.log('click working');
        console.log(tip.value);
        
        tip.classList.toggle('active');
        t = parseFloat(tip.value);
        console.log(t);

        // totalOverall = `${bill.value} * ${( 1 + t )}`;
        totalOverall = bill.value * ( 1 + t );

        // tipPerPerson.innerHTML= (bill.value * t) / numberOfPeople.value;
        // totalPerPerson.innerHTML= totalOverall / numberOfPeople.value;

        //Rounding number to 2 decimal places
        tipPerPerson.innerHTML= Math.round( ( (bill.value * t)/numberOfPeople.value ) * 100) / 100 ;
        totalPerPerson.innerHTML= Math.round( (totalOverall/numberOfPeople.value) * 100) / 100;

        console.log(`Total overall is ${totalOverall}`);
        console.log(`Bill is ${bill.value}`);
    })
}

console.log(numberOfPeople.value);
console.log(totalPerPerson);

bill.addEventListener('keypress',function(){

})

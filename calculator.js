const bill = document.getElementById('bill');
const Tips= document.getElementsByClassName('tips');
const numberOfPeople = document.getElementById('numberOfPeople');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson');

let t=0;
const totalOverall = bill.value * ( 1 + (t/100) );
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

        for (let i = 0; i < Tips.length; i++) {
            if (Tips[i].classList.contains('active')) {
                Tips[i].classList.toggle('active');
            }
            
        }

        console.log('click working');
        console.log(tip.value);
        
        tip.classList.toggle('active');
        t= tip.value;
        console.log(t);
        tipPerPerson.innerHTML= (totalOverall/t) / numberOfPeople.value;
    })
}

console.log(numberOfPeople.value);

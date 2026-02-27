//const { OptimisticLockError } = require("sequelize");

let select = document.querySelectorAll('.currency');
let btn = document.getElementById('btn');
let input = document.getElementById('input');
let result = document.getElementById('result');
console.log(select)

const apiKey = "aec34f29628178253a6aca9f";
fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/NOK`)

.then(res => res.json())
.then(res => displayDropDown(res))
.catch(err => console.error("API error:", err));

function displayDropDown(res) {
   //console.log(Object.entries(res)[0])
   const curr = Object.keys(res.conversion_rates);
   let options = "";

    for (let i=0;i<curr.length;i++){
        options += `<option value="${curr[i]}">${curr[i]}</option>`;
        select[0].innerHTML = options;
        select[1].innerHTML = options;

        select[0].value = "NOK";
        select[1].value = "USD";
   }
} 
btn.addEventListener('click',()=> {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    if (curr1 === curr2){
        alert("Velg en annen currency")
    }else{
        convert(curr1, curr2, inputVal)
    }
})

function convert(curr1, curr2, inputVal){
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${curr1}`)
    .then(resp => resp.json())
    .then((data) => {
        let rate = data.conversion_rates[curr2];
        let converted = inputVal * rate;

        result.value = converted.toFixed(2);

        alert(`10 GBP = ${data.rates.NOK}NOK`)
    })
    .catch(err => console.error("Conversion error:", err));
}
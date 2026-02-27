//const { OptimisticLockError } = require("sequelize");

let select = document.querySelectorAll('.currency')
console.log(select)

const apiKey = "aec34f29628178253a6aca9f";
fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/NOK`)

.then(res=>res.json())
.then(res=>displayDropDown(res))
.catch(err => console.error("API error:", err));

function displayDropDown(res) {
   //console.log(Object.entries(res)[0])
   const curr = Object.keys(res.conversion_rates);
   let options = "";

    for (let i=0;i<curr.length;i++){
        options += `<option value="${curr[i]}">${curr[i]}</option>`;
        select[0].innerHTML += options;
        select[1].innerHTML += options;
   }
} 
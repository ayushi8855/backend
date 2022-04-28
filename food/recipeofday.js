import {getdata,display} from "./components/showdata.js"
import navbar from "./components/navbar.js";
var div1 = document.querySelector("#nav")
// console.log(navbar)
div1.innerHTML= navbar()
// www.themealdb.com/api/json/v1/1/random.php
var url =`https://www.themealdb.com/api/json/v1/1/random.php`

let res = await getdata(url)
console.log(res[0].strInstructions)
let parent =document.querySelector("#cont2")

display(res,parent)

document.querySelector("#detail").textContent= res[0].strInstructions
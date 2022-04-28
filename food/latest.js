import {getdata,display} from "./components/showdata.js"
import navbar from "./components/navbar.js";
var div1 = document.querySelector("#nav")
console.log(navbar)
div1.innerHTML= navbar()
// www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

var url =`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`

let res = await getdata(url)
console.log(res)
let parent =document.querySelector("#cont")

display(res,parent)

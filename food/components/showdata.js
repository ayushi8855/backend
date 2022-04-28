// var url =`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
async function getdata(url){
    try{
        let res=await fetch(url) 
        let data= await res.json()
        // console.log(data)
        // display(data.meals)
        return data.meals
    }
catch(err){
    console.log(err)
}
}


const  display = (d,parent) =>
  {
    // console.log(d)
   d.map((elem)=>
   {  
       var div1  = document.createElement("div")
       var image = document.createElement("img")
       image.src = elem.strMealThumb
       var p = document.createElement("p")
           p.textContent=elem.strMeal
       div1.append(image,p)
      parent.append(div1)
   })
}






export {getdata,display}




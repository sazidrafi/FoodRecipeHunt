// const { createElement } = require("react");

document.getElementById("search-button").addEventListener("click", (event) => {
    //save the value in a variable
    const inputValue = document.getElementById("input-field").value;
    
    fetchInformation(inputValue);

    //show the input value
    // const p = document.createElement("p")
    // p.innerText = inputValue;
    // const showContent = document.getElementById("show_content")
    // showContent.appendChild(p)
    // document.getElementById("input-field").value=""
})

const showDetailsOnClick= () =>{
    console.log("showDetailsOnClick method called!");
}
const fetchInformation = (food_name) =>{
    console.log("Your given food name: ",food_name);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`)
  .then(response => response.json())
  .then(data => {

    //catch the container to appendchild
    const container = document.getElementById("showAllFoods")
    
    container.innerHTML = ""; //clear if any previous content left
    
     for(let element of data.meals) {  //traverse the data
        
        const div = document.createElement("div")
        div.classList.add("card-design")
        div.id = "card-design"
        div.innerHTML = `
            <img src="${element.strMealThumb}" class="img-size" alt="">
            <h2 class="heading-gap">${element.strMeal}</h2>
        `
        container.appendChild(div)


         //console.log(data);
     }


     //card er details show kora
     //ekhane theke kaj suru korte hbe,, ei approach e hbe na
     //Event Delegation method apply korte hbe
    //  document.getElementById("card-design").addEventListener("click",
    //     (event)=>{
    //         showDetailsOnClick()
    //     }
    //  )
  });
}
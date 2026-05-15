// const { createElement } = require("react");

document.getElementById("search-button").addEventListener("click", (event) => {
    //save the value in a variable
    const inputValue = document.getElementById("input-field").value;
    
    fetchInformation(inputValue);
    document.getElementById("input-field").value = "";
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

    //jodi food na thake tahole "No item found" print koro
    if(data.meals == null)
    {
        container.innerText = "No item found";
    }
    else{
        for(let element of data.meals) {  //traverse the data
        
        const div = document.createElement("div")
        div.classList.add("card-design")
        div.id = "card-design"
        div.innerHTML = `
            <img src="${element.strMealThumb}" class="img-size" alt="">
            <h2 class="heading-gap">${element.strMeal}</h2>
        `

        div.addEventListener("click",(event)=>{
            ShowDetails(element)
        })

        container.appendChild(div)


         //console.log(data);
     }
    }
    
  });
}

const ShowDetails = (food) => {

    const details = document.getElementById("showDetailsOnClick");
    details.innerHTML = ""; // Clear previous content

    // Collect ingredients and measures
    let ingredientsList = "<h3>Ingredients:</h3><ul>";
    for(let i = 1; i <= 20; i++) {
        const ingredient = food[`strIngredient${i}`];
        const measure = food[`strMeasure${i}`];
        
        if(ingredient && ingredient.trim() !== "") {
            ingredientsList += `<li>${ingredient} - ${measure}</li>`;
        }
    }
    ingredientsList += "</ul>";

    const div = document.createElement("div")
    div.classList.add("card-design")
    div.classList.add("card-design2")
    div.innerHTML = `
        <img src="${food.strMealThumb}" class="img-size" alt="">
        <h2 class="heading-gap">${food.strMeal}</h2>
        ${ingredientsList}
    `;
    details.appendChild(div)
}
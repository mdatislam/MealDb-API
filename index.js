console.log('atiq')


const loadMealsite = () =>{
  document.getElementById('error').style.display='none'
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value ; 

   //Input error handling
  

    if(inputField.value != ''){
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
    }

    else{
      document.getElementById('error').style.display='block'
      document.getElementById('empty').style.display='block'
      document.getElementById('notMatch').style.display='none'
      
    }
    
}

const displayFood = data =>{  
    const items = document.getElementById('item-detail');
    items.textContent = '';
    //  console.log(data.length)
    if(data != null){
    data.forEach(data =>{
        const div = document.createElement('div');
        const ItemUrl = data.strMealThumb;
        const descrip = data.strInstructions.slice(0,100);
        const name = data.strMeal;
        // console.log(name)
        div.classList.add('col')
        div.innerHTML =`
        <div class="card border-2 border-warning h-100" onclick="loadMealDetail(${data.idMeal})">
      <img src="${ItemUrl}" class="card-img-top p-2 "  alt="...">
      <div class="card-body">
      <h5 class="card-title tex-center">${name}</h5>
        <p class="card-text">"${descrip}</p>
      </div>
    </div>`
    items.appendChild(div)
    document.getElementById('meal-detail').textContent = '';
    document.getElementById('itemDetail').style.display='none'
    } )
  }
  else  {
    // alert('not matched')
    document.getElementById('error').style.display='block'
    document.getElementById('empty').style.display='none'
    document.getElementById('notMatch').style.display='block'
  }
}

          // Display Item Details

const loadMealDetail = id =>{
const MealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
// console.log(MealUrl)
fetch(MealUrl)
.then(res => res.json())
.then( mealData => disPlayMeal(mealData.meals))
}

const disPlayMeal= itemDetail => {
  document.getElementById('itemDetail').style.display='none'
    document.getElementById('itemDetail').style.display='block'
    // console.log(itemDetail)
  const displaySingleMeal = document.getElementById('meal-detail');
  displaySingleMeal.textContent = '';
  itemDetail.forEach( item=> {
    const name = item.strMeal;
    const description = item.strInstructions.slice(0,200);
    const tags = item.strtags
    const mealUrl = item.strMealThumb;
    const youtubeUrl = item.strYoutube;
    // console.log(tags)
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML =`
    <div class="card border-2 border-info bg-warning h-100">
      <img src="${mealUrl}" class="card-img-top p-2"  alt="...">
      <div class="card-body">
      <h5 class="card-title tex-center">${name}</h5>
        <p class="card-text">"${description}</p>
        <button class ="btn btn-primary ms-5"> <a  class="text-warning text-decoration-none fs-bold" href="${youtubeUrl}" target="_blank"> Vedio</a></button>
      </div>
    </div>
    `
    displaySingleMeal.appendChild(div)
  })
}

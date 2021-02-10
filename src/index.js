// write your code here
const urlIngredients = 'http://localhost:3000/ingredients'
fetch (urlIngredients)
.then(res => res.json())
.then(dataOne => console.log(dataOne) )


const urlSpiceBlends = 'http://localhost:3000/spiceblends'
fetch (urlSpiceBlends)
.then(res => res.json())
.then(dataTwo => {
    dataTwo.forEach(renderSpiceBlends)
})


const renderSpiceBlends = spiceBlend => {
    
    // dataTwo.forEach(spiceBlend =>{
    let spiceImages = document.querySelector('#spice-images')
    let newDiv = document.createElement('div')
    console.log('yooooo')
    newDiv.innerHTML = `
    <img class="detail-image" src="${spiceBlend.image}" alt="${spiceBlend.name}" />
    `
    spiceImages.append(newDiv)
}

let spiceImages = document.querySelector('#spice-images')
spiceImages.addEventListener('click', handleClick)

function handleClick(e){


    console.log(e)
    const spiceBlendDetail = document.querySelector('#spice-blend-detail')
    spiceBlendDetail.innerHTML =  `sffff`

// not able to access API - another fetch within the method?

    // <img class="detail-image" src="${spiceBlend.image}" alt="${spiceBlend.name}" />
    // <h2 class="title">${spiceBlend.name}</h2>

    // <div class="ingredients-container">
    //   <h4>Ingredients:</h4>
    //   <ul class="ingredients-list">
    //     <!-- Add Spice Blend Ingredients Here -->
    //   </ul>
    // </div>
    
}









const editSpiceForm = document.querySelector('#update-form')
editSpiceForm.addEventListener('submit',collectSpiceBlendData)
function collectSpiceBlendData(e){
    e.preventDefault()
    console.log(e)
    // e.target ------ .newTitle not showing up
    
}

const addIngredientForm = document.querySelector('#ingredient-form')
addIngredientForm.addEventListener('submit',collectIngredientData)
function collectIngredientData(e){
    e.preventDefault()
    console.log(e)
    // e.target ------ .ingredientName not showing up
}


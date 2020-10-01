var buttonForm = document.querySelector('form')
let modal = document.querySelector('.modal')

buttonForm.addEventListener('submit', function(event){
    event.preventDefault()
    alert('ok')
})



/*
var entityName = document.querySelector('#entityName')
var address = document.querySelector('#address')
var addressNumber = document.querySelector('#address2')
var state = document.querySelector('#uf')
var city = document.querySelector('#city')
var buttonForm = document.querySelector('form')
let modal = document.querySelector('.modal')

function cityEnabled(){
    city.removeAttribute('disabled')
}

state.addEventListener('change', cityEnabled)

function showModalConfirm(){
    modal.classList.remove('hide')
    setTimeout(function(){
        modal.classList.add('hide')
    }, 2750)
} 

const ItemsToCollect = document.querySelectorAll('.items-grid li')

for (let item of ItemsToCollect) {
    item.addEventListener('click', handleSelectedItem)
}

let collectedItems = document.querySelector('input[name=items]')
let selectedItems = []

function handleSelectedItem() {
    const itemLi = event.target
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    let alreadySelected = selectedItems.findIndex(function (item) {
        let itemsFound = item == itemId
        return itemsFound
    })

    if (alreadySelected >= 0) {
        let filteredItems = selectedItems.filter(function (item) {
            let itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems
}

buttonForm.addEventListener('submit', function(event){
    event.preventDefault()
    
    console.log(entityName.value)
    console.log(address.value)
    console.log(addressNumber.value)
    console.log(state.value)
    console.log(city.value)
    console.log(selectedItems)

    let body = {
        "ponto": entityName.value,
        "address": address.value,
        "address2": addressNumber.value,
        "state": state.value,
        "city": city.value, 
        'items' : selectedItems
    }

    //fetch('http://localhost:8000/posts', {
    fetch('https://api-ecoleta-jsonserver.herokuapp.com/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'    },
    body: JSON.stringify(body),
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log('Success: ', JSON.stringify(response))
    })
    .catch(error => console.error('Error:', error))

    showModalConfirm()
})
*/

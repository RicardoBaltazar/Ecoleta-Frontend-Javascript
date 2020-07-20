var entityName = document.querySelector('#entityName')
var address = document.querySelector('#address')
var addressNumber = document.querySelector('#address2')
//var state = document.querySelector('select[name=uf]')
var state = document.querySelector('#uf')
//var city = document.querySelector('select[name=city]')
var city = document.querySelector('#city')
var buttonForm = document.querySelector('form')

//talvez tenha que pegar o ID mesmo, e na página de search, chamar a api da localização novamente
//para tranformar o id no nome  do estado e cidade

function cityEnabled(){
    city.removeAttribute('disabled')
}

state.addEventListener('change', cityEnabled)


/*
let ufSelect = document.querySelector('select[name=uf]')
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(function (res) {
        return res.json()
    })
    .then(function (states) {

        for (const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            
        }


    })


function populateUfs() {
    let ufSelect = document.querySelector('select[name=uf]')
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then(function (res) {
            return res.json()
        })
        .then(function (states) {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUfs()


function getCities() {
    let citySelect = document.querySelector('select[name=city]')
    let stateInput = document.querySelector('input[name=state]')

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = ''
    citySelect.disabled = true

    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (cities) {

            for (city of cities) {
                citySelect.innerHTML += `<option value='${city.nome}'>${city.nome}</option>'`
            }
            citySelect.disabled = false
        })
}


*/



const ItemsToCollect = document.querySelectorAll('.items-grid li')

for (let item of ItemsToCollect) {
    item.addEventListener('click', handleSelectedItem)
}

let collectedItems = document.querySelector('input[name=items]')
let selectedItems = []

function handleSelectedItem() {
    const itemLi = event.target
    //adcionar ou remover uma clase
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id


    //verificar se existem itens selecionados. se sim
    //pegar os itens selecionados

    let alreadySelected = selectedItems.findIndex(function (item) {
        let itemsFound = item == itemId
        return itemsFound
    })


    //se já estiver seleiconado, tirar da seleção

    if (alreadySelected >= 0) {
        let filteredItems = selectedItems.filter(function (item) {
            let itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        //se não estiver selecionado, adicionar a seleção
        //adicionar a seleção
        selectedItems.push(itemId)

    }

    //atializar o campo escondido com os itens selecionados
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
        //"id": 3,
        "ponto": entityName.value,
        "address": address.value,
        "address2": addressNumber.value,
        "state": state.value,
        "city": city.value, 
        'items' : selectedItems
    }

    fetch('http://localhost:8000/posts', {
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

})

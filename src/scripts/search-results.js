const api = 'http://localhost:8000/posts'
var card = document.querySelector('#card')


var images = [
    image1 = './src//assets/pawel-czerwinski-RkIsyD_AVvc-unsplash.jpg',
    image2 = './src//assets/michael-jin-ET6_fDwZj2U-unsplash.jpg',
    image3 = './src//assets/javier-huedo-io3poUllunQ-unsplash.jpg'
]

console.log(images.length)

images.forEach()
var random = Math.floor(Math.random() * images.length);

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(api, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Success: ', JSON.stringify(data))

        var arrayData = data

        arrayData.forEach(function (element) {
            console.log(element)

            
            card.innerHTML +=
                "<img src=" + images[random] + " alt='imagem'>'" + "<br>"
                + "<h1>" + element.ponto + " </h1>" + "<br>"
                + '<h3>' + element.items + '</h3>' + "<br>"
                + '<p>' + element.state + ', ' + element.city + ', ' + ' <br> '
                + element.address + 'nº ' + element.address2 
            
        })

        /*
        var arrayData = data
    
        arrayData.forEach(function(element){
            console.log(element)
    
            res.innerHTML += "<li>" + "<span class='spanLiPoint'>" + element.ponto  +"</span>"+ "<br>" 
            + '<span class="spanItemsDonate">' + element.items + '</span>' +"<br>"       
    
           + '<span class="spanAddress">' + 'endereço ' + '</span>' +  '<br>' + 
           element.state + ' - ' +  element.city +"<br>"  
           + element.address + ', ' + 'nº '  + element.address2 + "<br>"  
            "</li>"     
        })
        */

    })
    .catch(error => console.error('Error:', error))


/*
var images = [
    a = '../src//assets/pawel-czerwinski-RkIsyD_AVvc-unsplash.jpg',
    b = '../src//assets/michael-jin-ET6_fDwZj2U-unsplash.jpg',
    c = '../src//assets/javier-huedo-io3poUllunQ-unsplash.jpg'
]

console.log(images.length)
var sorte = Math.floor(Math.random() * images.length);
console.log(sorte)
console.log(images[sorte])
//res.innerHTML = "<img src=" + images[sorte] + " alt='imagem'>'"

/*
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

fetch(api, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Success: ', JSON.stringify(data))

        var arrayData = data

        arrayData.forEach(function (element) {
            console.log(element)


        })

    })
    .catch(error => console.error('Error:', error))

    */  
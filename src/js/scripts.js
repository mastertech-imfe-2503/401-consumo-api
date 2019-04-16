const img = document.querySelector('img');

const receiveData = function (response) {
    return response.json();
}

fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET'
})
    .then(receiveData)
    .then(function (data) {
        console.log(data);

        img.src = data.message;
    });

const inputZipCode = document.querySelector('input');
const searchButton = document.querySelector('button');
const outputDiv = document.querySelector('div');

const handleSubmit = function () {
    const zipCode = inputZipCode.value;

    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            outputDiv.innerHTML = 
            `
                <p>${data.cep}</p>
                <p>${data.logradouro}</p>
                <p>${data.complemento}</p>
                <p>${data.bairro}</p>
                <p>${data.localidade}</p>
            `;
        });
};

searchButton.onclick = handleSubmit;
let promise = new Promise(function(resolve, reject) {
    if (soma === 4) {
    resolve('Deu certo');
}
else {
    reject('Deu errado');
}
});

promise
.then(function (data) {
    console.log(data);
})
.catch(function (error) {
    console.error(error);
});
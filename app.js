let apiKey = {
    key: '507b31ce-e315-46d0-8382-4fe802d4006a'
}

fetch('https://cors-anywhere.herokuapp.com/pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key).then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a requisição de status ' + response.status);
    return response.json();
}).then((api) => {
    console.log(api)
}).catch((error) => {
    console.log(error.message)
});
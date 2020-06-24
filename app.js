let apiKey = {
    key: '507b31ce-e315-46d0-8382-4fe802d4006a'
}

fetch('https://cors-anywhere.herokuapp.com/pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key).then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a requisição de status ' + response.status);
    return response.json();
}).then((api) => {
    var texto = "";
    for(let i = 0; i < 10; i++){
        texto = texto + 
        `
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src="./img/coin.png" alt="" class="circle responsive-img" width="150">
            </div>
            <div class="col s10">
              <span class="black-text">
                ${api.data[i].name}
              </span>
              <p>${api.data[i].symbol}</p>
            </div>
          </div>
        </div>
      </div>
            
        `;

        document.getElementById("cripto").innerHTML = texto;
    }
}).catch((error) => {
    console.log(error.message)
});
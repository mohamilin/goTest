fetch("https://5f51b1f85e98480016123cb6.mockapi.io/news-covid")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getData(data);
    })
    .catch((err) => {
        console.log("eror : " + err);
    });

function getData(data){
    for(let i = 10; i < data.length; i++ ){
        const div = document.createElement('div');
        div.className = 'col s12 m4';

        div.innerHTML = 
        `
            <div class="card indigo lighten-5">
            <div class="card-content white-text  card-api">
            <div class="card-image">
            <img src="../../assets/kuburan_antara1.jpg">
          </div> <br>
            <p class="black-text">${data[i].title}</p>
            </div>
            <div class="card-action center">
            <a class="blue-text darken-1" href="${data[i].url}">Klik The News</a>
            </div>
        </div>
        `;
        console.log(data.title);
    document.getElementById('list-news').appendChild(div);
    }
}

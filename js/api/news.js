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
    for(let i = 2; i < data.length; i++ ){
        const div = document.createElement('div');
        div.className = 'col s12 m4';

        div.innerHTML = 
        `
            <div class="card blue-grey darken-1">
            <div class="card-content white-text  card-api">
            <span class="card-title"> ${data[i].title} </span>
            <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action center">
            <a href="${data[i].url}">Klik The News</a>
            </div>
        </div>
        `;
        console.log(data.title);
    document.getElementById('list-news').appendChild(div);
    }
}

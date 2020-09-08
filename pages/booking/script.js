let rsName = JSON.parse(localStorage.getItem('hospitalData'))

let formBanner = document.getElementById('form-header');

console.log(formBanner)

formBanner.innerHTML=`Formulir antrian tes covid-19 di ${rsName}`;
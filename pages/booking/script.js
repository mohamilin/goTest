let rsName = JSON.parse(localStorage.getItem('hospitalData'))
console.log(rsName)
let formBanner = document.getElementById('form-header');

console.log(formBanner)

formBanner.innerHTML = `Formulir Antrian Tes Covid-19 <br> ${rsName}`;



function myTest() {
  let pcr = JSON.parse(localStorage.getItem('biayapcr'))
  let rapid = JSON.parse(localStorage.getItem('biayarapid'))
  console.log(pcr, rapid)
  const select = document.getElementById('test').value;
  if(select === 'biayarapid' ){
    document.getElementById('fee').innerHTML = `Rp : ${rapid}`;
  } else if(select === 'biayapcr') {
    document.getElementById('fee').innerHTML = `Rp : ${pcr}`;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Anda Belum Memilih Jenis Tes',
    })
  } 
}



const showProfileUser = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user.firstName);
    // console.log(user); 
    let response = await fetch(
      `https://5f51b1f85e98480016123cb6.mockapi.io/users/${user.id}`
    );

    let result = await response.json();
    console.log(result.firstName);
    console.log(result.gender);


    let show1 = document.getElementById("last_name");
    show1.value = `${result.lastName}`;

    let show2 = document.getElementById("first_name");
    show2.value = `${result.firstName}`;


    let showGender = document.getElementById("gender");
    showGender.value = `${result.gender}`;

    let show5 = document.getElementById("address");
    show5.value = `${result.alamat}`;

    const position = document.getElementById("hospital");
    const about = document.getElementById("about");
    about.innerHTML = `
      <a onClick="logout()" class="waves-effect waves-light grey lighten-3 black-text btn-small button-border modal-trigger"">LOGOUT</a>
      `;

    position.innerHTML = `${result.firstName} ${result.lastName}`;
    if (user !== null) {
      position.removeAttribute("href");
      position.setAttribute("href", "../../pages/dashboard/profile-user.html")
    }
  } catch (error) {
    console.log("erro");
  }
};
showProfileUser();



let user = JSON.parse(localStorage.getItem('user'))


function checkout() {
  if (user !== null) {
    Swal.fire({
      title: 'Checkout Success',
      text: 'Terima Kasih Telah Menggunakan Jasa Kami',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })

    setTimeout(function() {
      window.location.replace("../../index.html");
    }, 3000);
  }
}
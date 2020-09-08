let rsName = JSON.parse(localStorage.getItem('hospitalData'))

let formBanner = document.getElementById('form-header');

console.log(formBanner)

formBanner.innerHTML=`Formulir Antrian Tes Covid-19 <br> ${rsName}`;


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
  
    //   let show4 = document.getElementById("no_hp");
    //   show4.value = `: ${result.noHp}`;
  
      let show5 = document.getElementById("address");
      show5.value = `${result.alamat}`;
  
    //   let show6 = document.getElementById("avatar");
    //   show6.innerHTML = `
    //   <img name="avatar" id="avatar" src=" ${result.avatar}" alt="profile" srcset="">`;
  
    const position = document.getElementById("hospital");
    const about = document.getElementById("about");
    about.innerHTML = `
      <a onClick="logout()" class="waves-effect waves-light grey lighten-3 black-text btn-small button-border modal-trigger"">LOGOUT</a>
      `;

    position.innerHTML = `${result.firstName} ${result.lastName}`;
    if(user !== null) {
      position.removeAttribute("href");
      position.setAttribute("href", "../../pages/dashboard/profile-user.html")
    }
    } catch (error) {
      console.log("erro");
    }
  };
  showProfileUser();


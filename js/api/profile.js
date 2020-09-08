const showProfileUser = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user.firstName);
    // console.log(user); 
    let response = await fetch(
        `https://5f51b1f85e98480016123cb6.mockapi.io/users/${user.id}`
    );


    let result = await response.json();
    // console.log(result.firstName);

    let show1 = document.getElementById("last_name");
    show1.innerHTML = `: ${result.lastName}`;

    let show2 = document.getElementById("first_name");
    show2.innerHTML = `: ${result.firstName}`;

    let show3 = document.getElementById("email");
    show3.innerHTML = `: ${result.email}`;

    let showGender = document.getElementById("gender");
    showGender.innerHTML = `: ${result.gender}`;

    let show4 = document.getElementById("no_hp");
    show4.innerHTML = `: ${result.noHp}`;

    let show5 = document.getElementById("address");
    show5.innerHTML = `: ${result.alamat}`;

    let show6 = document.getElementById("avatar");
    show6.innerHTML = `
    <img name="avatar" id="avatar" src=" ${result.avatar}" alt="profile" srcset="">`;

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


function logout() {
  console.log("tes logout");
  localStorage.clear();
  window.location.replace("../../index.html");
}
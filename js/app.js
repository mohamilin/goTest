let content = document.querySelectorAll("#body");
const showProfile = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user.firstName);
    // console.log(user); 
    let response = await fetch(
      `https://5f51b1f85e98480016123cb6.mockapi.io/users/${user.id}`
    );

    let result = await response.json();
    console.log(`${result.firstName} ${result.lastName}`);

    const position = document.getElementById("login-nav");
    position.innerHTML = `${result.firstName} ${result.lastName}`;

    const about = document.getElementById("about");
    about.innerHTML = `
      <a onClick="logout()" class="waves-effect waves-light grey lighten-3 black-text btn-small button-border modal-trigger"">LOGOUT</a>
      `;

    const position1 = document.getElementById("login-nav-mob");
    position1.innerHTML = `${result.firstName} ${result.lastName}`;

    const about1 = document.getElementById("about-mob");
    about1.innerHTML = `
      <a onClick="logout()" class="waves-effect waves-light grey lighten-3 black-text btn-small button-border modal-trigger"">LOGOUT</a>
      `;


    
    if (user !== null) {
      position.removeAttribute("href");
      position.setAttribute("href", "./pages/dashboard/profile-user.html")
      position1.removeAttribute("href");
      position1.setAttribute("href", "./pages/dashboard/profile-user.html")
    }


  } catch (error) {
    console.log("erro");
  }

};
showProfile();

function logout() {
  console.log("tes logout");
  localStorage.clear();
  window.location.replace("index.html");
}
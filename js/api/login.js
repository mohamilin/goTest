const login = async () => {
  let inputEmail = document.getElementById("email").value;
  let inputPassw = document.getElementById("password").value;

  fetch("https://5f51b1f85e98480016123cb6.mockapi.io/users")
    .then((response) => response.json())
    .then((result) => {
      let user = result.filter((item) => item.email === inputEmail);
      if (user.length > 0) {
        if (user[0].password === inputPassw) {
          localStorage.setItem("user", JSON.stringify(user[0]));
          window.location.replace("../../index.html");
        } else {
          alert("Password Tidak Sesuai");
        }
        // alert("sipp");
      } else {
        alert("Email Tidak Sesuai");
      }
    });
};

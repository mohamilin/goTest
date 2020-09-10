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
          // alert('')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Anda Berhasil',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(function() {
            window.location.replace("../../index.html");
          }, 2000);
        } else {
          // alert("Password Tidak Sesuai");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password Anda Salah',
            // footer: '<a href>Why do I have this issue?</a>'
          })
        }
        // alert("sipp");
      } else {
        // alert("Email Tidak Sesuai");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email Anda Salah',
          // footer: '<a href>Why do I have this issue?</a>'
        })
      }
    });
};

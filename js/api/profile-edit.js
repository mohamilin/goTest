const showUpdateUser = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user.firstName);
      console.log(user); 
      let response = await fetch(
          `https://5f51b1f85e98480016123cb6.mockapi.io/users/${user.id}`
      );
  
      let result = await response.json();
      // console.log(result.firstName);
  
      const position = document.getElementById("login-nav");
      const about = document.getElementById("about");
      position.innerHTML = `${result.firstName} ${result.lastName}`;
      about.innerHTML = `
        <a onClick="logout()" class="waves-effect waves-light grey lighten-3 black-text btn-small button-border modal-trigger"">LOGOUT</a>
        `;

        // untuk mobile
        const positionMob = document.getElementById("login-nav-mob");
        const aboutMob = document.getElementById("about-mob");
        positionMob.innerHTML = `${result.firstName} ${result.lastName}`;
        aboutMob.innerHTML = `
          <a onClick="logout()" class="waves-effect waves-light grey lighten-3 black-text btn-small button-border modal-trigger"">LOGOUT</a>
          `;
        
      
      if(user !== null) {
        position.removeAttribute("href");
        position.setAttribute("href", "./profile-user.html")
        positionMob.removeAttribute("href");
        positionMob.setAttribute("href", "./profile-user.html")
      }
  
    } catch (error) {
      console.log("erro");
    }
  };
  showUpdateUser();
  
  
  function logout() {
    // console.log("tes logout");
    localStorage.clear();
    window.location.replace("../../index.html");
  }
  
  async function update() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("test");
    let link = `https://5f51b1f85e98480016123cb6.mockapi.io/users/${user.id}`;
    let response = await fetch(link);
    let data = await response.json();
    console.log("hasil", data);
    let editFirstName = document.getElementById('first_name').value;
    let editLastName = document.getElementById('last_name').value;
    let editEmail = document.getElementById('email').value;
    let editPassword = document.getElementById('password').value;
    let editPhone = document.getElementById('no_hp').value;
    let editGender = document.getElementById('gender').value;
    let editAddress = document.getElementById('alamat').value;

    let editData = {
        ...data,
        firstName : editFirstName,
        lastName : editLastName,
        email : editEmail,
        password : editPassword,
        gender: editGender,
        noHp : editPhone,
        alamat : editAddress
    };

    localStorage.setItem("user", JSON.stringify(editData))
    let options = {
        method : "PUT",
        headers :  {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(editData)
    };

    fetch(link, options)
    .then((response) => response.json())
    .then(()=> {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Update Success',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(function() {
        window.location.replace("./profile-user.html")
      }, 2000);
        // alert ("Terima Kasih, Data Anda sudah Terupdate");

    })
  }
  
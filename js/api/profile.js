const showProfile = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.firstName);
    console.log(user);
    // let options = {
    //     method: "GET",
    //     headers: {
    //         "Content-Type" : "application/json",
    //     },
    //     body: JSON.stringify(),
    // }

    let response = await fetch(
        `https://5f51b1f85e98480016123cb6.mockapi.io/users/${user.id}`
    );


    let result = await response.json();
    console.log(result.firstName);

    let show1 = document.getElementById("last_name");
    show1.innerHTML = `: ${result.lastName}`;

    let show2 = document.getElementById("first_name");
    show2.innerHTML = `: ${result.firstName}`;

    let show3 = document.getElementById("email");
    show3.innerHTML = `: ${result.email}`;


    let show4 = document.getElementById("no_hp");
    show4.innerHTML = `: ${result.noHp}`;

    let show5 = document.getElementById("address");
    show5.innerHTML = `: ${result.alamat}`;

    let show6 = document.getElementById("avatar");
    show6.innerHTML = `
    <img name="avatar" id="avatar" src=" ${result.avatar}" alt="profile" srcset="">

    `;


    console.log(show);
    // result.forEach((element) => {
    //     console.log(element.firstName);
    // });
  

  } catch (error) {
    console.log("erro");
  }
};
showProfile();

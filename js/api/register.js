const register = async () => {
    // console.log("register");
    let inputFirtsName = document.getElementById("first_name").value;
    let inputLastName = document.getElementById("last_name").value;
    let inputEmail = document.getElementById("email").value;
    let inputPassw = document.getElementById("password").value;
    let inputPhone = document.getElementById("no_hp").value;
    let inputAddress = document.getElementById("alamat").value;

    console.log("test", inputFirtsName, inputLastName, inputEmail, inputPassw, inputPhone, inputAddress);

    let userData = {
        firstName: inputFirtsName,
        lastName: inputLastName,
        email: inputEmail,
        password: inputPassw,
        noHp: inputPhone,
        alamat: inputAddress
    };

    // ngePost DATA
    // let options = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "aplication/json",
    //     },
    //     body: JSON.stringify(userData)
    // };

    // let response = await fetch(
    //     "https://5f51b1f85e98480016123cb6.mockapi.io/users", 
    //     options
    // );
    // let result = await response.json();
    // console.log(result)



    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    };
    let response = await fetch(
        "https://5f51b1f85e98480016123cb6.mockapi.io/users",
        options
    );
    let result = await response.json();
    console.log(result);
};


// buat function async await register
// const register = async () => {
//     console.log("register");

//  
//   };
// }
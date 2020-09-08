const register = async () => {
    // console.log("register");
    let inputFirtsName = document.getElementById("first_name").value;
    let inputLastName = document.getElementById("last_name").value;
    let inputEmail = document.getElementById("email").value;
    let inputPassw = document.getElementById("password").value;
    let inputPhone = document.getElementById("no_hp").value;
    let inputAddress = document.getElementById("alamat").value;

    // console.log("test");

    let userData = {
        first_name: inputFirtsName,
        last_name: inputLastName,
        email: inputEmail,
        password: inputPassw,
        no_hp: inputPhone,
        alamat: inputAddress,
    };

    // ngePost DATA
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify(userData)
    };

    let response = await fetch(
        "https://5f51b1f85e98480016123cb6.mockapi.io/users", options
    );
    let result = await response.json();
    console.log(result)

};
const form = document.forms['info']

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const firstName = form.querySelector('#firstname').value;
    const lastName = form.querySelector('#lastname').value;
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;

    console.log(firstName)

    // const obj = {
    //     firstName: "Joy",
    //     lastName: "Joseph",
    //     email: "Joy8285454@gmail.com",
    //     password: "Joy828545",
    // }
    const obj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    console.log(obj)


    const sendData = async (data) => {
        console.log(obj)
        try {
            const response = await fetch("http://localhost:3000/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            console.log("in promise", response)

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    sendData(obj);

});
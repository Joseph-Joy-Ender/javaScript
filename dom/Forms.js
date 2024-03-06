const form = document.forms['info']

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const firstName = form.querySelector('#firstname').value;
    const lastName = form.querySelector('#lastname').value;
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;



    const obj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }



    const sendData = async (data) => {
        try {
            const response = await fetch("http://localhost:3000/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });


            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    sendData(obj);

});
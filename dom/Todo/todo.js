const userObj = {
    username: "Maria",
    email: "maria@mail.com"
}

localStorage.setItem('user', JSON.stringify(userObj))


const storedUserData = localStorage.getItem('user')

if (storedUserData) {
    const userData = JSON.parse(storedUserData)
    // You can use userData here...
} else {
    console.log('User data not found in local storage')
}

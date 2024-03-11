const userName = document.querySelector('.username')
const userAge = document.querySelector('.userAge')

const saveName = document.querySelector('.saveNameBtn')
const saveAge = document.querySelector('.saveAgeBtn')

saveName.addEventListener('click', () =>{
    const username = document.querySelector('.name').value
    userName.textContent = username
    localStorage.setItem("name", username)
})

function displayUsername() {
    const nameFromLocalStorage = localStorage.getItem("name")

    if (nameFromLocalStorage){
        userName.textContent = nameFromLocalStorage
    }else userName.textContent = "No name data in local storage"
}

// displayUsername()

saveAge.addEventListener('click', ()=>{
    const age = document.querySelector('.age').value
    userAge.textContent = age
    sessionStorage.setItem("age", age)
})

function displayUserAge() {
    const ageFromStorage = sessionStorage.getItem("age")
    if (ageFromStorage){
        userAge.textContent = ageFromStorage
    }else userAge.textContent = "No age data in local storage"

}

// displayUserAge()
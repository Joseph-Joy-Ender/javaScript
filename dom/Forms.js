const form = document.forms['info']

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const firstName = form.querySelector('#firstname');
    const lastName = form.querySelector('#lastname');
    const age = form.querySelector('#age');

    const obj = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    console.log(obj)
})
// let banner = document.getElementById('page-banner');
// let page = document.getElementsByClassName('title')
// let ul = document.getElementsByTagName('ul')
//
// let query = document.querySelector('#book-list')
//
// let allQuery = document.querySelectorAll('#book-list li .name')
//
// Array.from(allQuery).forEach((element) => console.log(element.textContent += ('(book title)')))

// console.log(query);

// console.log(ul);


// Array.from(page).forEach((element) => console.log(element.innerHTML));


// for (let index = 0; index < page.length; index++) {
//     const element = page[index];
//     console.log(element);
//
// }

// console.log(page[0]);

// let del = document.getElementsByClassName('delete')
// del.addEventListener('delete', ()=>{
//     document.delete(del)
// })

let books = document.querySelector('#book-list ul');

books.addEventListener('click', (e)=>{
    console.log(e.target);
    if (e.target.className = 'delete'){
        const li = e.target.parentElement
        books.removeChild(li);
    }
})

const addForms = document.forms['add-book']
addForms.addEventListener('submit', (e) =>{
    console.log(addForms);
    e.preventDefault()
    const value = addForms.querySelector('input[type="text"]').value

    const li = document.createElement("li")
    const addBook = document.createElement('span')
    const deleteBn = document.createElement('span')

    addBook.textContent = value;
    deleteBn.textContent = "delete";

    li.appendChild(addBook);
    li.appendChild(deleteBn);

    books.appendChild(li);

    addBook.classList.add('name')
    deleteBn.classList.add('delete')


    // addBook.className = `name`
    // deleteBn.className = 'delete'

})

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) =>{
    const value = e.target.value.toLowerCase();
    const titles = books.getElementsByTagName('li');

    Array.from(titles).forEach((title) => {
        const text = title.firstElementChild.textContent;

        if (text.toLowerCase().includes(value)){
            title.style.display = "block"
        }else {
            title.style.display = "none"
        }
    })
})
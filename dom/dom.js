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

let del = document.getElementsByClassName('delete')
del.addEventListener('delete', ()=>{
    document.delete(del)
})
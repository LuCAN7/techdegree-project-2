/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const ul = document.getElementsByTagName('ul');
const list = document.getElementsByClassName('student-item');
const itemsPerPage = 10; 
const numPages = Math.ceil(list.length / itemsPerPage);
let page = 1; // Hard code page number which will be dynamically changed later


const showPage = (list, page) => {
   const lists = Array.from(list);
   const start = (page * itemsPerPage) - itemsPerPage;
   const end = page * itemsPerPage - 1;

   for (let i = 0; i < list.length; i++) { 
      lists[i].style.display = 'none';
      if (lists.indexOf(lists[i]) >= start && lists.indexOf(lists[i]) <= end) {
         lists[i].style.display = 'block';
      } 
   }

}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
 ***/

const appendPageLinks = (list) => {
   const paginationDiv = document.createElement('div');
   const paginationLinks = document.createElement('ul');
   const pageDiv = document.querySelector('.page');
   paginationDiv.className = 'pagination';
   pageDiv.appendChild(paginationDiv);
   paginationDiv.appendChild(paginationLinks);
   
   for (let i = 1; i < numPages + 1; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
    
      paginationLinks.appendChild(li);
      li.appendChild(a);
      a.setAttribute('href', '#')
      a.textContent = i;
      
      paginationLinks.firstElementChild.firstElementChild.className = 'active'
     
      a.addEventListener('click', (e) => {
        page = parseInt(e.target.textContent);
        showPage(list, page);
        let a = document.querySelectorAll('a');
        console.log(a);
        for (let i = 0; i < a.length; i++) {
           a[i].className = ''; 
         }
        e.target.className = 'active';
      });
      
   }
   
}

showPage(list, page);
appendPageLinks(list);

/*
These are extra credit
**********************
*/
const pageHeader = document.querySelector('.page-header');
const div = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const searchDiv = document.querySelector('#student-search');
const searchBar = document.querySelector('input');
const searchBtn = document.querySelector('button');

input.setAttribute('placeholder', 'Search for students...')
button.textContent = 'Search';

pageHeader.appendChild(div);
div.appendChild(input);
div.appendChild(button);


searchBtn.addEventListener('clicked', () => {
   console.log(searchBar.value);

});


// const search = () => {


// }




// Remember to delete the comments that came with this file, and replace them with your own code comments.
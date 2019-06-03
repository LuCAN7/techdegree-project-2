/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const ul = document.getElementsByTagName('ul');
const list = document.getElementsByClassName('student-item');
const itemsPerPage = 10; //Math.round(list.length / numPages);
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

showPage(list, page);


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
        
        for (let i = 0; i < a.length; i++) {
           a[i].className = ''; 
         }
         e.target.className = 'active';
      });
      
   }
   
}

appendPageLinks(list);
// Remember to delete the comments that came with this file, and replace them with your own code comments.
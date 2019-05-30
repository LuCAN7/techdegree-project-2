/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const ul = document.getElementsByTagName('ul');
const list = document.getElementsByClassName('student-item');
let page = 1; // Hard code page number which will be dynamically changed later
const numPages = Math.ceil(list.length / 10);
const itemsPerPage = 10; //Math.round(list.length / numPages);

const showPage = (list, page) => {
  
   const lists = Array.from(list);
   const start = (page * itemsPerPage) - itemsPerPage;
   const end = page * itemsPerPage - 1;

   for (let i = 0; i < list.length; i++) {
     
      lists[i].style.display = 'none';
      if (lists.indexOf(lists[i]) >= start && lists.indexOf(lists[i]) <= end) {
         lists[i].style.display = 'block';
         // console.log('This is index: ' + lists.indexOf(lists[i]) + ' of ' + lists[i]);
         console.log(lists[i]);
      }
     
   }

}

showPage(list, page);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// const appendPageLinks = () => {};


// Remember to delete the comments that came with this file, and replace them with your own code comments.
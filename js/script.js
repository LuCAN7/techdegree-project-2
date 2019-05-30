/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// let indx = listArray.indexOf(4)
// console.log(indx);
/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const ul = document.getElementsByTagName('ul');
var list = document.getElementsByClassName('student-item');
let page = 1; // Hard code page number which will be dynamically changed later
const numPages = Math.ceil(list.length / 10);
const itemsPerPage = 10; //Math.round(list.length / numPages);

console.log(numPages);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
  
   let lists = Array.from(list);
   let start = (page * itemsPerPage) - itemsPerPage;
   let end = page * itemsPerPage;

   for (let i = 0; i < list.length; i++) {
     
      lists[i].style.display = 'none';
      if (lists.indexOf(lists[i]) >= start && lists.indexOf(lists[i]) <= end) {
         lists[i].style.display = 'block';
         console.log(lists[i]);
      }
         // if (i < itemsPerPage){
         //    console.log(list[i]); 
         //    list[i].style.display = 'block';

         // }
      
   }
}

 showPage(list, page);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// const appendPageLinks = () => {};


// Remember to delete the comments that came with this file, and replace them with your own code comments.
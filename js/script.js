/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const ul = document.getElementsByTagName("ul");
const list = document.getElementsByClassName("student-item");
const itemsPerPage = 10;
const numPages = Math.ceil(list.length / itemsPerPage);
let page = 1; // Hard code page number which will be dynamically changed later
let lists = Array.from(list); //
const showPage = (list, page) => {
   let lists = Array.from(list); //
   const start = page * itemsPerPage - itemsPerPage;
   const end = page * itemsPerPage - 1;

   for (let i = 0; i < list.length; i++) {
      lists[i].style.display = "none";
      if (lists.indexOf(lists[i]) >= start && lists.indexOf(lists[i]) <= end) {
         lists[i].style.display = "block";
      }
   }
};

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
 ***/
const appendPageLinks = list => {
const paginationDiv = document.createElement("div");
const paginationLinks = document.createElement("ul");
const pageDiv = document.querySelector(".page");
paginationDiv.className = "pagination";
pageDiv.appendChild(paginationDiv);
paginationDiv.appendChild(paginationLinks);

for (let i = 1; i < numPages + 1; i++) {
   const li = document.createElement("li");
   const a = document.createElement("a");

   paginationLinks.appendChild(li);
   li.appendChild(a);
   a.setAttribute("href", "#");
   a.textContent = i;

   paginationLinks.firstElementChild.firstElementChild.className = "active";

   a.addEventListener("click", (e) => {
      page = parseInt(e.target.textContent);
      showPage(list, page);
      let a = document.querySelectorAll("a");
      console.log(a);
      for (let i = 0; i < a.length; i++) {
         a[i].className = "";
      }
      e.target.className = "active";
   });
   }
   return paginationDiv;
};

showPage(list, page);
appendPageLinks(list);

/*
These are extra credit
**********************
*/
const pageHeader = document.querySelector(".page-header");
const div = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");
// const searchDiv = document.querySelector("#student-search");
// const searchBar = document.querySelector("input");
const students = document.querySelectorAll(".student-details");
// let searchBtn = document.querySelector("button");
input.setAttribute("placeholder", "Search for students...");
button.textContent = "Search";

pageHeader.appendChild(div);
div.appendChild(input);
div.appendChild(button);


// traverse to element with name value
// const arrayOfStudents = [];

// function filterStudents (e) {
//    const text = e.target.value.toLowerCase();
//    document.querySelectorAll('.student-details').forEach( function(student){
//     const item = student.firsChild.textContent;
//     if(item.toLowercase().indexOf(text) != -1){
//     task.style.display = 'block';  
//     } else { 
//     task.style.display = 'none';      
//     }
//    });
//  }
//  filterStudents();


button.addEventListener('click', (e) => {
   let text = input.value.toLowerCase();
   students.forEach(function(student) {
      let name = student.firstElementChild.nextElementSibling.textContent;
      // arrayOfStudents.push(name);
      
      // console.log(arrayOfStudents.includes(text));

      let item = paginationDiv.firstElementChild.children;
      
      console.log(item);
      if(name.indexOf(text) != -1){
      //arrayOfStudents.indexOf(text) != -1 
         paginationLinks.style.display = "block";   
      } else {
         student.style.display = "none";
      }
         
         
   });

});

// input.addEventListener('keyup', (e) => {
//    const text = e.target.value.toLowerCase();
//    console.log(text);

// });

// const search = (e) => {
// }

// search();

// Remember to delete the comments that came with this file, and replace them with your own code comments.

/****************************************************************
// filter search //
function () {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('?...?').forEach( function('?student-item?'){
   const item = ?student-item?.firsChild.textContent;
   if(item.toLowercase().indexOf(text) != -1){
	task.style.display = 'block';  
   } else { 
	task.style.display = 'none';      
   }
  });
}
*****************************************************************
When the "Search" button is clicked, the list is filtered by 
student name for those that include the search value. For example, 
if the name Phillip is typed into the box, list all items with a name 
that includes Phillip. If the letter S is typed in, all items with an S 
in the name will show.

Pro Tip: To improve the functionality and add to the user experience, 
consider adding a keyup event listener to the search input so that the 
list filters in real time as the user types. This would be in addition 
to making the search button clickable since pasting text into the search 
bar might not trigger the keyup event.

-----------------------------------------------------------------------


document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'accordion-link' ) ) {
        // Do something...
    }
}, false);

*/

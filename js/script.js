/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const ul = document.getElementsByTagName("ul");
   let list = Array.from(document.getElementsByClassName("student-item"));
   const itemsPerPage = 10;
   const numPages = Math.ceil(list.length / itemsPerPage);
   let page = 1; // Hard code first page will be dynamically changed

   const showPage = (list, page) => {
      // Setup number of items per page start and end index
      const start = page * itemsPerPage - itemsPerPage;
      const end = page * itemsPerPage - 1;
      // Loop through student list items and display the corresponding list items
      for (let i = 0; i < list.length; i++) {
         // Hides and diplay 10 Students per page
         list[i].style.display = "none";
         if (list.indexOf(list[i]) >= start && list.indexOf(list[i]) <= end) {
            list[i].style.display = "block";
         } 
      }
};
showPage(list, page);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
 ***/
const appendPageLinks = (list) => {
   const paginationDiv = document.createElement("div");
   const paginationLinks = document.createElement("ul");
   const pageDiv = document.querySelector(".page");
   paginationDiv.className = "pagination";
   pageDiv.appendChild(paginationDiv);
   paginationDiv.appendChild(paginationLinks);
   // Loop through elements to create
   for (let i = 1; i < numPages + 1; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      // Create and append elements
      paginationLinks.appendChild(li);
      li.appendChild(a);
      a.setAttribute("href", "#");
      a.textContent = i;
      // Set first page link to have 'active' class
      paginationLinks.firstElementChild.firstElementChild.className = "active";
      // Dynamically change the page links with eventListner
      a.addEventListener("click", (e) => {
         page = parseInt(e.target.textContent);
         showPage(list, page);
         let a = document.querySelectorAll("a");
         // Loop through page links remove all class then add 'active' to e.target
         for (let i = 0; i < a.length; i++) {
            a[i].className = "";
         }
         e.target.className = "active";
      });
   }
};

appendPageLinks(list);

/*
EXTRA CREDIT
************
I felt i was working on this too long (14 days) for the whole project
and need to just complete.
*/
const pageHeader = document.querySelector(".page-header");
const div = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");
const students = document.querySelectorAll(".student-details");
// Create and append elements
div.className = 'student-search';
input.setAttribute("placeholder", "Search for students...");
button.textContent = "Search";
pageHeader.appendChild(div);
div.appendChild(input);
div.appendChild(button);

const search = () => {
   let text = input.value.toLowerCase();
   // Loop through Student names and filter by user input
   students.forEach(function(student) {
      let name = student.firstElementChild.nextElementSibling.textContent;
      let item = student.parentElement;
      // Check if text entered has an (indexOf) the name of students array 
      if(name.indexOf(text) != -1){
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
   });
   
};

button.addEventListener('click', search );
input.addEventListener('keyup', search );

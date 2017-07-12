// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

// ---------- A failed attempt at Font Awesome ----------
// let head = document.getElementsByTagName("head");
//
// let link = document.createElement("link");
//
// link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
//
// head.appendChild(link);
// ---------------------------------

let fields = document.getElementById("fields");

// 8 Form Fields - inputs, select, and textarea
let input = document.createElement("input");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let select = document.createElement("select");
let textarea = document.createElement("textarea");
let input6 = document.createElement("input");
let input7 = document.createElement("input");

// Input Elements
let type = document.createElement("type");
let label = document.createElement("label");
let id = document.createElement("id");
let icon = document.createElement("icon");

// Select Elements
let option0 = document.createElement("option");
let option = document.createElement("option");
let option1 = document.createElement("option");
let option2 = document.createElement("option");
let option3 = document.createElement("option");
let option4 = document.createElement("option");


// First Name
input.setAttribute("type", formData[0].type);
input.setAttribute("id", formData[0].id);
input.setAttribute("placeholder", formData[0].label);
input.setAttribute("icon", formData[0].icon);
input.setAttribute("options", formData[0].options);
input.setAttribute("placeholder", formData[0].label);

fields.appendChild(input);

// Last Name
input1.setAttribute("type", formData[1].type);
input1.setAttribute("id", formData[1].id);
input1.setAttribute("placeholder", formData[1].label);
input1.setAttribute("icon", formData[1].icon);
input1.setAttribute("options", formData[1].options);
input1.setAttribute("placeholder", formData[1].label);

fields.appendChild(input1);

// Email Address
input2.setAttribute("type", formData[2].type);
input2.setAttribute("id", formData[2].id);
input2.setAttribute("placeholder", formData[2].label);
input2.setAttribute("icon", formData[2].icon);
input2.setAttribute("options", formData[2].options);
input2.setAttribute("placeholder", formData[2].label);

fields.appendChild(input2);

// Current Website URL
input3.setAttribute("type", formData[3].type);
input3.setAttribute("id", formData[3].id);
input3.setAttribute("placeholder", formData[3].label);
input3.setAttribute("icon", formData[3].icon);
input3.setAttribute("options", formData[3].options);
input3.setAttribute("placeholder", formData[3].label);

fields.appendChild(input3);

// Select Language
select.setAttribute("type", formData[4].type);
select.setAttribute("id", formData[4].id);
select.setAttribute("placeholder", formData[4].label);
select.setAttribute("icon", formData[4].icon);
select.setAttribute("options", formData[4].options);
select.setAttribute("label", formData[4].label);

// Language Options
// option0.setAttribute("disabled selected value", " ");
option0.setAttribute("label", " ");
option.setAttribute("label", formData[4].options[0].label);
option.setAttribute("value", formData[4].options[0].value);
option1.setAttribute("label", formData[4].options[1].label);
option1.setAttribute("value", formData[4].options[1].value);
option2.setAttribute("label", formData[4].options[2].label);
option2.setAttribute("value", formData[4].options[2].value);
option3.setAttribute("label", formData[4].options[3].label);
option3.setAttribute("value", formData[4].options[3].value);
option4.setAttribute("label", formData[4].options[4].label);
option4.setAttribute("value", formData[4].options[4].value);

select.appendChild(option0);
select.appendChild(option);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
fields.appendChild(select);

// Your Comment
textarea.setAttribute("type", formData[5].type);
textarea.setAttribute("id", formData[5].id);
textarea.setAttribute("placeholder", formData[5].label);
textarea.setAttribute("icon", formData[5].icon);
textarea.setAttribute("options", formData[5].options);
textarea.setAttribute("placeholder", formData[5].label);

fields.appendChild(textarea);

// Mobile Number
input6.setAttribute("type", formData[6].type);
input6.setAttribute("id", formData[6].id);
input6.setAttribute("placeholder", formData[6].label);
input6.setAttribute("icon", formData[6].icon);
input6.setAttribute("options", formData[6].options);
input6.setAttribute("placeholder", formData[6].label);

fields.appendChild(input6);

// Home Number
input7.setAttribute("type", formData[7].type);
input7.setAttribute("id", formData[7].id);
input7.setAttribute("placeholder", formData[7].label);
input7.setAttribute("icon", formData[7].icon);
input7.setAttribute("options", formData[7].options);
input7.setAttribute("placeholder", formData[7].label);

fields.appendChild(input7);

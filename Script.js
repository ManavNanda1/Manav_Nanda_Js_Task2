// Jay Shree Ram
//welcome alert
Swal.fire({
  title: "Hello And Welcome to Second Task Of Javascript",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});

var table = document.getElementById("Table");

// Add function Code Below
let abc = document.querySelectorAll(".index-no");
for (let i = 0; i < abc.length; i++) {
  abc[i].innerHTML = i + 1;
}
const AddBox = () => {
  let T = document.getElementById("Table");
  let row = T.insertRow(-1);
  let Cell1 = row.insertCell(0);
  let Cell2 = row.insertCell(1);
  let Cell3 = row.insertCell(2);
  let Cell4 = row.insertCell(3);
  let Cell5 = row.insertCell(4);
  let Cell6 = row.insertCell(5);

  Cell1.classList.add("index-no");
  Cell2.innerHTML = `<td><input type="text" placeholder="Enter Your Name" oninput="validateInput(event)"class="name-val"></td>`;
  Cell3.innerHTML = `<td><input type="text" placeholder="Subject" oninput="validateInput(event)" class="subject-val"></td>`;
  Cell4.innerHTML = `<td><input type="number" placeholder="Marks" onchange="numvalid(this)"class="mark-val"></td>`;
  Cell5.innerHTML = `<td><button class="btn btn-primary pass-btn">Pass</button> <button class="btn btn-danger fail-btn">Fail</button></td>`;
  Cell6.innerHTML = `<td><button onclick = "removeBox(this)" class="rem first">Remove</button></td>`;
  let abc = document.querySelectorAll(".index-no");
  for (let i = 0; i < abc.length; i++) {
    abc[i].innerHTML = i + 1;
  }
};

var new_val = 1;

// Remove function code below
const  removeBox = (Discard) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "You Really Want To Delete This Row?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        let i = Discard.parentNode.parentNode.rowIndex;
        document.getElementById("Table").deleteRow(i);
        let abc = document.querySelectorAll(".index-no");
        for (let i = 0; i < abc.length; i++) {
          abc[i].innerHTML = i + 1;
        }
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your Row is Not Deleted :)",
          "error"
          );
          
        }
    });
};

// saving of data code below
const createNewTable = () => {
  Swal.fire({
    title: "Your Data Has Been Saved Succesfully",
    width: 600,
    padding: "3em",
    color: "#716add",
    backdrop: `
      rgba(0,0,123,0.4)
      left top
      no-repeat
    `,
  });

  let name_val = document.querySelectorAll(".name-val");
  let subject_val = document.querySelectorAll(".subject-val");
  let mark_val = document.querySelectorAll(".mark-val");

  let table = document.getElementById("SavedTable");
  table.innerHTML = "";

  let row1 = table.insertRow(0);
  let Newcell = row1.insertCell(0);
  let Newcell1 = row1.insertCell(1);
  let Newcell2 = row1.insertCell(2);
  let Newcell3 = row1.insertCell(3);
  Newcell.innerHTML = `<th>Id</th>`;
  Newcell1.innerHTML = `<th>Name</th>`;
  Newcell2.innerHTML = `<th>Subject</th>`;
  Newcell3.innerHTML = `<th>Marks</th>`;

  for (let i = 0; i < name_val.length; i++) {
    let row = table.insertRow(-1);
    let Cell1 = row.insertCell(0);
    let Cell2 = row.insertCell(1);
    let Cell3 = row.insertCell(2);
    let Cell4 = row.insertCell(3);
    if (mark_val[i].value >= 33) {
      Cell1.parentElement.classList.add("pass-col");
    }
    Cell1.innerHTML = `<tr><td>${new_val}</td>`;
    Cell2.innerHTML = `<td>${name_val[i].value}</td>`;
    Cell3.innerHTML = `<td>${subject_val[i].value}</td>`;
    Cell4.innerHTML = `<td> ${mark_val[i].value}</td> </tr>`;
    if (mark_val[i].value <= 33) {
      Cell1.parentElement.classList.add("tab-col");
    }
    new_val++;
  }
  new_val = 1;

  let sort = document.getElementById("sort");
  sort.style.display = "block";
};

//   form validation code below
function validateInput(event) {
  let inputValue = event.target.value;
  if (/\d/.test(inputValue)) {
    event.target.value = inputValue.substring(0, inputValue.length - 1);
  }
}

function numvalid(num) {
  let nam = parseInt(num.value);
  if (nam < 0 || nam > 100) {
    Swal.fire("You Cannot add value less than 0 or greater than 100");
    num.value = "";
  }
}

//searching of values code below
const SearchFunc = () => {
  // Declare variables
  let MyInp = document.getElementById("myInput").value.toUpperCase();
  let NewTab = document.getElementById("SavedTable");
  let Tr = NewTab.getElementsByTagName("tr");

  for (let i = 1; i < Tr.length; i++) {
    let td = Tr[i].getElementsByTagName("td")[1];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;
      if (textvalue.toUpperCase().indexOf(MyInp) > -1) {
        Tr[i].style.display = "";
      } else {
        Tr[i].style.display = "none";
      }
    }
  }
};

// sort button code below
function sortTable() {
  setTimeout(function(){
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("SavedTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
},1000)

  // sweet alert code below
  let timerInterval;
  Swal.fire({
    title: "Your Table Will be Sorted In a Second!",
    html: "I will close in <b></b> milliseconds.",
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

function sortTableSub() {
  setTimeout(function(){
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("SavedTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[2];
      y = rows[i + 1].getElementsByTagName("td")[2];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
},1000)

let timerInterval;
Swal.fire({
  title: "Your Table Will be Sorted By Subject In a Second!",
  html: "I will close in <b></b> milliseconds.",
  timer: 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const b = Swal.getHtmlContainer().querySelector("b");
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft();
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  },
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
}




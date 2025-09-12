interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 21,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];


// Create table
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";
table.style.border = "1px solid black";

// Create table header
const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
nameHeader.style.border = "1px solid black";
nameHeader.style.padding = "4px";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "4px";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Create table rows dynamically
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  nameCell.style.border = "1px solid black";
  nameCell.style.padding = "4px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "4px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to document body
document.body.appendChild(table);

import { students } from "../../data/students.js";

const loadStudents = () => {
  let strStudents = "";

  students.forEach((student, index) => {
    strStudents += `

    <tr>
    <th scope="row">${index + 1}</th>
      <td>${student.name}</td>
      <td>${student.point}</td>
      <td><button class="btn btn-danger btn-delete">Del</button></td>
      </tr>`;
  });
  document.querySelector("#tblStudents tbody").innerHTML = strStudents;
};
const setStudentBg = () => {
  const rows = document.querySelectorAll("#tblStudents tbody tr");
  for (let row of rows) {
    const point = row.querySelector("td:nth-child(3)").innerHTML;
    if (point < 50) {
      row.classList.add("table-danger");
    }
    console.log(row);
  }
};
loadStudents();
setStudentBg();

document.querySelectorAll(".btn-delete").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // deleteye tiklama isleminde renginin degismesini engelledik.
    const row = e.target.closest("tr");
    const name = row.querySelector("td").innerText;
    const result = confirm(`"Are you sure you want to delete ${name}`);

    if (!result) return;
    row.querySelector('th').innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse"> </i>`;
    setTimeout(() => {
      row.remove();
    }, 2000);
  });
});
document.querySelectorAll("#tblStudents tbody tr").forEach((row) => {
  row.addEventListener("click", (e) => {
    e.target.closest("tr").classList.toggle("table-warning");
  });
});

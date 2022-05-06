const tbody = document.getElementById("body");
const form = document.getElementById("form");
const inputs = document.querySelectorAll(".ip");

const changeTable = () => {
  const deleteData = (element) => element.parentNode.parentNode.remove();
  const editBtn = document.querySelectorAll(".edit");
  const delBtn = document.querySelectorAll(".delete");
  editBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const element = e.target.parentNode.parentNode;
      inputs[0].value = element.children[0].textContent;
      inputs[1].value = element.children[1].textContent;
      inputs[2].value = element.children[2].textContent;
      inputs[3].value = element.children[3].textContent;
      deleteData(e.target);
    });
  });
  delBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => deleteData(e.target));
  });
};

const add = () => {
  const rno = inputs[0].value;
  inputs[0].value = "";
  const name = inputs[1].value;
  inputs[1].value = "";
  const email = inputs[2].value;
  inputs[2].value = "";
  const dob = inputs[3].value;
  inputs[3].value = "";
  const html = `
<tr>
    <td class="align-items-center text-center" scope = "col">${rno}</td>
    <td class="align-items-center text-center" scope = "col">${name}</td>
    <td class="align-items-center text-center" scope = "col">${email}</td>
    <td class="align-items-center text-center" scope = "col">${dob}</td>
    <td class="align-items-center text-center" scope = "col">
    <button type="button" class="btn btn-success edit">Edit</button>
    </td>
    <td class="align-items-center text-center scope = "col"">
    <button type="button" class="btn btn-danger delete">Delete</button>
    </td>
</tr>
`;
  tbody.insertAdjacentHTML("beforeend", html);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
  changeTable();
});

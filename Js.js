const addBtn = document.getElementById(`add`);

addBtn.addEventListener(`click`, () => addNewNote());

function addNewNote(text = ""){
  const note = document.createElement(`div`);
  note.classList.add(`note`);
  note.innerHTML = `
  <div class="tool">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class ="${text ? "hidden" : ""}"></textarea>
  `
  const editBnt = note.querySelector(`.edit`)
  const deleteBtn = note.querySelector(`.delete`)
  const main = note.querySelector(`.main`)
  const Textarea = note.querySelector(`.textarea`)

  deleteBtn.addEventListener(`click`, () =>{
    note.remove();
  })
  document.body.appendChild(note);
}
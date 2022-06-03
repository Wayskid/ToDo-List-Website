const fadeContainer = document.querySelector(".fadeMe");
const taskForm = document.querySelector(".form");
const inputfield = document.querySelector(".inputField");
const addTask = document.querySelector(".addTask");
const placeTask = document.querySelector(".placeTask");
const taskList = document.querySelector(".taskList");
const popUp = document.querySelector(".popUp");
const popUpDlt = document.querySelector(".popUpDlt")
const popUpBtn = document.querySelector(".popUpBtn");
const popUpDltBtn1 = document.querySelector(".popUpDltBtn1")
const popUpDltBtn2 = document.querySelector(".popUpDltBtn2")
const added = document.querySelector(".added")
const textToDlt = document.querySelector(".textToDlt")
const seeTask = document.querySelector(".seeTask")
const popUpView = document.querySelector(".popUpView")
const popUpViewBtn = document.querySelector(".popUpViewBtn")



loadEventListeners();

function loadEventListeners() {
  taskForm.addEventListener("submit", addTaskToList);
}

function addTaskToList(e) {

    e.preventDefault();
    
    if (inputfield.value === "") {
        fadeContainer.classList.add("fadeOut");
        popUp.classList.add("promptIt");

        addEventListener("click", function showPopup(){
        fadeContainer.classList.remove("fadeOut");
        popUp.classList.remove("promptIt");
        });
    }
    else{
        function showAdded() {
            added.classList.remove("show")
        }
        added.classList.add("show")
        setTimeout(showAdded, 1400);
        // added.classList.remove("show");
    }

    const isTyped = inputfield.value;

    const liStyle = document.createElement("div");
    liStyle.className = "liStyle";

    const editLi = document.createElement("input");
    editLi.className = "editLi";
    editLi.type = "text";
    editLi.value = isTyped;
    editLi.setAttribute("readonly", true);

    const editButton = document.createElement("a");
    editButton.className = "editButton";
    editButton.appendChild(document.createTextNode("Edit"));

    const deleteButton = document.createElement("a");
    deleteButton.className = "deleteButton";
    deleteButton.appendChild(document.createTextNode("Delete"));

    placeTask.appendChild(liStyle);
    liStyle.appendChild(editLi);
    liStyle.appendChild(editButton);
    liStyle.appendChild(deleteButton);

    inputfield.value = "";



    

    deleteButton.addEventListener("click", (e) => {
        fadeContainer.classList.add("fadeOut")
        popUpDlt.classList.add("confirmDlt");
        textToDlt.innerText = editLi.value;


        popUpDltBtn1.addEventListener("click", () => {
        e.target.parentElement.remove()
        popUpDlt.classList.remove("confirmDlt")
        fadeContainer.classList.remove("fadeOut")
        })

        
        popUpDltBtn2.addEventListener("click", () => {
        popUpDlt.classList.remove("confirmDlt")
        fadeContainer.classList.remove("fadeOut")
        })
    })

    
 

        
        
        

    editButton.addEventListener("click", () => {
        
        if(editButton.innerText == "Edit"){
            editLi.removeAttribute("readonly");
            editLi.focus();
            editButton.innerText = "Save";
        }


        else {
            editLi.setAttribute("readonly", true);
            editButton.innerText = "Edit";
        }

    });
  

    editLi.addEventListener("click", () =>{
    
        popUpView.classList.add("viewTask")
        seeTask.innerText = editLi.value;
        fadeContainer.classList.add("fadeOut")
            
        popUpViewBtn.addEventListener("click", () => {
            popUpView.classList.remove("viewTask")
            seeTask.innerText = "";
            fadeContainer.classList.remove("fadeOut")
        
        })
            
    })

    


}













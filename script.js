
//DOM selectors

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
const clearAll = document.querySelector(".clearAll")



//Load Event Listener

loadEventListeners();

function loadEventListeners() {
  taskForm.addEventListener("submit", addTaskToList);
}


//Global Function

function addTaskToList(e) {

    e.preventDefault();
    
    //Actions on Input Field Manipulaion
        //Show Warning When Input field is Empty
    if (inputfield.value === "") {
        fadeContainer.classList.add("fadeOut");
        popUp.classList.add("promptIt");

        addEventListener("click", function showPopup(){
        fadeContainer.classList.remove("fadeOut");
        popUp.classList.remove("promptIt");
        });
    }
    else{
        //Show Added on Additon
        
        function showAdded() {
            added.classList.remove("show")
        }
        added.classList.add("show")
        setTimeout(showAdded, 1400);
    
        //Show CLR button on Transition
        clearAll.classList.add("show");


        //Adding Input to Task List

        
        const isTyped = inputfield.value;
        //Create the Div ELement
        const liStyle = document.createElement("div");
        liStyle.className = "liStyle";

        //Create The Input field (I used input field for the listing to make future editting work)
        const editLi = document.createElement("input");
        editLi.className = "editLi";
        editLi.type = "text";
        editLi.value = isTyped;
        editLi.setAttribute("readonly", true);

        //Create an Edit Button
        const editButton = document.createElement("a");
        editButton.className = "editButton";
        editButton.appendChild(document.createTextNode("Edit"));

        //Create a Delete Button
        const deleteButton = document.createElement("a");
        deleteButton.className = "deleteButton";
        deleteButton.appendChild(document.createTextNode("Delete"));

        //Appendages 
        placeTask.appendChild(liStyle);
        liStyle.appendChild(editLi);
        liStyle.appendChild(editButton);
        liStyle.appendChild(deleteButton);
        
        //Clear the inputField on adding Task
        inputfield.value = "";
    



    
    // Confirm Delete
        //PopUp Confirm
        
    deleteButton.addEventListener("click", (ev) => {
        popUpDlt.classList.add("confirmDlt");
        fadeContainer.classList.add("fadeOut");
        textToDlt.innerText = editLi.value;
  

    const yesDlt = popUpDltBtn1.addEventListener("click", () => {
        exeBtn();
        ev.target.parentElement.remove();
    });
    const noDlt = popUpDltBtn2.addEventListener("click", () => {
        exeBtn();
        return;
    });
       
        function exeBtn() {
            popUpDlt.classList.remove("confirmDlt");
            fadeContainer.classList.remove("fadeOut");
        }
     });
 

        
        
    //Edit Button    

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
  

    //Click on Task To View

    editLi.addEventListener("click", () =>{
        //Click to View
        popUpView.classList.add("viewTask")
        seeTask.innerText = editLi.value;
        fadeContainer.classList.add("fadeOut")

        //Click to Go back
        popUpViewBtn.addEventListener("click", () => {
            popUpView.classList.remove("viewTask")
            seeTask.innerText = "";
            fadeContainer.classList.remove("fadeOut")
        })
    })

    clearAll.addEventListener("click", () => {
        liStyle.remove();
        clearAll.classList.remove("show")
    })

    }
    

}















const listbody = document.getElementById("list-body");
const deleteIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" id="delete" class="bi bi-trash3" viewBox="0 0 16 16"> <path id="deletePath" d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path></svg> ';
const orderedtaskContainer1 = '<div class="title-bar"> <div class="ordered-title">';
const orderedtaskContainer2 ='</div> <svg id="delete" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash3 title-del" viewBox="0 0 16 16"><path id="deletePath" d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path></svg>  <svg  id="add-ordered-task" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square ele-add" viewBox="0 0 16 16"><path id="pathDel" d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path  id="pathDel" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg></div><ol class="ordered-list">      </ol></div>';
const unorderedtaskContainer1 = '<div class="title-bar St"> <div class="unordered-title">';
const unorderedtaskContainer2 = '</div><svg id="delete" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash3 title-del" viewBox="0 0 16 16"><path id="deletePath" d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path></svg>  <svg  id="add-ordered-task" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square ele-add" viewBox="0 0 16 16"><path  id="pathDel" d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path id="pathDel" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg></div><ul class="unordered-list"></ul></div>';
const menu = '<div class="menu" ><button class="add-List-Button" id="addOrderedList">OL</button><button class="add-List-Button" id="addUnorderedList">UL</button></div>';

listbody.addEventListener("click" , function(e){
    console.log(e.target.id);
    if(e.target.id === "list"){
        e.target.classList.toggle("checked");
    }else if(e.target.id === "delete" || e.target.id === "deletePath"){
        if(e.target.id === "deletePath"){
            if(e.target.classList.contains("title-del")){
                e.target.parentElement.parentElement.parentElement.parentElement.remove();
            }else
                e.target.parentElement.parentElement.parentElement.remove();
        }else{
            if(e.target.classList.contains("title-del")){
                e.target.parentElement.parentElement.remove();
            }else
                e.target.parentElement.remove();
        }
        
    }else if(e.target.id === "add-ordered-task" || e.target.id ==="pathDel"){
        if(e.target.id ==="pathDel"){
            addTask(e.target.parentElement.parentElement.nextElementSibling,1);
        }
        else
        addTask(e.target.parentElement.nextElementSibling,1);
    }else if(e.target.id === "add-unordered-task"  || e.target.id ==="pathDel"){
        if(e.target.id ==="pathDel"){
            addTask(e.target.parentElement.parentElement.nextElementSibling,0);
        }
        else
        addTask(e.target.parentElement.nextElementSibling,0);
    }else if(e.target.id === "addOrderedList"){
        addTitle(1);
    }
    else if(e.target.id === "addUnorderedList"){
        addTitle(0);
    }

    saveData();
}, false);


function addTitle(flag){
    title = window.prompt("Enter Title of List Container .");
    if(title == ""){
        title = window.prompt();
    }else if(title == null){return;}
    else{
        const div = document.createElement("div");
        if(flag==1){
        div.classList.add("ordered-list-container");
        div.innerHTML = orderedtaskContainer1 + title + orderedtaskContainer2;
        }
        else{
            div.classList.add("unordered-list-container");
            div.innerHTML = unorderedtaskContainer1 + title + unorderedtaskContainer2;
        }
        listbody.appendChild(div);
    }
    
}


function addTask(container,flag){
    task = window.prompt("Enter title of task .");
    console.log(task);
    if(task == ""){
        task = window.prompt();
    }else if(task == null){return;}
    else{
        const li = document.createElement("li");
        const div = document.createElement("div");


        if(flag==1)
        li.classList.add("ordered-item");
        else{
            li.classList.add("unordered-item");    
        }
        

        div.setAttribute("id","list");
        
        div.classList.add("text-field");
        div.innerText = task;
        li.appendChild(div);

        li.innerHTML = li.innerHTML + deleteIcon;
        container.appendChild(li);
    }
    
}

function saveData(){
    localStorage.setItem("data", listbody.innerHTML);
}
function loadData(){
    let Data = localStorage.getItem("data");
    if(Data===null || Data === ""){
        listbody.innerHTML = menu
    }else{
        listbody.innerHTML = Data;
    }
    
}
loadData();

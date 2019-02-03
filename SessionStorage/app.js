 

const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const  clear=document.querySelector("#clear");

const addkey=document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click",deleteıtem);
clear.addEventListener("click",clearıtem);

function addItem(e){
sessionStorage.setItem(addkey.value,addvalue.value);
}


function deleteıtem(e){

}
function clearıtem(e){

}

idList =0;
function showBook (){
    idList ++;
    var inputName , inputNamber, showAdd;
    inputName = document.getElementById("fullName").value;
    inputNamber = Number (document.getElementById("phone").value);
    span1 = "<span class ='span-1'>" + inputName +"</span>" ;
    span2 = "<span class='span-2'>" + inputNamber +"</span>";
    span3 = "<span class='span-3' onclick='removeContact("+idList+")'>" + "REMOVE" + "</span>";
    span4 = "<span class='span-4' onclick='editContact("+idList+")'>" + "EDIT" + "</span>";
// if there was not number.
    if(isNaN(inputNamber)){
        alert ("not number");
	return false;
    } else {
        showAdd = "<li id='"+idList+"'>" + span1 + span2 + span3 + span4+ "</li>" ;
    }
    document.getElementById("show").innerHTML += showAdd;
    document.getElementById("fullName").value = "";
    document.getElementById("phone").value = "";
}
// for remove the contact.
function removeContact(idList){
    document.getElementById(idList).remove();
}
// for EDIT contact.
function editContact(idList){
    document.getElementById("edit").style.display = "block";
    listSpan = document.getElementById(idList);
    edit1 = listSpan.getElementsByTagName("span")[0].outerText;
    document.getElementById("edit-1").setAttribute("value",edit1);
    edit2 = listSpan.getElementsByTagName("span")[1].outerText;
    document.getElementById("edit-2").setAttribute("value",edit2);    

}
// save the edited  contact.
function saveContact (idList){
     save1=document.getElementById("edit-1").value;
     listSpan.getElementsByTagName("span")[0].innerText = save1;
     save2 = document.getElementById("edit-2").value;
     listSpan.getElementsByTagName("span")[1].innerText = save2;
     document.getElementById("edit").style .display = "none";
}
// for serch contact
function filterSerch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("show");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

 
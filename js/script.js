// Ejecutar funcion en movimiento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//document.getElementById("gandalf").addEventListener("click", loadPage);
//document.getElementById("der").addEventListener("click", loadPage);
//document.getElementById("iconpaes").addEventListener("click", loadframe2);
//document.getElementById("textpaes").addEventListener("click", loadframe2);
// Declarar variables

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// Evento para mostrar y ocultar el menu
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");

}

  //  function loadPage(){

    //    document.getElementById("iframepage01").style.display="block"
    //    document.getElementById("iframepage01").src="https://appcj-01.onrender.com/"
    //    document.getElementById("iframepage02").style.display="none"
    //}

    //function loadframe2(){
      
    //    document.getElementById("iframepage01").style.display="none"
    //    document.getElementById("iframepage02").style.display="block"
      //  document.getElementById("iframepage02").src="pag_02.html"
        
    //}
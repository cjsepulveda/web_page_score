// Ejecutar funcion en movimiento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);


var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// Evento para mostrar y ocultar el menu
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");

}

  
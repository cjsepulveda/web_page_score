// Ejecutar funcion en movimiento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("btn_open").addEventListener("click", close_submenu_dia);


var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// Evento para mostrar y ocultar el menu
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");

    }
  
function close_submenu_dia() {
      var x = document.getElementById("dia");
      var element = document.getElementById("mas");

      if (x.style.display === "block") {
        x.style.display = "none";
        element.classList.toggle("js");
      } else {
        x.style.display = "none";
      }
    }

    
$(document).ready(function() {
    
      $("#op_menu.options__menu a.titlesubmenu").click(function() {

      $("#dia.submenu").toggle();
    
      $("#menu_side .options__menu a.titlesubmenu .option").toggleClass("js");

    });
    
    });

    

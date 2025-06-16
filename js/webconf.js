
// WebConf.js - JavaScript para a aplicação WebConference

/*global window, console, document */

"use strict"; // Normas FCUL 24/25

window.onload = function () {
    // código para manipulação DOM
    console.log("Page loaded");
};

// Variáveis globais

var btnRegister = document.getElementById("btnRegister");
if (btnRegister) {
    btnRegister.addEventListener("click", function () {
        // Abertura da janela modal
        console.log("Register button clicked");
    });
}
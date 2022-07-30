let formulario = document.querySelector('#form-register');
formulario.onsubmit = function(event) {
    event.preventDefault();
    alert("Seus dados foram cadastrados com sucesso!");
}
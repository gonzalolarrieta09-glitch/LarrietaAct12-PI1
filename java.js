const loginForm = document.getElementById('loginForm');
const formMessage = document.getElementById('formMessage');

loginForm.addEventListener('submit', function (event) {
	event.preventDefault();

	const usuario = document.getElementById('usuario').value.trim();
	const contrasena = document.getElementById('contrasena').value.trim();

	if (!usuario || !contrasena) {
		formMessage.textContent = 'Completa tu usuario y contrasena.';
		return;
	}

	formMessage.style.color = '#456c63';
	formMessage.textContent = 'Datos listos para iniciar sesion.';
});

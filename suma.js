function calcularSuma() {
	const n1 = document.getElementById('num1').value.trim();
	const n2 = document.getElementById('num2').value.trim();
	const resultadoElement = document.getElementById('resultado');

	if (n1 === '' || n2 === '') {
		resultadoElement.innerText = 'Ingresa ambos números';
		return;
	}

	fetch('https://suma2numeros-2.onrender.com/sumar', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			num1: parseFloat(n1),
			num2: parseFloat(n2)
		})
	})
		.then(response => response.json())
		.then(data => {
			const resultado = data.resultado ?? data.suma ?? data.result ?? 'Sin resultado';
			resultadoElement.innerText = resultado;
		})
		.catch(error => {
			console.error('Error al consumir la API:', error);
			resultadoElement.innerText = 'No se pudo sumar';
		});
}
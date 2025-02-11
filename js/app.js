function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let lugares = parseInt(document.getElementById(`qtd-${tipo}`).textContent);

    if (quantidade > lugares) {
        alert('Quantidade solicitada maior que a disponível!');
        document.getElementById('qtd').value = '';
        return;

    }else {
        lugares = lugares - quantidade;
        document.getElementById(`qtd-${tipo}`).textContent = lugares;

    }

    document.getElementById('qtd').value = '';
    document.getElementById('tipo-ingresso').value = 'inferior';
}
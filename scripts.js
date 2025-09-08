const amount = document.querySelector('#amount');

amount.addEventListener('input', () => {
    let value = amount.value.replace(/\D/g, "");
    amount.value = value;
    value = Number(value) / 100;
    amount.value = formatCurrencyBRL(value);
});

function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: 'currency',
        currency: 'BRL'
    });
    
    return value;
}
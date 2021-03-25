document.querySelector('.exchange-rate .show-rate').addEventListener('click', showRate);

async function showRate() {
    const currFrom = document.querySelector('.exchange-rate .curr-from').value;
    const currTo = document.querySelector('.exchange-rate .curr-to').value;
    const url = `https://api.exchangerate-api.com/v4/latest/${currFrom}`;
    const rates = await (await fetch(url)).json();
    const ratesInput = document.querySelector('.exchange-rate .rate');
    ratesInput.value = rates.rates[currTo];
}


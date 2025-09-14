// satoramy_satoria_dao.js

const API_BASE_URL = 'http://localhost:5000/api/v1'; // Beispiel-URL

async function fetchStatus(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        return { status: "Fehler", beschreibung: "Verbindung fehlgeschlagen." };
    }
}

async function renderDAOStatus() {
    const satoramyStatusDiv = document.getElementById('satoramy-status');
    const satoriaStatusDiv = document.getElementById('satoria-status');

    const satoramyData = await fetchStatus('hoheits/satoramy/status');
    const satoriaData = await fetchStatus('hoheits/satoria/status');

    satoramyStatusDiv.innerHTML = `
        <p><strong>Status:</strong> ${satoramyData.status}</p>
        <p><strong>Beschreibung:</strong> ${satoramyData.beschreibung}</p>
    `;

    satoriaStatusDiv.innerHTML = `
        <p><strong>Status:</strong> ${satoriaData.status}</p>
        <p><strong>Beschreibung:</strong> ${satoriaData.beschreibung}</p>
    `;
}

document.addEventListener('DOMContentLoaded', renderDAOStatus);

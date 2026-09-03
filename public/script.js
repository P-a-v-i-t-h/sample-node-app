async function getInfo() {

    const response = await fetch("/api/info");

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <p><strong>Application:</strong> ${data.application}</p>
        <p><strong>Environment:</strong> ${data.environment}</p>
        <p><strong>Port:</strong> ${data.port}</p>
        <p><strong>Message:</strong> ${data.message}</p>
    `;
}

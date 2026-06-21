document.addEventListener("DOMContentLoaded", () => {
    const data = [
        { c: "England", mv: 1.52, ga: 82, round: 5, p: "Bellingham, Foden, Saka" },
        { c: "France", mv: 1.34, ga: 78, round: 5, p: "Mbappé, Tchouaméni, Saliba" },
        { c: "Brazil", mv: 1.22, ga: 65, round: 4, p: "Vinícius Jr., Rodrygo, Guimarães" },
        { c: "Spain", mv: 1.04, ga: 60, round: 4, p: "Yamal, Rodri, Pedri" },
        { c: "Germany", mv: 0.82, ga: 55, round: 3, p: "Wirtz, Musiala, Kimmich" }
    ];

    const options = { maintainAspectRatio: false, responsive: true };

    new Chart(document.getElementById('squadValueChart'), {
        type: 'bar',
        data: { labels: data.map(i => i.c), datasets: [{ label: 'MV (€B)', data: data.map(i => i.mv), backgroundColor: '#1d3557' }] },
        options: options
    });

    new Chart(document.getElementById('firepowerChart'), {
        type: 'scatter',
        data: { datasets: [{ label: 'G+A vs MV', data: data.map(i => ({x: i.ga, y: i.mv})), backgroundColor: '#e63946' }] },
        options: options
    });

    new Chart(document.getElementById('progressionChart'), {
        type: 'bar',
        data: { labels: data.map(i => i.c), datasets: [{ label: 'Babak', data: data.map(i => i.round), backgroundColor: '#457b9d' }] },
        options: options
    });

    const tbody = document.getElementById('playersBody');
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.c}</td><td>${item.p}</td></tr>`;
    });
});

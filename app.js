document.addEventListener("DOMContentLoaded", () => {
    const data = [
        { c: "England", mv: 1.52, ga: 82, round: 5, p: "Bellingham, Foden, Saka" },
        { c: "France", mv: 1.34, ga: 78, round: 5, p: "Mbappé, Tchouaméni, Saliba" },
        { c: "Brazil", mv: 1.22, ga: 65, round: 4, p: "Vinícius Jr., Rodrygo, Guimarães" },
        { c: "Spain", mv: 1.04, ga: 60, round: 4, p: "Yamal, Rodri, Pedri" },
        { c: "Portugal", mv: 0.98, ga: 58, round: 3, p: "Fernandes, Leão, Dias" },
        { c: "Germany", mv: 0.82, ga: 55, round: 3, p: "Wirtz, Musiala, Kimmich" },
        { c: "Argentina", mv: 0.74, ga: 52, round: 3, p: "Martínez, Fernández, Romero" },
        { c: "Netherlands", mv: 0.68, ga: 45, round: 2, p: "Simons, de Jong, van de Ven" },
        { c: "Italy", mv: 0.61, ga: 42, round: 2, p: "Barella, Bastoni, Dimarco" },
        { c: "Belgium", mv: 0.48, ga: 38, round: 1, p: "De Bruyne, Doku, Onana" }
    ];

    new Chart(document.getElementById('squadValueChart'), {
        type: 'bar',
        data: { labels: data.map(i => i.c), datasets: [{ label: 'MV (€B)', data: data.map(i => i.mv), backgroundColor: '#1d3557' }] }
    });

    new Chart(document.getElementById('firepowerScatterChart'), {
        type: 'scatter',
        data: { datasets: [{ label: 'Productivity', data: data.map(i => ({x: i.ga, y: i.mv})), backgroundColor: '#e63946' }] }
    });

    new Chart(document.getElementById('progressionChart'), {
        type: 'bar',
        data: { labels: data.map(i => i.c), datasets: [{ label: 'Babak', data: data.map(i => i.round), backgroundColor: '#457b9d' }] },
        options: { indexAxis: 'y' }
    });

    const tbody = document.getElementById('playersBody');
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.c}</td><td>${item.p}</td></tr>`;
    });
});
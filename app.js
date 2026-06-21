:root {
    --primary: #2d3436;
    --accent: #0984e3;
    --bg: #f8f9fa;
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    margin: 0; padding: 40px 20px;
    min-height: 100vh;
}

header { text-align: center; margin-bottom: 40px; color: #2d3436; }

.dashboard-container { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
    gap: 25px; 
    max-width: 1200px; 
    margin: auto;
}

.chart-card { 
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    padding: 25px; 
    border-radius: 20px; 
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border: 1px solid rgba(255,255,255,0.3);
}

table { width: 100%; border-collapse: separate; border-spacing: 0 10px; }
th { color: #636e72; font-size: 0.8em; text-transform: uppercase; }
td { padding: 15px; background: #fff; }
tr td:first-child { border-radius: 10px 0 0 10px; font-weight: bold; }
tr td:last-child { border-radius: 0 10px 10px 0; }

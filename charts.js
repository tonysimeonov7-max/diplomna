/* ===== Chart.js Global Config ===== */
Chart.defaults.color = '#6b7280';
Chart.defaults.font.family = "'Segoe UI', system-ui, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.plugins.legend.labels.padding = 14;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 10;
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.plugins.tooltip.cornerRadius = 6;
Chart.defaults.plugins.tooltip.titleFont = { weight: '600' };

const C = {
    cli: '#16a34a',
    gui: '#dc2626',
    cliBg: 'rgba(22,163,74,0.12)',
    guiBg: 'rgba(220,38,38,0.12)',
    grid: 'rgba(107,114,128,0.1)'
};

const gridOpts = { color: C.grid, drawBorder: false };
const noGrid = { display: false };

/* ---- 1. Performance (Bar) ---- */
new Chart(document.getElementById('performanceChart'), {
    type: 'bar',
    data: {
        labels: ['Файлови операции', 'Системна конфигурация', 'Мрежова диагностика', 'Инсталиране на софтуер', 'Мониторинг', 'Управление на услуги'],
        datasets: [
            { label: 'CLI (секунди)', data: [2.1, 3.5, 1.8, 4.2, 1.5, 2.0], backgroundColor: C.cli, borderRadius: 4, barPercentage: 0.7 },
            { label: 'GUI (секунди)', data: [5.8, 8.2, 6.5, 7.8, 4.5, 5.5], backgroundColor: C.gui, borderRadius: 4, barPercentage: 0.7 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Секунди' }, grid: gridOpts },
            x: { grid: noGrid }
        }
    }
});

/* ---- 2. Satisfaction (Radar) ---- */
new Chart(document.getElementById('satisfactionChart'), {
    type: 'radar',
    data: {
        labels: ['Лесна навигация', 'Скорост', 'Гъвкавост', 'Автоматизация', 'Визуализация', 'Обучение'],
        datasets: [
            { label: 'CLI', data: [4, 9, 9, 10, 3, 4], borderColor: C.cli, backgroundColor: C.cliBg, pointBackgroundColor: C.cli, pointRadius: 4, borderWidth: 2 },
            { label: 'GUI', data: [9, 5, 5, 3, 9, 9], borderColor: C.gui, backgroundColor: C.guiBg, pointBackgroundColor: C.gui, pointRadius: 4, borderWidth: 2 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: {
            r: {
                beginAtZero: true, max: 10,
                ticks: { stepSize: 2, backdropColor: 'transparent' },
                grid: { color: C.grid },
                angleLines: { color: C.grid },
                pointLabels: { font: { size: 11 } }
            }
        }
    }
});

/* ---- 3. Cost (Bar) ---- */
new Chart(document.getElementById('costChart'), {
    type: 'bar',
    data: {
        labels: ['Лицензи', 'Хардуер', 'Обучение', 'Поддръжка (год.)', 'Надграждане'],
        datasets: [
            { label: 'CLI (лева)', data: [0, 800, 2000, 500, 200], backgroundColor: C.cli, borderRadius: 4, barPercentage: 0.7 },
            { label: 'GUI (лева)', data: [2500, 3500, 800, 1500, 1200], backgroundColor: C.gui, borderRadius: 4, barPercentage: 0.7 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Лева (BGN)' }, grid: gridOpts },
            x: { grid: noGrid }
        }
    }
});

/* ---- 4. Security (Line) ---- */
new Chart(document.getElementById('securityChart'), {
    type: 'line',
    data: {
        labels: ['Яну', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'],
        datasets: [
            { label: 'CLI уязвимости', data: [5, 3, 4, 2, 6, 3, 4, 2, 5, 3, 4, 2], borderColor: C.cli, backgroundColor: C.cliBg, fill: true, tension: 0.35, borderWidth: 2, pointRadius: 3 },
            { label: 'GUI уязвимости', data: [15, 12, 18, 14, 20, 16, 13, 17, 19, 15, 14, 16], borderColor: C.gui, backgroundColor: C.guiBg, fill: true, tension: 0.35, borderWidth: 2, pointRadius: 3 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Брой уязвимости' }, grid: gridOpts },
            x: { grid: noGrid }
        }
    }
});

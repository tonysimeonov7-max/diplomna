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
    blue: '#2563eb',
    purple: '#7c3aed',
    orange: '#ea580c',
    yellow: '#ca8a04',
    cyan: '#0891b2',
    pink: '#db2777',
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

/* ---- 2. Resource (Doughnut) ---- */
new Chart(document.getElementById('resourceChart'), {
    type: 'doughnut',
    data: {
        labels: ['CLI – Свободна', 'CLI – Заета', 'GUI – Свободна', 'GUI – Заета'],
        datasets: [{
            data: [87, 13, 45, 55],
            backgroundColor: [C.cli, C.cliBg, C.gui, C.guiBg],
            borderWidth: 2, borderColor: '#fff'
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        cutout: '55%',
        plugins: {
            legend: { position: 'bottom', labels: { padding: 12, font: { size: 11 } } },
            title: { display: true, text: 'RAM употреба (%)', font: { size: 13, weight: '600' } }
        }
    }
});

/* ---- 3. CPU/Memory (Bar) ---- */
new Chart(document.getElementById('cpuMemoryChart'), {
    type: 'bar',
    data: {
        labels: ['Idle CPU (%)', 'Активно CPU (%)', 'RAM старт (MB)', 'RAM работа (MB)'],
        datasets: [
            { label: 'CLI', data: [1, 15, 256, 512], backgroundColor: C.cli, borderRadius: 4, barPercentage: 0.6 },
            { label: 'GUI', data: [5, 45, 1024, 2048], backgroundColor: C.gui, borderRadius: 4, barPercentage: 0.6 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'CPU (%) и RAM (MB)', font: { size: 13, weight: '600' } }
        },
        scales: {
            y: { beginAtZero: true, grid: gridOpts },
            x: { grid: noGrid }
        }
    }
});

/* ---- 4. Satisfaction (Radar) ---- */
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

/* ---- 5. Cost (Bar) ---- */
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

/* ---- 6. Desktop OS (Pie) ---- */
new Chart(document.getElementById('desktopOSChart'), {
    type: 'pie',
    data: {
        labels: ['Windows', 'macOS', 'Linux', 'ChromeOS', 'Други'],
        datasets: [{
            data: [72, 16, 8, 3, 1],
            backgroundColor: [C.blue, C.purple, C.cli, C.orange, '#d1d5db'],
            borderWidth: 2, borderColor: '#fff'
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', labels: { padding: 10, font: { size: 11 } } },
            title: { display: true, text: 'Desktop ОС (2026)', font: { size: 13, weight: '600' } }
        }
    }
});

/* ---- 7. Server OS (Pie) ---- */
new Chart(document.getElementById('serverOSChart'), {
    type: 'pie',
    data: {
        labels: ['Linux', 'Windows Server', 'Unix', 'Други'],
        datasets: [{
            data: [78, 18, 3, 1],
            backgroundColor: [C.cli, C.blue, C.purple, '#d1d5db'],
            borderWidth: 2, borderColor: '#fff'
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', labels: { padding: 10, font: { size: 11 } } },
            title: { display: true, text: 'Server ОС (2026)', font: { size: 13, weight: '600' } }
        }
    }
});

/* ---- 8. Security (Line) ---- */
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

/* ---- 9. Usage (Horizontal Bar) ---- */
new Chart(document.getElementById('usageChart'), {
    type: 'bar',
    data: {
        labels: ['DevOps', 'Системна адм.', 'Уеб разработка', 'Дизайн', 'Офис', 'Наука/данни'],
        datasets: [
            { label: 'CLI %', data: [90, 85, 60, 10, 5, 70], backgroundColor: C.cli, borderRadius: 4, barPercentage: 0.65 },
            { label: 'GUI %', data: [10, 15, 40, 90, 95, 30], backgroundColor: C.gui, borderRadius: 4, barPercentage: 0.65 }
        ]
    },
    options: {
        indexAxis: 'y',
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: {
            x: { beginAtZero: true, max: 100, title: { display: true, text: '% предпочитание' }, grid: gridOpts },
            y: { grid: noGrid }
        }
    }
});

/* ---- 10. Learning Curve (Line) ---- */
new Chart(document.getElementById('learningChart'), {
    type: 'line',
    data: {
        labels: ['Седмица 1', 'Седмица 2', 'Месец 1', 'Месец 3', 'Месец 6', 'Година 1'],
        datasets: [
            { label: 'CLI умения', data: [10, 20, 35, 55, 75, 95], borderColor: C.cli, backgroundColor: C.cliBg, fill: true, tension: 0.35, borderWidth: 2, pointRadius: 4 },
            { label: 'GUI умения', data: [40, 60, 75, 85, 90, 92], borderColor: C.gui, backgroundColor: C.guiBg, fill: true, tension: 0.35, borderWidth: 2, pointRadius: 4 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: {
            y: { beginAtZero: true, max: 100, title: { display: true, text: '% компетентност' }, grid: gridOpts },
            x: { grid: noGrid }
        }
    }
});

/* ---- 11. Automation (Radar) ---- */
new Chart(document.getElementById('automationChart'), {
    type: 'radar',
    data: {
        labels: ['Скриптинг', 'Планиране', 'Мониторинг', 'Деплой', 'Бекъп', 'Тестване'],
        datasets: [
            { label: 'CLI', data: [10, 9, 8, 9, 9, 8], borderColor: C.cli, backgroundColor: C.cliBg, pointBackgroundColor: C.cli, pointRadius: 4, borderWidth: 2 },
            { label: 'GUI', data: [3, 5, 6, 4, 5, 5], borderColor: C.gui, backgroundColor: C.guiBg, pointBackgroundColor: C.gui, pointRadius: 4, borderWidth: 2 }
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

const ctx = document.getElementById('myChart').getContext('2d');

const dataPenjualan = [65, 59, 80, 81, 56, 55, 70, 68, 75, 60, 62, 77];
const labelsBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const data = {
    labels: labelsBulan,
    datasets: [{
        label: 'Penjualan Bulanan',
        data: dataPenjualan,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Bulan'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Jumlah Penjualan'
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(75, 192, 192)'
                }
            }
        }
    }
};

const myChart = new Chart(ctx, config);

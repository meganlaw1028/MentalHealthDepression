// Fetch Block
function ChartUpdate() {
    async function fetchhData() {
        const href = "DepressionRates.json";
        const response = await fetch(href);
        const datapoints = await response.json();
        console.log(datapoints);
        return datapoints;

    };

    fetchhData().then(datapoints => {
        const company = datapoints.AnnualReport[0].Statistics.map(
            function(index) {
                return index.Data_Company;

            })

        const intensity = datapoints.AnnualReport[0].Statistics.map(
            function(index) {
                return index.Data_intensity;

            })

        const Data_Therapy_type = datapoints.AnnualReport[0].Statistics.map(
            function(index) {
                return index.Data_Data_Therapy_type;

            })
        console.log(company);
        myChart.config.data.labels = company;
    });
}

// setup 

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Weekly Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
    }]
};

// config 
const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
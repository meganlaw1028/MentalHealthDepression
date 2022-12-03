const xMap = [];
const yCountry = [];

MakeChart();

async function MakeChart() {
    await getData();
    const ctx = document.getElementById('myMap');
    const myMap = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: yCountry,
            datasets: [{
                label: "Depression Rates by Country 2022",
                data: xMap,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],

                borderWidth: 1.5,
                borderColor: 'rgba(105, 149, 132, 0.8)'
            }]
        },
        options: {
            indexAxis: 'y',
            plugins: {
                title: {
                    display: true,
                    text: 'Depression Rates by Country 2022',
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return value + '%';
                        }
                    }
                }
            }
            }
        }
    )
}

async function getData() {
    const response = await fetch('DepressionRates.csv');
    const data = await response.text();

    const chartTable = data.split('\n').slice(1);;
    chartTable.forEach(chartTableRow => {
        const chartTableColumns = chartTableRow.split(',');
        const country = chartTableColumns[0];
        yCountry.push(country);
        const prevalence = chartTableColumns[1];
        xMap.push((prevalence));
        const cases = chartTableColumns[2];
        const pop2022 = chartTableColumns[3];
        console.log(country, prevalence, cases, pop2022);
    });

}

//"country","prevalence","cases","pop2022"


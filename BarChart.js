const xlabels = [];
const yaxis = [];

MakeChart();

async function MakeChart() {
    await getData();
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Percentage of Young people experiencing feelings of depression in the United Kingdom 2009-2021',
                data: yaxis,
                backgroundColor: [
                    'rgba(255, 150, 132, 0.7)'
                ],

                borderWidth: 1,
                borderColor: 'rgba(105, 149, 132, 0.8)'
            }]
        },
        options: {
            
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    })
}

async function getData() {
    const response = await fetch('Depression-in-uk.csv');
    const data = await response.text();

    const chartTable = data.split('\n').slice(2);
    chartTable.forEach(chartTableRow => {
        const chartTableColumns = chartTableRow.split(',');
        const chartYear = chartTableColumns[0];
        xlabels.push(chartYear);
        const chartPercentage = chartTableColumns[1];
        yaxis.push((chartPercentage));
        console.log(chartYear, chartPercentage);
    });

}
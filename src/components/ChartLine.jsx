import ApexCharts from "react-apexcharts"

function ChartLine() {

    const options = {
        xaxis: {
            type: 'line',
            categories: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez',]
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
    }

    const series = [{
        data: [1,4,5,3,7,3,7,2,4,7,3,9]
    }]

    return (
        <ApexCharts
            options={options}
            series={series}
        />
    )
}

export default ChartLine
import ApexCharts from "react-apexcharts"

function ChartLine() {

    const options = {
        xaxis: {
            categories: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez',]
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                opacityFrom: 0,
                opacityTo: 0.8,
                stops: [0, 100, 100]
            }
        },
        stroke: {
            curve: 'smooth',
        }
    }

    const series = [{
        type: 'area',
        data: [1, 4, 5, 3, 7]
    }]

    return (
        <ApexCharts
            options={options}
            series={series}
        />
    )
}

export default ChartLine
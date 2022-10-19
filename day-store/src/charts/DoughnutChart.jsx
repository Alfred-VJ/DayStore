import Chart from 'react-apexcharts'; 

export const DoughnutChart = (props) => {
   const options= props.options
   const series=props.series
   const labels=props.labels
    return  (
        <Chart options={options} series={series} labels={labels} type="donut" width="380" />
    )
}
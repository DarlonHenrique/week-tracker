import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import { ChartContainer } from './styles'

const data = {
  labels: ['study', 'work', 'sleep'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}

export function Chart() {
  return (
    <ChartContainer>
      <Pie data={data} />
    </ChartContainer>
  )
}

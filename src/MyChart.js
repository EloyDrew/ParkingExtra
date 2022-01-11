import React from 'react'
import { Chart } from 'react-charts'

function MyChart() {
  const data = React.useMemo(
    () => [
      {
        //Lines On Chart
        label: 'Expenditure',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div style={{ width: '325px', height: '300px' }}>
      <Chart data={data} axes={axes} />

    </div> //Add logic for Bar Chart over Line Graph
  )
}
export default MyChart;
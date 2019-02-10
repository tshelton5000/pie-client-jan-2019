import React from 'react';

import './Pies.css';
import Pie from './Pie/Pie';

class Pies extends React.Component {
  testData = [
    {
      nameOfPie: 'Name of Pie',
      baseOfPie: 'Base of Pie',
      crust: 'Crust',
      timeToBake: 'Time to Bake',
      servings: 'Servings',
      rating: 'Rating'
    },
    {
      nameOfPie: 'Cherry',
      baseOfPie: 'Fruit Filling',
      crust: 'Pastry',
      timeToBake: '30 mins',
      servings: 97,
      rating: 5
    }, 
    {
      nameOfPie: 'Pecan',
      baseOfPie: 'Sugary Goodness',
      crust: 'Graham Cracker',
      timeToBake: '40 mins',
      servings: 2,
      rating: 3
    }
  ]

  render(){
    let pieRows = this.testData.map(pie => {
      return (
        <Pie key={pie.nameOfPie} pie={pie} />
      )
    })
    return(
      <table>
        <tbody>
          {pieRows}
        </tbody>
      </table>
    )
  }
}

export default Pies;
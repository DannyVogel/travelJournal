import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {
  const cardElements = data.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })
  console.log(cardElements)


  return (
    <div className="App">
      <Header />
      {cardElements}
    </div>
  )
}

export default App

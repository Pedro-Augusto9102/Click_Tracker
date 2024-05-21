import React from "react"
function App() {
  const [coordenadas, setCoordenadas] = React.useState([])
  const clickHandler = (e) => {
    let X = e.clientX
    let Y = e.clientY
    setCoordenadas([...coordenadas, {x:X,y:Y}])
  }


  let positions = coordenadas.map(item => {
    return(
        <div key={item.key} style={{position:"absolute",left:`${item.x}px`,top:`${item.y}px`,background:"white",height:"5px",width:"5px"}}></div>
    )
  })


  return (
    <div onClick={clickHandler} className="app">
      {positions}
    </div>
  );
}

export default App;

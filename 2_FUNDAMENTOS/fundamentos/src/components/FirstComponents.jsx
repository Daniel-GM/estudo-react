import MyComponent from "./MyComponent"

// arquivo de estilos
const FirstComponents = () => {
  // essa função faz isso
  return (
    <div>
      {/* teste */}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent/>
    </div>
  )
}

export default FirstComponents
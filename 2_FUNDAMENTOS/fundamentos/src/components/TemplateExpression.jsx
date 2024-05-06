const TemplateExpression = () => {
  const name = "Daniel"
  const data = {
    age: "25",
    job: "Programmer"
  }

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atual como {data.job}</p>
    </div>
  )
}

export default TemplateExpression
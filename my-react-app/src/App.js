import Card from './elements/Card';
const ITEMS = [
  {
    img: "smiley.jfif",
    name: "Smiley",
    description: "He is a cow. Do you want more from him? He is doing a great job as a cow. It'd be a shame if we had to find a replacement for that job."
  }
]
function App() {
  return (
    <div className="App">
      <div className="List">
        {ITEMS.map((item) => (
          <Card img={item.img} name={item.name} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
import './App.css';
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import Card from './component/Card.jsx';
import data from './data';



function App() {

  const cards = data.map((items)=>{
    return <Card key = {items.id} {...items}/>
    
  })

  // console.log("cards", cards);





  return (
    <div className="App">
         <NavBar />
         <Hero />
         <section className="cards-list">
                {cards}
            </section>
    
    </div>
  );
}

export default App;

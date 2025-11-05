import {useState} from "react"

function App() {
  
  
  const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];


const [addedProducts, setAddedProducts] = useState([])




function addToCard (product) {
    const control = addedProducts.find(cartProduct => cartProduct.name === product.name)
    if  (control) {
     return 
    } else {
      setAddedProducts(prev => [...prev, {...product, quantity:1}] )
    }
}

  return (
    <>
      <h1>Prodotti tra cui scegliere</h1>

      <ul>
        { products.map ((p,i) => (

          <li key={i}> 
            <p>{p.name} di cui Prezzo: {p.price.toFixed(2)}€</p>
            <button onClick={() => addToCard(p)}>Aggiungi al carrello</button>
          </li>
        ) )

        }
      </ul>


      <h1>Carrello</h1>
      <ul>
          {addedProducts.map((p,i) => (
        <li key={i}>
            <p>Nome Prodotto: {p.name}</p>
            <p>Prezzo: {p.price.toFixed(2)}€</p>
            <p>Quantità: {p.quantity}</p>
        </li>
          ))}
      </ul>
    </>
  )
}

export default App

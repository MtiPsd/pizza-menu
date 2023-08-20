import './App.css';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast react pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const pizzasCount = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {pizzasCount > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza, index) => (
            <Pizza
              key={index}
              name={pizza.name}
              ingredient={pizza.ingredients}
              photo={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut}
            />
          ))}
        </ul>
      ) : (
        <p>⚠️ We're still working on our menu please come back later</p>
      )}
    </main>
  );
}

function Pizza({ photo, name, ingredient, price, soldOut }, props) {
  return (
    <li className={`pizza ${soldOut ? ' sold-out' : ''}`}>
      <img src={photo} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHour = 23;
  const isOpen = hour >= openHours && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className='order'>
      <p>We're open until {closeHour}:00. Come visit us or order online</p>
      <button className='btn'>Order</button>
    </div>
  );
}

export default App;

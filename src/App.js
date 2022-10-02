import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2022, 2, 30),
      title: 'Car Expenses',
      price: 450,
    },
    {
      id: 'e2',
      date: new Date(2022, 3, 30),
      title: 'Insurance ',
      price: 256.98,
    },
    {
      id: 'e3',
      date: new Date(2022, 4, 30),
      title: 'Bills',
      price: 210.98,
    },
    {
      id: 'e4',
      date: new Date(2022, 5, 30),
      title: 'Movie ticket',
      price: 500,

    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
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
      <ExpenseItem date={expense[0].date}
        title={expense[0].title}
        price={expense[0].price} />
      <ExpenseItem date={expense[1].date}
        title={expense[1].title}
        price={expense[1].price} />

      <ExpenseItem date={expense[2].date}
        title={expense[2].title}
        price={expense[2].price} />

      <ExpenseItem date={expense[3].date}
        title={expense[3].title}
        price={expense[3].price} />
    </div>
  );
}

export default App;
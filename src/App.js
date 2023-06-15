
import './App.css';
import AsyncAwait from './components/Async_Await';
import Axios from './components/Axios';
import UseFetch from './components/CostomHook';
import Fetch from './components/Fetch';

function App() {
  return (
    <div className="App">
      <Fetch />
      <Axios />
      <AsyncAwait />
    </div>
  );
}

export default App;

// import UseFetch from "./components/CostomHook";

// function App() {
//   const { data: dataInfo, loading, error, refetch } = UseFetch(
//     'https://jsonplaceholder.typicode.com/todos'
//   );
//   return (
//     <div className="App">
//       {console.log(data)}
//     </div>
//   );
// }

// export default App;
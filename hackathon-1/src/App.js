import './App.css';
import RestaurantSignUp from './components/restaurantsignup/restaurantSignup';
import ContextProvider from './context/context';
import Routing from './routes/routes';

function App() {
  return (
    <ContextProvider>
      <Routing>
        <RestaurantSignUp />
      </Routing>
    </ContextProvider>
  );
}

export default App;

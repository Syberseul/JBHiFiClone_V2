import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./pages/common/header";
import Home from "./pages/Home";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/wishList">Wish List</Route>
        <Route path="login">Sign In</Route>
        <Route path="/account">My Account</Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

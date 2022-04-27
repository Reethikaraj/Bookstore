import "./App.css";
import BooksTable from "./components/books table/booksTable";
import Mainpage from "./components/main page/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/main page/NavBar";
import BookDetails from "./components/bookDetails/bookDetails";
import Cart from "./components/cart/Cart";
import { useSelector } from "react-redux";
import { rootState } from "./redux/reducers/rootReducer";

function App() {
  const theme = useSelector((state: rootState) => state.themeReducer.theme);
  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/store" element={<BooksTable />}></Route>
          <Route path="/details/:name" element={<BookDetails />}></Route>
          <Route path="/cartdetails" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

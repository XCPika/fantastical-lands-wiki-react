import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/home';
import Layout from '../pages/layout';
import ClassPage from "../pages/classes";
import RacePage from "../pages/races";
import StructurePage from "../pages/structures";
import ItemPage from "../pages/items";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/classes' element={<ClassPage/>}/>
          <Route path='/races' element={<RacePage/>}/>
          <Route path='/structures' element={<StructurePage/>}/>
          <Route path='/items' element={<ItemPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

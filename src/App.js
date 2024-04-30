import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Sec_Dash from './pages/Sec_Dash';
import Manage_categories from './pages/Manage_categories';
import Add_product from './pages/Add_product';
import Add_categories from './pages/Add_categories';
import Manage_formal_outfit from './pages/Manage_formal_outfit';
import Manage_party_outfit from './pages/Manage_party_outfit';
import Add_country from './pages/Add_country';
import Comment from './pages/Comment';
import Casual from './pages/Casual';
import Add_Casual from './pages/Add_Casual';
import Manage_Casual from './pages/Manage_Casual';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Price_table from './pages/Price_table';
import Table_Data from './pages/Table_Data';
import Manage_cargo from './pages/Manage_cargo';
import Manage_Chambary from './pages/Manage_Chambary';
import Manage_poloPshirt from './pages/Manage_poloPshirt';
import Edit_casual from './pages/Edit_casual';
import Demo from './pages/Demo'
import Form_one from './pages/Form_one';
import Add_party from './pages/Add_party';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Add_cargo from './pages/Add_cargo';
import Add_Chambary from './pages/Add_Chambary';
import Customer_Manage from './pages/Customer_Manage';
import Edit_cate from './pages/Edit_cate';
import Add_prod_second_map from './pages/Add_prod_second_map';
import Demo_Manage from './pages/Demo_Manage';
import Add_product_sec from './pages/Add_product_sec';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <ToastContainer></ToastContainer>
  <Routes>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/' element={<Sec_Dash />}></Route>
    <Route path='/dashboard' element={<Sec_Dash />}></Route>
    <Route path='/Mange_cotegories' element={<Manage_categories />}></Route>
    <Route path='/product' element={<Add_product />}></Route>
    <Route path='/add_categories' element={<Add_categories />}></Route>
    <Route path='/manage_formal_outfit' element={<Manage_formal_outfit />}></Route>
    <Route path='/manage_party_outfit' element={<Manage_party_outfit />} ></Route>
    <Route path='/add_country' element={<Add_country />}></Route>
    <Route path='/comment' element={<Comment />}></Route>
    <Route path='/casual' element={<Casual />} ></Route>
    <Route path='/add_casual' element={<Add_Casual />}></Route>
    <Route path='/manage_casual' element={<Manage_Casual />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
    <Route path='/price' element={<Price_table />}></Route>
    <Route path='/table_data' element={<Table_Data />}></Route>
    <Route path='/form' element={<Form />}></Route>
    <Route path='/Manage_cargo' element={<Manage_cargo />}></Route>
    <Route path='/manage_chambary' element={<Manage_Chambary />}></Route>
    <Route path='/manage_polo_shirt' element={<Manage_poloPshirt />}></Route>
    <Route path='/manage_jean_jacket' element={<Manage_poloPshirt />}></Route>
    <Route path='/edit_casual' element={<Edit_casual />}></Route>
    {/* <Route path='/Add22' element={<Add_product022 />}></Route> */}
    <Route path='/demo' element={<Demo />}></Route>
    <Route path='/form_one' element={<Form_one />}></Route>
    <Route path='/add_party' element={<Add_party />}></Route>
    <Route path='/add_casual' element={<Add_Casual />}></Route>
    <Route path='/add_cargo' element={<Add_cargo />}></Route>
    <Route path='/add_chambary' element={<Add_Chambary />}></Route>
    <Route path='/customer' element={<Customer_Manage/>}></Route>
    <Route path='/Edit_cate' element={<Edit_cate />}></Route>
    <Route path='/Add_prod_second_map' element={<Add_prod_second_map />}></Route>
    <Route path='/Demo_Manage' element={<Demo_Manage />}></Route>
    <Route path='/Add_product_sec' element={<Add_product_sec />}></Route>
  </Routes>
  </BrowserRouter>
 </div>
  );
}
export default App;

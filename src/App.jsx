import { Route, Routes } from "react-router-dom"
import Admin from "./pages/admin/Admin"
import Customer from "./pages/admin/customer/Customer"
import Seller from "./pages/admin/seller/Seller"
import Store from "./pages/admin/store/Store"
import CreateCustomer from "./pages/admin/createCustomer/CreateCustomer"
import Details from "./pages/admin/details/Details"
import Auth from "./pages/auth/Auth"
import Login from "./pages/login/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="createCustomer" element={<CreateCustomer />} />
            <Route path="customer" element={<Customer />} />
            <Route path="customer/:id" element={<Details />} />
            <Route path="seller" element={<Seller />} />
            <Route path="store" element={<Store />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

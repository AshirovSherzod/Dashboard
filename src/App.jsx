// import { useState } from 'react'

import { Route, Routes } from "react-router-dom"
import Admin from "./pages/admin/Admin"
import Customer from "./pages/admin/customer/Customer"
import Seller from "./pages/admin/seller/Seller"
import Store from "./pages/admin/store/Store"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="customer" element={<Customer />} />
          <Route path="seller" element={<Seller />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

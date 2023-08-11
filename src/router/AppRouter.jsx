/*React elements */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Pages*/
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage"
import Login from "../auth/Login";
import Register from "../auth/Register";
import UpdateProduct from "../auth/UpdateProduct";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import EditProduct from "../auth/EditProduct";

/*Components*/
import Navbar from "../components/Navbar";
import AuthProvider, { AuthContext } from "../Context/AuthContext";
import UserPage from "../pages/UserPage";



function AppRouter() {

    return (

        <Router>
            <AuthProvider>
                <AuthContext.Consumer>
                    {({ login }) => (
                        <>
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/products" element={<ProductsPage />} />
                                {login && (
                                    <>
                                        <Route path="/upProduct" element={<UpdateProduct />} />
                                        <Route path="/product/edit/:id" element={<EditProduct />} />
                                        <Route path="/user" element={<UserPage />} />
                                    </>
                                )}
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/product/:id" element={<ProductDetailPage />} />
                                <Route path="/*" element={<NotFoundPage />} />
                            </Routes>
                        </>
                    )}
                </AuthContext.Consumer>
            </AuthProvider>
        </Router>

    )
}

export default AppRouter
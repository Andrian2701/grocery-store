import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AllProductsPage,
  AuthPage,
  HomePage,
  LoginPage,
  ProductPage,
  RegisterPage,
} from "../../pages";
import { Layout } from "../../layout";
import { ExclusiveOffers } from "../../containers";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}>
          <Route path="/:category" element={<ExclusiveOffers />} />
        </Route>
        <Route path="/:category/all" element={<AllProductsPage />} />
        <Route path="/product/:name" element={<ProductPage />} />
      </Route>
      <Route path="auth" element={<AuthPage />} />
      <Route path="auth/login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

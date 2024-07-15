import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AccountPage,
  AllProductsPage,
  AuthPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  RegisterPage,
} from "../../pages";
import { Layout } from "../../layout";
import { ExclusiveOffers } from "../../containers";
import { ScrollToTop } from "./ScrollToTop";

export const Router = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}>
          <Route path=":category" element={<ExclusiveOffers />} />
        </Route>
        <Route path=":category/all" element={<AllProductsPage />} />
        <Route path=":category/:name" element={<ProductPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

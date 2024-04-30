import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage, HomePage, LoginPage, RegisterPage } from "../../pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="auth/login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

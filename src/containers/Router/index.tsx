import { AuthPage, HomePage } from "../../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="auth" element={<AuthPage />} />
    </Routes>
  </BrowserRouter>
);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from "./Content";
import { Error404 } from "./components/Error404";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

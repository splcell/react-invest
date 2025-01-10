import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage/ui/MainPage";
import { ProfilePage } from "../../../pages/ProfilePage";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile/:ticker" element={<ProfilePage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage/ui/MainPage";
import { ProfilePage } from "../../../pages/ProfilePage";
import { MarketPage } from "../../../pages/MarketPage/ui/MarketPage";
import { IndustriesPage } from "../../../pages/IndustriesPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile/:ticker" element={<ProfilePage />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="/market/:sector/industries" element={<IndustriesPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

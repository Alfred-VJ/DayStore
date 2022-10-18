import { Route, Routes } from "react-router";
import Home from "../components/home/Home";

export const HomeRoute = () => {
    return <Routes>
        <Route path="/DayStore/Home" element={<Home />} />
    </Routes>
}
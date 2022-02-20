import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameScreen from "../components/GameScreen";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GameScreen />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}


const NotFound = () => <h1>Not Found</h1>;
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./components/Footer";

export default function app() {
    return (
        <Router>
            <div className="flex flex-col h-screen bg-gray-100">
                <div className="flex-grow flex items-center justify-center">
                <AppRoutes />
                </div>
                <Footer />
            </div>
            

        </Router>
    );
}

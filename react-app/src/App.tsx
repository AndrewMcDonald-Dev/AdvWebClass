import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/App.scss";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const AboutPage = () => <h1>About</h1>;
const ContactPage = () => <h1>Contact</h1>;
const NotFoundPage = () => <h1>404</h1>;
const LoginPage = () => <h1>Login</h1>;
const RegisterPage = () => <h1>Register</h1>;
const WallPage = () => <h1>Wall</h1>;

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/wall" element={<WallPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

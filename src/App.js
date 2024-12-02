import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewsDetailPage from "./pages/NewsDetailPage";
import NewsCategoriPage from "./pages/NewsCategoriPage";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post/:id" element={<NewsDetailPage />} />
                    <Route path="/category" element={<NewsCategoriPage />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
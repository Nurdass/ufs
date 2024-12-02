import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Имитация загрузки данных
        setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5 секунды
    }, []);

    return isLoading ? (
        <Spinner />
    ) : (
        <main>
            <section className="mobile-block">
                <div className="container">
                    <h1 className="title">2024 Новости UFS-309</h1>
                    <div className="news-list">
                        <NewsCard />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;
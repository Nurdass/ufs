import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function NewsCategoriPage() {
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
        <section className="mobile-block">
            <div className="container">
                <h1 className="title">Категориялар</h1>
                <div className="category-list">
                    <Link to="/" className="category-list_item">
                        <img
                            className="category-list_icon"
                            src="./images/icon.svg"
                            alt="UFS-309"
                        />
                        <strong className="category-list_name">UFS-309</strong>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NewsCategoriPage;
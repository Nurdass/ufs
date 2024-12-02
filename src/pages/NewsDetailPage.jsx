import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function NewsDetailPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [fight, setFight] = useState(null);

    useEffect(() => {
        const fights = {
            1: {
                title: "Джон Джонс VS Стипе Миочич",
                category: "Тяжелый вес",
                date: "17 нояб 8:00",
                description: "Главный бой турнира UFC 309.",
                image: "/images/nnn.jpg",
            },
            2: {
                title: "Чарльз Оливейра VS Майкл Чендлер",
                category: "Легкий вес",
                date: "17 нояб 8:00",
                description: "Оливейра и Чендлер устроили невероятный бой.",
                image: "/images/bbbb.jpg",
            },
        };

        setTimeout(() => {
            setFight(fights[id]);
            setIsLoading(false);
        }, 2000); // Имитация загрузки
    }, [id]);

    return isLoading ? (
        <Spinner />
    ) : fight ? (
        <section className="mobile-block">
            <div className="container">
                <h1 className="title">{fight.title}</h1>
                <h4 className="news-detail-date">{fight.date}</h4>
                <img
                    src={fight.image}
                    className="news_detail-img"
                    alt={fight.title}
                />
                <p className="news-detail-des">{fight.description}</p>
            </div>
        </section>
    ) : (
        <p className="vvvv">Бой не найден.</p>
    );
}

export default NewsDetailPage;
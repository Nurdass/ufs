import { Link } from "react-router-dom";

function NewsCard(props) {
    const fights = [
        { id: 1, nnn: "Главный бой", title: "Джон Джонс VS Стипе Миочич", category: "Тяжелый вес", date: "17 нояб 8:00" },
        { id: 2, nnn: "Со-главный бой", title: "Чарльз Оливейра VS Майкл Чендлер", category: "Легкий вес", date: "17 нояб 8:00" },
        { id: 3, nnn: "Бой", title: "Бо Никал VS Пол Крэиг", category: "Средний вес", date: "17 нояб 8:00" },
    ];

    return fights.map((fight) => (
        <article className="news-card" key={fight.id}>
            <h4 className="news-card__nnn">{fight.nnn}</h4>
            <h3 className="news-card__title">{fight.title}</h3>
            <h4 className="news-card__category">{fight.category}</h4>
            <strong className="news-card__date">{fight.date}</strong>
            <Link to={`/post/${fight.id}`} className="button primary">Подробно</Link>
        </article>
    ));
}

export default NewsCard;
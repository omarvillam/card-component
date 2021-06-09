import { EntryCollection } from 'contentful';
import React, { useEffect, useState } from 'react'
import { getCards } from '../../services/Contentful';
import { ICardFields } from '../../services/contentful-types';
import { useCurrencyFormatter } from '../../utility/currency';
import styles from './card.module.scss'

export default function Card(): JSX.Element {
    const [cards, setCards] = useState<EntryCollection<ICardFields>>();
    const formatCurrency = useCurrencyFormatter('USD');

    useEffect(() => {
        getCards().then((data) => {
            setCards(data);
        });
    }, []);

    return <React.Fragment>
        {cards?.items.map((card, idx) => (
            <article className={styles.card} key={idx}>
                <div className={styles.image}>
                    <img src={card.fields.image?.fields.file.url} alt="Card" />
                    <p>{formatCurrency(card.fields.price)}</p>
                </div>
                
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h1>{card.fields.title}</h1>
                        <time>{card.fields.duration}<span>hr</span></time>
                    </div>

                    <p>{card.fields.description}</p>

                </div>
            </article>
        ))}
    </React.Fragment>;
}
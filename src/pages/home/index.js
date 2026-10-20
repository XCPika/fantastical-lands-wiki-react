import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';


export default function HomePage() {

    return (
        <section className="home-page stone-border">
            <div className="home-hero">
                <p className="home-eyebrow">A Minecraft origins adventure</p>
                <h1>Shape your origin. Forge your legend.</h1>
                <p className="home-intro">
                    Fantastical Lands expands the Origins experience with unique classes,
                    races, abilities, and custom-made items and blocks. Choose how you
                    play, discover what your origin can do, and make the world your own.
                </p>
                <div className="home-actions">
                    <Link className="home-action home-action-primary" to="/classes">Explore classes</Link>
                    <Link className="home-action" to="/races">Discover races</Link>
                </div>
            </div>

            <div className="home-highlights">
                <article className="home-highlight">
                    <span className="home-highlight-number">01</span>
                    <h2>Choose your path</h2>
                    <p>
                        Find a class and race that suit your playstyle, each with their
                        own identity and impact on your adventure.
                    </p>
                </article>
                <article className="home-highlight">
                    <span className="home-highlight-number">02</span>
                    <h2>Master your abilities</h2>
                    <p>
                        Explore active and passive powers designed to make every origin
                        feel distinct.
                    </p>
                </article>
                <article className="home-highlight">
                    <span className="home-highlight-number">03</span>
                    <h2>Make use of new items</h2>
                    <p>
                        Custom items and blocks extend the Origins system and open up
                        new possibilities.
                    </p>
                    <Link className="home-text-link" to="/items">Browse items <span aria-hidden="true">→</span></Link>
                </article>
            </div>

            <aside className="home-coming-soon">
                <span className="home-coming-label">On the horizon</span>
                <p>
                    Lootable, explorable structures and new enemies are planned for
                    future updates.
                </p>
            </aside>
        </section>
    )
}
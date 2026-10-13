import ProductCard from "./components/ProductCard.jsx";
import "./App.css";

const products = [
    {
        title: "Laptop",
        price: "$899",
        description: "A reliable everyday workhorse, ready for big ideas and long days.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    },
    {
        title: "Smartphone",
        price: "$699",
        description: "A bright, quick pocket companion for all the things you do.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
    },
    {
        title: "Wireless Headphones",
        price: "$149",
        description: "Rich, easy-listening sound with room to focus wherever you are.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
    },
];

function App() {
    return (
        <main className="storefront">
            <header className="store-header">
                <a className="wordmark" href="#home" aria-label="Good Things home">
                    good<span>things</span><i aria-hidden="true">.</i>
                </a>
                <p className="header-note">A little better, every day.</p>
                <a className="header-link" href="#collection">The collection <span aria-hidden="true">↓</span></a>
            </header>

            <section className="collection" id="collection" aria-labelledby="collection-title">
                <div className="collection-intro">
                    <div>
                        <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" /> Carefully considered essentials</p>
                        <h1 id="collection-title">Tech that fits<br />your kind of <em>day.</em></h1>
                    </div>
                    <p className="intro-copy">Useful by nature. A pleasure to use.<br />Meet your new everyday favourites.</p>
                </div>

                <div className="product-container">
                    {products.map((product) => (
                        <ProductCard key={product.title} {...product}>
                            Buy Now
                        </ProductCard>
                    ))}
                </div>
            </section>

            <footer className="store-footer">
                <span>GOOD THINGS, CHOSEN WELL</span>
                <span>Thoughtful tech for everyday life <b aria-hidden="true">✳</b></span>
            </footer>
        </main>
    );
}

export default App;
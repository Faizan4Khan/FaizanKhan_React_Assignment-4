const placeholderImage = "https://placehold.co/800x600/e9e8e2/252622?text=Product";

function ProductCard(props) {
    const {
        title = "Product Name",
        price = "$0",
        description = "No description available.",
        image = placeholderImage,
        children = "Buy Now",
    } = props;

    return (
        <article className="product-card">
            <div className="product-image-wrap">
                <img
                    className="product-image"
                    src={image}
                    alt={title}
                    onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = placeholderImage;
                    }}
                />
                <span className="product-tag">Good pick</span>
            </div>
            <div className="product-details">
                <div className="product-heading">
                    <h2 className="product-title">{title}</h2>
                    <p className="product-price">{price}</p>
                </div>
                <p className="product-description">{description}</p>
                <button className="product-button" type="button">
                    <span>{children}</span>
                    <span className="button-arrow" aria-hidden="true">↗</span>
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
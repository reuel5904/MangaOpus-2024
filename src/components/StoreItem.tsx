import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number
    title: string
    url: string
    originalPrice: number
    salePrice: number | null
    rating: number
    description: string
}

export function StoreItem({ id, title, url, originalPrice }: StoreItemProps) {
    const quantity = 0;

    return (
        <div className="card" data-book-id={id}>
            <img className="card__image" src={url} alt={title} />
            <div className="card__content">
                <div className="card__content--text">
                    <h3 className="card__content--text-title">{title}</h3>
                    <p className="card__content--text-price">{formatCurrency(originalPrice)}</p>
                </div>
                <div className="card__content--cart">
                    {quantity === 0 ? 
                    (
                        <button className="card__content--cart-button">+ Add to Cart</button>
                    ) : (
                        <>
                            <div className="card__content--cart-quantity">
                                <button className="card__content--cart-quantity-button">-</button>
                                <span className="card__content--cart-quantity-amount">{quantity} in cart</span>
                                <button className="card__content--cart-quantity-button">+</button>
                            </div>
                            <div className="card__content--cart-remove">
                                <button className="card__content--cart-remove-button">Remove</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
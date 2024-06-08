import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';

export function Store() {
    return (
        <>
            <h1>Store Page</h1>
            <div className="products">
                {
                    storeItems.map(item => (
                        <div className="product" key={item.id}>
                            <StoreItem {...item} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
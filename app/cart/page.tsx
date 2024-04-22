import { getCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import Header from "../components/Header/Header";
import { getFirstPictureUrl } from "@/lib/db/picture";

export const metadata = {
  title: "Your Cart - Flowmazon",
};

export default async function CartPage() {
  const cart = await getCart();

return (
    <div>
        <Header pos={'cart'}/>
        <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
        {cart?.items.map(async (cartItem) => {
            const firstPictureUrl = await getFirstPictureUrl(cartItem.product);

            return (
                <CartEntry
                    cartItem={cartItem}
                    firstPictureUrl={firstPictureUrl}
                    key={cartItem.id}
                    setProductQuantity={setProductQuantity}
                />
            );
        })}
        {!cart?.items.length && <p>Your cart is empty.</p>}
        <div className="flex flex-col items-end sm:items-center">
            <p className="mb-3 font-bold">
                Total: {formatPrice(cart?.subtotal || 0)}
            </p>
            <button className="btn-primary btn sm:w-[200px]">Checkout</button>
        </div>
    </div>
);
}
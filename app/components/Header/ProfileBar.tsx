import ProfileBtn from '../ProfileBtn/ProfileBtn';
import { getCart } from '@/lib/db/cart';
import ShoppingCartButton from './Navbar/ShoppingCartButton';
import SearchButton from './Navbar/searchButton';

export default async function ProfileBar() {
    const cart = await getCart();

    return (
        <div className="navbar-end">
            <ProfileBtn />
            
            <SearchButton />

            <ShoppingCartButton cart={cart} />
            
        </div>
    );
}


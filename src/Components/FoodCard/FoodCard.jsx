import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../Hook/UseCart";


const FoodCard = ({ item }) => {

    const { name, image, price, recipe , _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = UseCart();
    console.log(user)
    

    const HandleToCart = (item) => {
        console.log(item);
        if (user && user.email) {

            const cartItem = {
                menuItemId: _id,
                userName:user.displayName,
                email: user.email,
                userImage: user.photoURL,
                name,
                image,
                price,         
            }
                
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your data has been saved.',
                            showConfirmButton: true,
                            // timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Login First',
                text: "Otherwise you won't be able to access recipe details!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} className="w-full" alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => HandleToCart(item)}
                        className="btn btn-outline btn-warning border-0 border-b-4 mt-4"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
// import React from 'react';

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((imgResponse) => {
                if (imgResponse) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(imgURL);
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then((data) => {
                            console.log('after posting new menu item', data.data);
                            if(data.data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: true,
                                    // timer: 1500,
                                    confirmButtonText:'Ok'
                                  })
                            }
                        })
                }
            })

    };

    console.log(img_hosting_token)

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Add An Item</title>
            </Helmet>

            <SectionTitle subHeading="What's new?" heading="ADD AN ITEM"></SectionTitle>

            <div className="bg-[#E8E8E8] lg:px-11 py-8 mb-4 rounded-lg">

                <form onSubmit={handleSubmit(onSubmit)} className="mx-3">
                    {/* for name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    {/* for category */}
                    <div className=" md:flex my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Category*</span>
                            </label>
                            <select defaultValue="Pick One"
                                {...register("category", { required: true })}
                                className="select select-bordered"
                            >
                                <option disabled>Pick One</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                                <option value="dessert">Dessert</option>
                                <option value="desi">Desi</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* for price */}
                        <div className="form-control w-full mt-3 md:mt-0 md:ml-4">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Price*</span>
                            </label>
                            <input
                                type="number"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>
                    {/* for recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Recipe Details</span>
                        </label>
                        <textarea
                            {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details">

                        </textarea>
                    </div>
                    {/* for image */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Item Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-warning w-full " />
                    </div>
                    {/* submit button */}
                    <div className="text-center">
                        <input className="btn btn-outline btn-warning  border-4 mt-4 lg:w-2/4" type="submit" value="Add An Item" />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddItem;
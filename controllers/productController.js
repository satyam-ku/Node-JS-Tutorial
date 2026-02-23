import {products} from "../models/productModel.js"
export const getProducts = (request, response) => {
    response.json(products);
};

export const postProducts = (request, response) => {
    response.send("This is POST request of products");
};
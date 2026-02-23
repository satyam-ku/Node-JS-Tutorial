export const getProducts = (request, response) => {
    response.send("This is GET request of products");
};

export const postProducts = (request, response) => {
    response.send("This is POST request of products");
};
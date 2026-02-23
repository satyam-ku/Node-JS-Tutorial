import {users} from "../models/userModel.js"
export const getUsers = (request, response) => {
     response.json(users);
};

export const postUsers = (request, response) => {
    response.json(users);
};
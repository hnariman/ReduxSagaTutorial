import axios from "axios";


export const loadUsersApi = async () => {
    await axios.get("https://reduxsagaproject-default-rtdb.firebaseio.com/AllProducts.json")
}
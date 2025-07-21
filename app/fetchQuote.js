import axios from "axios";

const fetchQuote = async () => {
    try {
        const response = await axios.get("https://api.quotable.io/random");
        return response.data;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return null;
    }
}

export default fetchQuote;
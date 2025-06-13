import axios from 'axios';

const fetchGet = async () => {
    try {
        const response = await axios.get('https://bfarm-api.noip.in.th/macid');
        return response.data;
    } catch (error) {
        return error;
    }
};

export default fetchGet
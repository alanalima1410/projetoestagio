import axios, { AxiosInstance} from "axios";

const NodeAPI: AxiosInstance = axios.create({
    timeout: 60000,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Acess-Control-Expose-Headers':'Acess-Control-',
        'Acess-Control-Allow-Headers':
        'Acess-Control-, Origin, X-Requested-With, Content-Type, Accept',
        'Acess-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS, HEAD',
        'Acess-Control-Allow-Origin': '*',
        Allow: 'GET, PUT, DELETE, OPTIONS, HEAD',
    },
});

export { NodeAPI };


import API from "../API";
let DataSource = {
    getUser : async (id) => {
        const {data: response} = await API.get(`/user/${id}`);
        console.log(response);
        return response;
    },
    getPrincipal: async () => {
           const {data: response} = await API.get(`user/principal`);
            return response;
    },
    addChangeListener: () => { console.log('addChangeListener') },
    removeChangeListener: () => { console.log('removeChangeListener') },
}

export default DataSource;
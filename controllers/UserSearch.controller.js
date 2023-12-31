import User from "../models/User.model.js";

const UserSearchController = async (req, res) => {
    const {...data } = req.body
    let queryEntries = [];
    const query=[]
    
    if(data.query!=null){
        queryEntries = Object.entries(data.query);
    }

    for(let i = 0; i < queryEntries.length; i++) {
        query.push({[queryEntries[i][0]]:queryEntries[i][1]})
    }

    try {
        let response
        if(queryEntries.length > 0) {
            response = await User.find({$and:query})
        }
        else{
            response = await User.find({})
            console.log(response)
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export default UserSearchController
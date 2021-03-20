class Client{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    profile(){
        return `
            <img src="https://placekitten.com/360/360" alt="profile pic">
        `;
    }
}



export {Client};
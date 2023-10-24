


const GetUser = () => {
    const user = localStorage.getItem("user");
    if(user === null)
        return false
    else return user
}

const UserLocalStorage = {GetUser}
export default  UserLocalStorage
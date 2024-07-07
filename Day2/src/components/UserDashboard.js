import { useChangeUser } from "./UserContext";
import UserProfile from "./UserProfile";

function UserDashboard() {

    const changeUser = useChangeUser();

    return(
        <div>
            <h1>User Dashboard</h1>
            <button onClick={changeUser}>Change User</button>
            <UserProfile />
        </div>
    )
}

export default UserDashboard;
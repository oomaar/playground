import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./redux/actions/users";
import CarComp from "./CarComp";

const UserComp = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers([{
            id: 1,
            name: "Leanne Graham",
            company: {
                name: 'Romaguera',
                catchPhrase: "asdhajksd asd"
            }
        }]))}, []);

    return (
        <div>
            {users.length > 0 && users.map(user => (
                <CarComp user={user} key={user.id} />
            ))}
            {users.length === 0 && <p>no users</p>}
        </div>
    )
}

export default UserComp;

import React, { useEffect, useState } from "react";

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                result.json().then((resp) => {
                    setUsers(resp)
                })
            })

    }, []);

    return (
        <>
            <table border={1} cellPadding={10} cellSpacing={0} >
                <tbody>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                    {
                        users.map((items) =>
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{items.body}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>



        </>
    )

}
export default UseEffectAPI
import React, { useEffect, useState } from 'react';

export default function Select({ users }) {
    if (users === undefined) {
        // Affichez un indicateur de chargement ici si vous le souhaitez
        return <div>Loading...</div>;
    }

    return (
        <select style={{ width: "50%" }}>
            {users.map((user, index) => (
                <option key={index}>{user}</option>
            ))}
        </select>
    );
}
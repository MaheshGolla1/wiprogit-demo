import React from "react";

function PlayerList({ players, editPlayer, deletePlayer }) {
    return (
        <div className="card p-3 shadow">
            <h4 className="mb-3">Player List</h4>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Position</th>
                    <th>Club</th>
                    <th>Goals</th>
                    <th>Matches Played</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {players.map((player) => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.age}</td>
                        <td>{player.position}</td>
                        <td>{player.club}</td>
                        <td>{player.goals}</td>
                        <td>{player.matchesPlayed}</td>
                        <td>
                            <button
                                className="btn btn-sm btn-warning me-2"
                                onClick={() => editPlayer(player)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => deletePlayer(player.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerList;

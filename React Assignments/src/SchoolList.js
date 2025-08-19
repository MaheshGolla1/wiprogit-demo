function School({ name, location, strength }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{name}</h3>
            <p>Location: {location}</p>
            <p>Students Strength: {strength}</p>
        </div>
    );
}





function SchoolList() {
    const schools = [
        { id: 1, name: "ZION Public School", location: "Chennai", strength: 1200 },
        { id: 2, name: "ALWIN Valley School", location: "Bangalore", strength: 900 },
        { id: 3, name: "ROSE Carmel School", location: "Delhi", strength: 1500 }
    ];
    return (
        <div>
            <h2>School List</h2>
            {
                schools.map((s) => (
                    <School key={s.id}  name={s.name}    location={s.location}   strength={s.strength} />
                ))}
        </div>
    );
}
export default SchoolList;
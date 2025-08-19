import React, { Component } from "react";
class MovieForm extends Component {
    // constructor initializes state
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            director: "",
            year: "",
            genre: "Action",
            rating: "",
            description: "",
            platforms: {
                netflix: false,
                prime: false,
                disney: false,
                others: false,
            },
            movies: [],
            showForm: true,
        };
        console.log("constructor executed");
    }
    // it runs before every render
    static getDerivedStateFromProps(_nextProps, _prevState) {
        console.log("getDerivedStateFromProps executed");
        return null;
    }
    //it executes after first mount
    componentDidMount() {
        console.log("componentDidMount executed");
    }
    //it decides if re-render is needed
    shouldComponentUpdate(_nextProps, _nextState) {
        console.log("shouldComponentUpdate executed");
        return true;
    }
    //it reads DOM before it changes
    getSnapshotBeforeUpdate(_prevProps, _prevState) {
        console.log("getSnapshotBeforeUpdate executed");
        return null;
    }
    //it runs after updates
    componentDidUpdate(_prevProps, _prevState, _snapshot) {
        console.log("componentDidUpdate executed");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount executed");
    }
    // Handle changes for all the fields
    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            this.setState((prev) => ({
                platforms: { ...prev.platforms, [name]: checked },
            }));
            return;
        }
        // For the rest
        this.setState({ [name]: value });
    };
    // Handle form submit
    handleSubmit = (e) => {
        e.preventDefault();
        const { title, director, year, genre, rating, description, platforms } =
            this.state;
        // Converts to string
        const platformsPretty = Object.entries(platforms)
            .filter(([, isOn]) => isOn)
            .map(([key]) => {
                switch (key) {
                    case "netflix":
                        return "Netflix";
                    case "prime":
                        return "Amazon Prime";
                    case "disney":
                        return "Disney+";
                    default:
                        return "Others";
                }
            })
            .join(" ");
        // Construct one movie record
        const newMovie = {
            title,
            director,
            year,
            genre,
            rating,
            description,
            platforms: platformsPretty,
        };
        // Append to list and reset the form fields
        this.setState((prev) => ({
            movies: [...prev.movies, newMovie],
            title: "",
            director: "",
            year: "",
            genre: "Action",
            rating: "",
            description: "",
            platforms: { netflix: false, prime: false, disney: false, others: false },
        }));
    };
    toggleForm = () => this.setState((prev) => ({ showForm: !prev.showForm }));
    //returns the UI
    render() {
        console.log("render executed");
        const { title, director, year, genre, rating, description, platforms, movies, showForm } =
            this.state;
        return (
            <div className="container mt-4">
                {showForm && (
                    <div className="card p-4 mb-4">
                        <h4 className="mb-3">Add Movie</h4>
                        <form onSubmit={this.handleSubmit}>
                            {/* Movie Title (text) */}
                            <div className="mb-3">
                                <label className="form-label">Movie Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    value={title}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            {/* Director (text) */}
                            <div className="mb-3">
                                <label className="form-label">Director</label>
                                <input
                                    type="text"
                                    name="director"
                                    className="form-control"
                                    value={director}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            {/* Release Year (number) */}
                            <div className="mb-3">
                                <label className="form-label">Release Year</label>
                                <input
                                    type="number"
                                    name="year"
                                    className="form-control"
                                    value={year}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            {/* Genre (select) */}
                            <div className="mb-3">
                                <label className="form-label">Genre</label>
                                <select
                                    name="genre"
                                    className="form-select"
                                    value={genre}
                                    onChange={this.handleChange}
                                >
                                    <option>Action</option>
                                    <option>Comedy</option>
                                    <option>Drama</option>
                                    <option>Sci-Fi</option>
                                    <option>Horror</option>
                                </select>
                            </div>

                            {/* Rating (radio 1..5) */}
                            <div className="mb-3">
                                <label className="form-label">Rating</label>
                                <div>
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <label key={n} className="me-3">
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={String(n)}
                                                checked={rating === String(n)}
                                                onChange={this.handleChange}
                                                className="form-check-input me-1"
                                            />
                                            {n}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Description (textarea) */}
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    value={description}
                                    onChange={this.handleChange}
                                    rows="2"
                                />
                            </div>

                            {/* Platforms (checkbox group) */}
                            <div className="mb-3">
                                <label className="form-label">Available on Streaming Platforms</label>
                                <div>
                                    <label className="me-3">
                                        <input
                                            type="checkbox"
                                            name="netflix"
                                            checked={platforms.netflix}
                                            onChange={this.handleChange}
                                            className="form-check-input me-1"
                                        />
                                        Netflix
                                    </label>
                                    <label className="me-3">
                                        <input
                                            type="checkbox"
                                            name="prime"
                                            checked={platforms.prime}
                                            onChange={this.handleChange}
                                            className="form-check-input me-1"
                                        />
                                        Amazon Prime
                                    </label>
                                    <label className="me-3">
                                        <input
                                            type="checkbox"
                                            name="disney"
                                            checked={platforms.disney}
                                            onChange={this.handleChange}
                                            className="form-check-input me-1"
                                        />
                                        Disney+
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="others"
                                            checked={platforms.others}
                                            onChange={this.handleChange}
                                            className="form-check-input me-1"
                                        />
                                        Others
                                    </label>
                                </div>
                            </div>

                            {/* Submit */}
                            <button type="submit" className="btn btn-primary">
                                Add Movie
                            </button>
                        </form>
                    </div>
                )}
                {movies.length > 0 && (
                    <table className="table table-bordered">
                        <thead className="table-light">
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Release Year</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th>Available on Streaming Platforms</th>
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map((m, i) => (
                            <tr key={i}>
                                <td>{m.title}</td>
                                <td>{m.director}</td>
                                <td>{m.year}</td>
                                <td>{m.genre}</td>
                                <td>{m.rating}</td>
                                <td>{m.platforms}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}
export default MovieForm;
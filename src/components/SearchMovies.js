import React from 'react'

const SearchMovies = () => {

    return (
        <form className="form">
            <label className="label" htmlFor="query" >Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Enter a movie title" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}
export default SearchMovies
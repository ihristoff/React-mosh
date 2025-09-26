import { useState } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Button from 'react-bootstrap/Button';
import Like from './like';

    
function TableComponent() {
  const [movies, setMovies] = useState(getMovies());
  const handleDelete = (movie) => {
    const newMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(newMovies);
  }

  const handleLike = (movie) => {
  const newMovies = movies.map(m => 
    m._id === movie._id 
      ? { ...m, liked: !m.liked } 
      : m
  );
  setMovies(newMovies);
};

  if (movies.length === 0) return <p>There are no movies in the database.</p>;
  return (
    <>
      <p>Showing {movies.length} movies in the database.</p>
      <table className='table'>
        <thead>
          <tr>

          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>Like</th>
          <th>Action</th>
          

        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like liked={movie.liked} onClick={() => handleLike(movie)} />  </td>
            <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(movie)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default TableComponent;

  
 

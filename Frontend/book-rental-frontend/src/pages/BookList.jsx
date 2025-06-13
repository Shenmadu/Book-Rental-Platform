import React, { useState } from 'react';
import { useGetBooksQuery } from '../features/api/booksApi';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BookCard from '../components/BookCard';

const BookList = () => {
  const { data, error, isLoading, isError } = useGetBooksQuery();
  const [authorFilter, setAuthorFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  if (isLoading) return <div className="text-center my-4"><Spinner animation="border" /></div>;

  if (isError) {
    toast.error('Failed to fetch books');
    return <p className="text-danger text-center">Something went wrong.</p>;
  }

  // Filtering logic
  const filteredBooks = data?.data?.filter(book => {
    const matchesAuthor = authorFilter
      ? book.author.toLowerCase().includes(authorFilter.toLowerCase())
      : true;

    const matchesAvailability =
      availabilityFilter === 'all'
        ? true
        : availabilityFilter === 'available'
        ? book.is_available
        : !book.is_available;

    return matchesAuthor && matchesAvailability;
  });

  return (
    <div className="container my-4">
      <h2 className="mb-3">All Books</h2>

      {/* Filter Controls */}
      <div className="d-flex justify-content-between mb-4">
        <div>
          <label htmlFor="authorFilter" className="form-label">Filter by Author:</label>
          <input
            id="authorFilter"
            type="text"
            className="form-control"
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
            placeholder="Enter author name"
          />
        </div>
        <div>
          <label htmlFor="availabilityFilter" className="form-label">Filter by Availability:</label>
          <select
            id="availabilityFilter"
            className="form-select"
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="rented">Rented</option>
          </select>
        </div>
      </div>

      {/* Book Cards */}
      <div className="row">
        {filteredBooks?.length > 0 ? (
          filteredBooks.map(book => (
            <div className="col-md-4" key={book.id}>
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <p className="text-center">No books match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;

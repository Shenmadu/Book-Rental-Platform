import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useGetBookByIdQuery,
  useRentBookMutation,
  useReturnBookMutation
} from '../features/api/booksApi';
import { Container, Card, Button, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetBookByIdQuery(id);
  const book = data?.data; // Adjusting to access nested "data"

  const [rentBook, { isLoading: renting }] = useRentBookMutation();
  const [returnBook, { isLoading: returning }] = useReturnBookMutation();

  const handleRent = async () => {
    try {
      await rentBook(id).unwrap();
      toast.success('Book rented successfully!');
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to rent book');
    }
  };

  const handleReturn = async () => {
    try {
      await returnBook(id).unwrap();
      toast.success('Book returned successfully!');
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to return book');
    }
  };

  if (isLoading) return <Spinner animation="border" className="m-4" />;
  if (error) return <p className="text-danger m-4">Error loading book.</p>;

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h2>{book?.title || 'Title not available'}</h2>
        <p><strong>Author:</strong> {book?.author || 'Author not available'}</p>
        <p><strong>Published Date:</strong> {book?.published_date || 'Date not available'}</p>
        <p><strong>Status:</strong> {book?.is_available ? 'Available' : 'Rented'}</p>

        {book?.is_available ? (
          <Button onClick={handleRent} disabled={renting}>
            {renting ? <Spinner size="sm" animation="border" /> : 'Rent This Book'}
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleReturn} disabled={returning}>
            {returning ? <Spinner size="sm" animation="border" /> : 'Return Book'}
          </Button>
        )}

        <Button variant="link" className="mt-3" onClick={() => navigate(-1)}>← Back</Button>
      </Card>
    </Container>
  );
};

export default BookDetail;

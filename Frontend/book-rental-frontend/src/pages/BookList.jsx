import { useGetBooksQuery } from '../features/api/booksApi';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BookCard from '../components/BookCard';

const BookList = () => {
  const { data, error, isLoading, isError } = useGetBooksQuery();

  if (isLoading) return <div className="text-center my-4"><Spinner animation="border" /></div>;

  if (isError) {
    toast.error('Failed to fetch books');
    return <p className="text-danger text-center">Something went wrong.</p>;
  }

  return (
    <div className="container my-4">
      <h2 className="mb-3">All Books</h2>
      <div className="row">
        {data?.data?.map(book => (
          <div className="col-md-4" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;

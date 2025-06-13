import { Link } from 'react-router-dom';
import { Badge, Card } from 'react-bootstrap';

const BookCard = ({ book }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
      <Badge bg={book.is_available ? 'success' : 'secondary'}>
        {book.is_available ? 'Available' : 'Rented'}
      </Badge>
      <div className="mt-3">
        <Link to={`/book/${book.id}`} className="btn btn-outline-primary btn-sm">
          View Details
        </Link>
      </div>
    </Card.Body>
  </Card>
);
export default BookCard;

// src/pages/AddBook.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAddBookMutation } from '../features/api/booksApi';
import { Form, Button, Container, Alert, Spinner, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await addBook(data).unwrap();
      toast.success('Book added successfully!');
      reset();
      navigate('/');
    } catch (error) {
      toast.error(error.data?.message || 'Failed to add book.');
    }
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h3>Add New Book</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book title"
              {...register('title', { required: 'Title is required' })}
              isInvalid={errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author's name"
              {...register('author', { required: 'Author is required' })}
              isInvalid={errors.author}
            />
            <Form.Control.Feedback type="invalid">
              {errors.author?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Published Date</Form.Label>
            <Form.Control
              type="date"
              {...register('published_date', { required: 'Published date is required' })}
              isInvalid={errors.published_date}
            />
            <Form.Control.Feedback type="invalid">
              {errors.published_date?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Spinner animation="border" size="sm" /> : 'Add Book'}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddBook;

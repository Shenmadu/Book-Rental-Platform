<?php

namespace App\Repositories;

use App\Models\Book;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class BookRepository implements BookRepositoryInterface
{
    public function getAllBooks(array $filters): LengthAwarePaginator
    {
        $query = Book::query();

        if (isset($filters['author'])) {
            $query->where('author', $filters['author']);
        }

        return $query->paginate(10);
    }

    public function getBookById(int $id)
    {
        return Book::findOrFail($id);
    }

    public function createBook(array $data)
    {
        return Book::create($data);
    }

    public function rentBook(int $id)
    {
        $book = $this->getBookById($id);

        if (!$book->is_available) {
            throw new \Exception('Book is already rented.');
        }

        $book->is_available = false;
        $book->save();

        return $book; // Return the updated book
    }


    public function returnBook(int $id)
    {
        $book = $this->getBookById($id);
        $book->is_available = true;
        $book->save();

         return $book;  // Return updated book
    }
}


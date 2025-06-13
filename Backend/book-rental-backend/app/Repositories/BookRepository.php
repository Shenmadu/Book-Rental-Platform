<?php

namespace App\Repositories;

use App\Models\Book;

class BookRepository implements BookRepositoryInterface
{
    public function getAllBooks(array $filters)
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
        $book->is_available = false;
        $book->save();
    }

    public function returnBook(int $id)
    {
        $book = $this->getBookById($id);
        $book->is_available = true;
        $book->save();
    }
}


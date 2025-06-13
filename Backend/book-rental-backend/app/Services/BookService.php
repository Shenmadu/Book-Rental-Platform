<?php

namespace App\Services;

use App\Repositories\BookRepositoryInterface;

class BookService
{
    protected $bookRepository;

    public function __construct(BookRepositoryInterface $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function getAllBooks($filters)
    {
        return $this->bookRepository->getAllBooks($filters);
    }

    public function getBookById($id)
    {
        return $this->bookRepository->getBookById($id);
    }

    public function createBook($data)
    {
        return $this->bookRepository->createBook($data);
    }

    public function rentBook($id)
    {
        return $this->bookRepository->rentBook($id);
    }

    public function returnBook($id)
    {
        return $this->bookRepository->returnBook($id);
    }
}


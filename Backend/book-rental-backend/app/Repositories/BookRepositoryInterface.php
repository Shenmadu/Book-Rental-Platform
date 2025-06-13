<?php 
namespace App\Repositories;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface BookRepositoryInterface
{
    public function getAllBooks(array $filters): LengthAwarePaginator;
    public function getBookById(int $id);
    public function createBook(array $data);
    public function rentBook(int $id);
    public function returnBook(int $id);
}


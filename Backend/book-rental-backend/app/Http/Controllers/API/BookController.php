<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookRequest;
use App\Http\Resources\BookResource;
use App\Services\BookService;

class BookController extends Controller
{
    protected $bookService;

    public function __construct(BookService $bookService)
    {
        $this->bookService = $bookService;
    }

    public function index()
    {
        $books = $this->bookService->getAllBooks([]);
        return BookResource::collection($books);
    }

    public function show($id)
    {
        $book = $this->bookService->getBookById($id);
        return new BookResource($book);
    }

    public function store(BookRequest $request)
    {
        $book = $this->bookService->createBook($request->validated());
        return new BookResource($book);
    }

    public function rent($id)
    {
        try {
            $book = $this->bookService->rentBook($id);
            return new BookResource($book);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    public function returnBook($id)
    {
        $book = $this->bookService->returnBook($id);
        return new BookResource($book);
    }
}

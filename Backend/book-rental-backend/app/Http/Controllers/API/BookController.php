<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use App\Http\Resources\BookResource;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::paginate(10);
        return BookResource::collection($books);
    }


    public function show($id)
    {
        $book = Book::findOrFail($id);
        return new BookResource($book);
    }

    public function store(BookRequest $request)
    {
        $book = Book::create($request->validated());
        return new BookResource($book);
    }

    public function rent($id)
    {
        $book = Book::findOrFail($id);
        if (!$book->is_available) {
            return response()->json(['message' => 'Book is already rented'], 422);
        }
        $book->is_available = false;
        $book->save();
        return new BookResource($book);
    }

    public function returnBook($id)
    {
        $book = Book::findOrFail($id);
        $book->is_available = true;
        $book->save();
        return new BookResource($book);
    }
}
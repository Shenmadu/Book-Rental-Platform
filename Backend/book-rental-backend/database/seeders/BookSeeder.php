<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'The Great Gatsby',
                'author' => 'F. Scott Fitzgerald',
                'published_date' => '1925-04-10',
                'is_available' => true,
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'published_date' => '1949-06-08',
                'is_available' => true,
            ],
            [
                'title' => 'To Kill a Mockingbird',
                'author' => 'Harper Lee',
                'published_date' => '1960-07-11',
                'is_available' => false,
            ],
            [
                'title' => 'Brave New World',
                'author' => 'Aldous Huxley',
                'published_date' => '1932-08-31',
                'is_available' => true,
            ],
            [
                'title' => 'Moby-Dick',
                'author' => 'Herman Melville',
                'published_date' => '1851-10-18',
                'is_available' => false,
            ],
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}

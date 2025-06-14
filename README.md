# 📚 Book Rental Platform

A full-stack mini-book rental application built using:

**Backend**: Laravel 11 (REST API)
**Frontend**: React + Redux Toolkit + RTK Query + Bootstrap
Includes: Pagination, Book Filtering, Renting/Returning, Form Validation, Toast Notifications

---

## Features

###  Book Management
- View paginated book list
- Filter by author or availability
- Add new books with validation

### Book Details
- View full details
- Rent/Return book based on availability

### Tech Stack
- **Frontend**: React, Redux Toolkit, React Hook Form, React Router, Bootstrap, Toastify
- **Backend**: Laravel 11, MySQL, Eloquent ORM, Sanctum (if auth needed)
- **API**: Fully RESTful endpoints

---

## Backend (Laravel 11 API)

### Prerequisites
- PHP >= 8.2
- Composer
- MySQL/MariaDB
- Laravel CLI

###  Installation

```bash
cd book-rental-backend

# Install dependencies
composer install

# Copy .env and configure DB
cp .env.example .env

# Open `.env` and set DB config
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dev_book_rental
DB_USERNAME=root
DB_PASSWORD=

# Create database manually or via CLI
mysql -u root -p -e "CREATE DATABASE dev_book_rental;"

# Generate app key & run migrations
php artisan key:generate
php artisan migrate

# (Optional) Seed sample data
php artisan db:seed
php artisan db:seed --class=BookSeeder

# Start the Laravel server
php artisan serve

## 📦 Frontend (React) Setup

### Prerequisites

- Node.js (v18+ recommended)
- npm

### 📁 Installation & Setup

```bash
# 1. Navigate to the frontend folder
cd book-rental-frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
Visit: http://localhost:5173

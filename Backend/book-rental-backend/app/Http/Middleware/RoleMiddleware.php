<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, $role)
    {
        if ($request->user()->role !== $role) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return $next($request);
    }
}
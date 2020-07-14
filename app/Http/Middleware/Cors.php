<?php

# add headers to incoming requests to enable CORS
# https://laravel-nepal.com/cross-origin-resource-sharing-cors-laravel-5/

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     * enabling cors
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-XSRF-TOKEN, X-Requested-With, X-localization');
            
            // ->header('Access-Control-Allow-Methods', '*')
            // ->header('Access-Control-Allow-Headers', '*');
    }
}

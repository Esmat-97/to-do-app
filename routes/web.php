<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;


// Route::get('/', function () {
//     return view('welcome');
// });


// Route::get('/', function () {
//     return "hello students";
// });

// Route::get('/', function () {
//     $students=['ali','mohamed','fatma'];
//     return $students;
// });


Route::get('/array', [TaskController:: class ,"show"] );
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

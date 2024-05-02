<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/tasks', [TaskController:: class ,"show"] );
Route::get('/tasks/{id}', [TaskController:: class ,"detail"] );
Route::delete('/tasks/{id}',[TaskController:: class ,"destroy"]);
Route::post('/tasks',[TaskController:: class ,"store"]);






Route::get('/users', [UserController:: class ,"show"] );
Route::get('/users/{id}', [UserController:: class ,"detail"] );
Route::delete('/users/{id}',[UserController:: class ,"destroy"]);
Route::post('/users',[UserController:: class ,"store"]);
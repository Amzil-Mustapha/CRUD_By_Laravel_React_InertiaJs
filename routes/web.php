<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\GlobalController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
})->middleware('login')->name('home');

Route::get('/login', function () {
    return Inertia::render('Sign_in');
})->name('login');

Route::post('/Onlogin', [GlobalController::class, 'login']);
Route::get('/logout', [GlobalController::class, 'logout']);

Route::get('/article/index', [ArticleController::class, 'index'])->middleware('login');
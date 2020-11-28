<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use App\Http\Controllers\UserController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;

Route::group(['middleware' => []], function () {
  Route::put('login', [UserController::class, 'login']);
  Route::put('register', [UserController::class, 'register']);
  Route::put('createWebuser', [UserController::class, 'createWebuser']);
  Route::patch('userPreferences',[UserController::class, 'updatePreferencesUnauthorized']);
});
Route::group(['middleware' => ['auth:api']], function () {
  Route::get('users/{user}',[UserController::class, 'show']);
  Route::patch('user',[UserController::class, 'update']);
  Route::put('deleteWebuser',[UserController::class, 'delete']);
  Route::put('addFileProfile', [FileController::class, 'addPicture']);
  Route::put('getAllProfileFiles', [FileController::class, 'getAllProfileFiles']);
  Route::put('loadFile', [FileController::class, 'loadFile']);
  Route::put('deleteFile', [FileController::class, 'deleteFile']);
  Route::put('deleteFiles', [FileController::class, 'deleteFiles']);
  Route::put('changeFileSortOrder', [FileController::class, 'changeFileSortOrder']);
  Route::put('getUserPayments', [PaymentController::class, 'getUserPayments']);
  Route::put('newUserPayment', [PaymentController::class, 'newUserPayment']);
  Route::put('chatProfileSearch', [ProfileController::class, 'chatProfileSearch']);
  
  Route::put('test',[UserController::class, 'test']);
});

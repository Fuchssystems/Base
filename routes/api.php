<?php

use Illuminate\Http\Request;

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

Route::group(['middleware' => ['cors']], function () {
  Route::put('login', 'UserController@login');
  Route::put('register', 'UserController@register');
  Route::put('createWebuser', 'UserController@createWebuser');
  Route::patch('userPreferences','UserController@updatePreferencesUnauthorized');
});
Route::group(['middleware' => ['cors', 'auth:api']], function () {
  Route::get('users/{user}','UserController@show');
  Route::patch('user','UserController@update');
  Route::put('deleteWebuser','UserController@delete');
  Route::put('addFileProfile', 'FileController@addPicture');
  Route::put('getAllProfileFiles', 'FileController@getAllProfileFiles');
  Route::put('loadFile', 'FileController@loadFile');
  Route::put('deleteFile', 'FileController@deleteFile');
  Route::put('deleteFiles', 'FileController@deleteFiles');
  Route::put('changeFileSortOrder', 'FileController@changeFileSortOrder');

  Route::put('test','UserController@test');
});


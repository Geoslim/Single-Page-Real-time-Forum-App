<?php

Route::apiResource('questions', 'QuestionController');

Route::apiResource('categories', 'CategoryController');

Route::apiResource('/questions/{question}/reply', 'ReplyController');

Route::post('/like/{reply}', 'LikeController@like');
Route::delete('/like/{reply}', 'LikeController@unlike');




Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::get('/help-us-make-something-amazing', function(){
    return redirect('https://docs.google.com/forms/d/e/1FAIpQLSdL71zGPPJO17AMfhWoaChfgGKuZp4HVhRZ9wMSLFH10nZZlg/viewform?usp=sf_link');
});
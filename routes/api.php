<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/campaign/subscribe', 'Api\CampaignController@subscribe');
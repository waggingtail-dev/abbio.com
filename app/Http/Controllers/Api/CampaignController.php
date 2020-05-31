<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\ActiveCampaign;
use Illuminate\Routing\Controller;

class CampaignController extends Controller
{


    public function subscribe(Request $request)
    {
        $newsletter = new ActiveCampaign();
        
        $result = $newsletter->subscribe([]);

        if($result) {
            return response()->json([
                'message' => 'Success',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Failed',
            ], 400);
        }
    }


}

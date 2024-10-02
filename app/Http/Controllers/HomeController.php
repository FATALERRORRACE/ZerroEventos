<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Home;

class HomeController extends Controller{

    public function getHomePage(){
        return view(
            'home/index', 
            [
            ]
        );
    }
}

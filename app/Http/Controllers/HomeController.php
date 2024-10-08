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

    public function getFormNewColumn(Request $request){
        $request->headers->set("Accept", "text/html");
        $request->headers->set("Content-Type", "text/html");
        return view('app/formColumn', 
            [
            ]
        );
    }
}

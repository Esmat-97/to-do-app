<?php

namespace App\Http\Controllers;

use \App\Models\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //


    function show(){
        
        $tasks = User::all();
        return $tasks;
      
    }


}
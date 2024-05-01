<?php

namespace App\Http\Controllers;


use \App\Models\Task;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    //
    function show(){
        
        $tasks = Task::all();
        return $tasks;
      
    }
}

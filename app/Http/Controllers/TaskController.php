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


    function detail($id){
        
        $task = Task::find($id);
        return $task;
      
    }


    public function destroy($id)
    {
        $user = Task::find($id);
        if (!$user) {
            return response()->json(['message' => 'Task not found'], 404);
        }
        $user->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}

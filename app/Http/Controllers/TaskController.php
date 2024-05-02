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





    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'description' => 'required|string',
            'user_id' => 'required|exists:users,id', // Make sure user_id exists in the users table
            'completed' => 'boolean', // Optionally, validate completed as boolean
        ]);

        // Create the task using the Task model
        $task = Task::create([
            'description' => $validatedData['description'],
            'user_id' => $validatedData['user_id'],
            'completed' => $request->has('completed') ? $validatedData['completed'] : false, // Default to false if not provided
        ]);

        // Return a JSON response with the newly created task and status code 201 (Created)
        return response()->json($task, 201);
    }
}


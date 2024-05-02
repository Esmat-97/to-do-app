<?php

namespace App\Http\Controllers;

use \App\Models\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //


    function show(){
        
        $tasks = User::all();
        return response()->json($tasks);
      
    }


    function detail($id){
        
        $task = User::find($id);
        if (!$task) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($task);
    }


    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
      
    }




<?php

namespace App\Http\Controllers;

use App\Models\todos_model;
use Illuminate\Http\Request;

class todos_controller extends Controller
{
    //GET call: gets all to do items in that list
    public function index(Request $request)
    {
        if($request->has('todolistID')){
            return todos_model::where('todolistID', $request->todolistID)->get();
        }
        return todos_model::all();
    }

    //POST call: create a new to do item
    public function store(Request $request)
    {
        $add_todo = todos_model::create([
            'description' => $request->description,
            'status' => false,
            'todolistID' => $request->todolistID,
        ]);
        return $add_todo;
    }

    //GET call: get one to do item
    public function show(string $id)
    {
        return todos_model::findOrFail($id);
    }

    //PUT call: update one to do item
    public function update(Request $request, string $id)
    {
        $update_todo = todos_model::findOrFail($id);
        $update_todo->update([
            'description' => $request->description ?? $update_todo->description,
            'status' => $request->status,
        ]);
        return $update_todo;
    }

    //DELETE call: delete a to do item
    public function destroy(string $id)
    {
        todos_model::findOrFail($id)->delete();
        return response()->json(['message' => 'To do item has been deleted']);
    }
}

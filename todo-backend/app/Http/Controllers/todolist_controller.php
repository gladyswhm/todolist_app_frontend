<?php

namespace App\Http\Controllers;

use App\Models\todolist_model;
use Illuminate\Http\Request;

class todolist_controller extends Controller
{
    //GET call: displays all lists
    public function index()
    {
        return todolist_model::with('todos')->get();
    }

    //POST call: create new list
    public function store(Request $request)
    {
        $list = todolist_model::create(['titlename' => $request->titlename]);
        return $list;
    }

    //GET call: display one list selected
    public function show(string $id)
    {
        return todolist_model::with('todos')->findOrFail($id);
    }

    //PUT call: update a list
    public function update(Request $request, string $id)
    {
        $list = todolist_model::findOrFail($id);
        $list->update(['titlename' => $request->titlename]);
        return $list;
    }

    //DELETE call: delete a list
    public function destroy(string $id)
    {
        todolist_model::findOrFail($id)->delete();
        return response()->json(['message' => 'List has been deleted']);
    }
}

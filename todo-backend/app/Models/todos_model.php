<?php

namespace App\Models;

use App\Models\todolist_model;
use Illuminate\Database\Eloquent\Model;

class todos_model extends Model
{
    protected $table = 'todos';
    protected $fillable = ['description','status','todolistID'];
    public function todolist(){
        return $this->belongsTo(todolist_model::class, 'todolistID');
    }
}

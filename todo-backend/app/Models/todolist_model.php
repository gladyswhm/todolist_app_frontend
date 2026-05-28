<?php

namespace App\Models;

use App\Models\todos_model;
use Illuminate\Database\Eloquent\Model;

class todolist_model extends Model
{
    protected $table = 'todolist';
    protected $fillable = ['titlename'];
    public function todos()
    {
        return $this->hasMany(todos_model::class, 'todolistID'); //relationship: one list has many to do items
    }
}

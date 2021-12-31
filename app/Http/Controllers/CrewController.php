<?php

namespace App\Http\Controllers;


use App\Models\Crew;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CrewController extends Controller
{
    public function index() {
        $data = Crew::all();
        return Inertia::render('Welcome', ['crew' => $data]);
    }

    public function store(Request $request) {
        $crew = Crew::create(['name' => $request->name]);

        return redirect()->back()
            ->with('message', 'Post Created Successfully.');

    }

    public function destroy(Crew $crew) {
//        $crew = Crew::findOrFail($request->id);
//        $crew->delete($crew);
        $crew->delete();
        return redirect()->back();
    }
}

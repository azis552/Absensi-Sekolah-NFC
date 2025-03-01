<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Absensi;
use Illuminate\Http\Request;

class AbsensiController extends Controller
{
    public function index()
    {
        $absensi = Absensi::all();
        return response()->json($absensi);
    }

    public function store(Request $request)
    {
        $absensi = Absensi::create($request->all());
        return response()->json($absensi);
    }
}

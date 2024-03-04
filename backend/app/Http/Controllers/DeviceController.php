<?php

namespace App\Http\Controllers;
use App\Models\Device;

use Illuminate\Http\Request;

class DeviceController extends Controller
{
    public function devices(){
        return Device::orderby('d_id', 'desc')->get();
    }

    public function addDevice(Request $request){
        $device = $request->validate([
            'd_type' => ['required']
        ]);

        Device::insert($device);
    }
}

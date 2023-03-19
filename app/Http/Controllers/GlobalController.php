<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GlobalController extends Controller
{

    public function login(Request $request)
    {

        $user = User::all()
            ->where('username', $request->username)
            ->where('password', '=', $request->password)
            ->first();

        if ($user) {
            session(['username' => $user->username, 'id' => $user->id, 'email' => $user->email]);
            return to_route('home');
        }

        session(['info' => 'User Not Found!']);
        return to_route('login');
    }

    public function logout()
    {
        session()->flush();
        return redirect('/login');
    }
}
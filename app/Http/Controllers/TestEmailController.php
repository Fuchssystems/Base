<?php

namespace App\Http\Controllers;

use App\Mail\RegistrationConfirmationLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TestEmailController extends Controller
{
    //
    public function sendTestEmail(Request $request)
    {
      Mail::to('promotion@fuchs4d.de')->send(new RegistrationConfirmationLink());
    }
}

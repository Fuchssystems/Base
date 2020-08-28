<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\Payment;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
  // get new payment id
  public function newUserPayment(Request $request)
  {
    $details = $request->only(['details']);
    $details = $details['details'];
    $purchaseUnits = $details['purchase_units'];
    $purchaseUnits = $purchaseUnits[0];
    $paymentsCaptured = $purchaseUnits['payments'];
    $captures = $paymentsCaptured['captures'];
    $captures = $captures[0];

    $payment = new Payment;
    $payment->user_id = Auth::user()->id;
    $sqlDate = date('Y-m-d H:i:s', strtoTime($captures['create_time']));
    $payment->received_at_dateTime = $sqlDate;
    $payment->amount_received = $captures['amount']['value'];
    $payment->currency_received = $captures['amount']['currency_code'];
    $payment->payment_method = 'Paypal';
    $payment->provider_paymentId = $details['id'];
    $payment->transaction_status = $captures['status'];
    $payment->save();

    $status = 200;

    return response()->json([$status]);
  }

  // get all transaction for the current user
  public function getUserPayments(Request $request)
  {
      return response()->json([
        'payments' => Auth::user()->payments,
      ]);
  }
}

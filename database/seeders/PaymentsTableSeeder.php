<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Payment;

class PaymentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $arr_received_at_dateTime = ['2020-08-14', '2020-08-15', '2020-08-22', '2020-08-24'];
      $arr_amount_received = ['123.45', '1435.98', '98.76', '0.90'];
      $arr_transaction_status = ['COMPLETED', 'COMPLETED', 'COMPLETED', 'COMPLETED'];

      for ($i = 0; $i < count($arr_received_at_dateTime); $i++)
      {
        $payment = new Payment;
        $payment->user_id = 2; // User Testname
        $payment->received_at_dateTime = $arr_received_at_dateTime[$i];
        $payment->amount_received = $arr_amount_received[$i];
        $payment->currency_received = 'EUR';
        $payment->payment_method = 'Paypal';
        $payment->provider_paymentId = 'COMPLETED';
        $payment->transaction_status = $arr_transaction_status[$i];
        $payment->save();
      }
    }
}

<?php

namespace Database\Factories;

use App\Models\Payment;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Payment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
          'received_at_dateTime' => $this->faker->dateTimeBetween('-1 years', 'now'),
          'amount_received' => $this->faker->randomFloat(2, 0.50, 1000),
          'currency_received' => 'EUR',
          'payment_method' => 'Paypal',
          'provider_paymentId' => $this->faker->ein, // like 12-3456789
          'transaction_status' => 'COMPLETED',
        ];
    }
}

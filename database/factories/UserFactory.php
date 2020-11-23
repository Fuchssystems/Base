<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

use Faker\Factory as Faker;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = Faker::create('de_DE');
        return [
            'name' => $faker->name,
            // 'email' => $faker->unique()->safeEmail,
            'email' => $faker->randomNumber(6) . $faker->unique()->safeEmail,
            'password' => bcrypt('!123456!'),
            'is_admin' => false,
            'language' => 'de-de',
            'last_Token' => '',
        ];
    }
}

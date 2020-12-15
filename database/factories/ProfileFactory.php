<?php

namespace Database\Factories;

use App\Models\Profile;
use Illuminate\Database\Eloquent\Factories\Factory;

use Faker\Factory as Faker;

class ProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Profile::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
      $faker = Faker::create('de_DE');
        return [
            'name' => '', // copied from User in UsersTableSeeder
            'country_code_iso_3166_alpha_2' => 'DE',
            'areacode' => $faker->postcode,
            'city' => $faker->city,
            'birthday' => $faker->dateTimeBetween('-90 years', '-12 years'),
            'gender_male_female_diverse_null' => $faker->randomElement(['male','female','diverse']),
            'latitude' => $faker->latitude(47.27, 55.05),
            'longitude' => $faker->longitude(15.03, 5.87),
        ];
    }
}

<?php

// google API functions
// https://stackoverflow.com/questions/3807963/how-to-get-longitude-and-latitude-of-any-address

namespace App\lib;

class GoogleAPI
{
  public static function getLongitudeLatidudeFromAdress ($adress)
    {
      $apiKey = env('GOOGLE_API_KEY'); // Google maps now requires an API key.
      // Get JSON results from this request
      $geo = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address='.urlencode($adress).'&sensor=false&key='.$apiKey);
      $geo = json_decode($geo, true); // Convert the JSON to an array

      $result = new \stdClass();
      $result->latitude = 0;
      $result->longitude = 0;
      if (isset($geo['status']) && ($geo['status'] == 'OK')) {
        $result->latitude = $geo['results'][0]['geometry']['location']['lat']; // Latitude
        $result->longitude = $geo['results'][0]['geometry']['location']['lng']; // Longitude
      }
      return $result;
    }
}

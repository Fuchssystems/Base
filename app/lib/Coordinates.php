<?php

// measure distance between 2 coordinates
// https://stackoverflow.com/questions/10053358/measuring-the-distance-between-two-coordinates-in-php
// modified to return rounded whole km

namespace App\lib;

class Coordinates
{
  public static function haversineGreatCircleDistance ($latitudeFrom, $longitudeFrom,
    $latitudeTo, $longitudeTo, $earthRadius = 6371000)
      {
        // convert from degrees to radians
        $latFrom = deg2rad($latitudeFrom);
        $lonFrom = deg2rad($longitudeFrom);
        $latTo = deg2rad($latitudeTo);
        $lonTo = deg2rad($longitudeTo);

        $latDelta = $latTo - $latFrom;
        $lonDelta = $lonTo - $lonFrom;

        $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) +
        cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));
        return round(($angle * $earthRadius / 1000), 0);
      }
}

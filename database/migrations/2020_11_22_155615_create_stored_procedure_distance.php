<?php

// https://stackoverflow.com/questions/42821816/how-to-query-distances-between-two-coordinates-with-eloquent
// create stored procedure in mySQL
// returns distance in km (degrees * 111.045)

use Illuminate\Database\Migrations\Migration;

class CreateStoredProcedureDistance extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $sql = "
          CREATE FUNCTION haversine(
                  lat1 FLOAT, lon1 FLOAT,
                  lat2 FLOAT, lon2 FLOAT
              ) RETURNS FLOAT
              NO SQL DETERMINISTIC
              COMMENT 'Returns the distance in degrees on the Earth
                      between two known points of latitude and longitude'
          BEGIN
              RETURN DEGREES(ACOS(
                        COS(RADIANS(lat1)) *
                        COS(RADIANS(lat2)) *
                        COS(RADIANS(lon2) - RADIANS(lon1)) +
                        SIN(RADIANS(lat1)) * SIN(RADIANS(lat2))
                      ));
          END
        ";

        DB::unprepared($sql);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      DB::unprepared('DROP FUNCTION IF EXISTS haversine');
    }
}

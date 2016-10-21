<?php

function GreenYellowRed($number) {
  $number--; // working with 0-99 will be easier

  if ($number < 50) {
    // green to yellow
    $r = floor(255 * ($number / 50));
    $g = 255;

  } else {
    // yellow to red
    $r = 255;
    $g = floor(255 * ((50-$number%50) / 50));
  }
  $b = 0;

  return "$r,$g,$b";
}
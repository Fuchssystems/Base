<?php
# localization functions

function m($messageId, $parameterArrayReceived) {
  $parameterArray = $parameterArrayReceived;
  if (isset($parameterArray['fieldId'])) {
    $fieldId = $parameterArray['fieldId'];
    $parameterArray['fieldname_dativSingular'] = __('fieldname_dativSingular_' . $fieldId);
  }
  return ucfirst(__($messageId, $parameterArray));
}

@component('mail::message')
Hallo {{ $username }},

Sie haben sich auf {{ config('app.name') }} registriert.
Zum Abschluß bestätigen Sie bitte Ihre email-Adresse.

@component('mail::button', ['url' => $url])
Bestätigungs-Link
@endcomponent

Der Link ist gültig bis {{ $validUntil }}.

{{ config('app.name') }} freut sich auf Sie.
@endcomponent

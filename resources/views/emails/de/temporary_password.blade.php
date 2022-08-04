@component('mail::message')
Hallo {{ $username }},

Sie haben ein temporäres Passwort für {{ config('app.name') }} angefordert.

Temporäres Passwort: {{ $password }}

Sie können sich jetzt mit dem neuen Passwort einloggen.
Bitte vergeben Sie ein neues, selbst gewähltes Paßwort unmittelbar nach dem einloggen.

{{ config('app.name') }} freut sich auf Sie.
@endcomponent

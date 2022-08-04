@component('mail::message')
Hello {{ $username }},

You have requested a temporary password for {{ config('app.name') }}.

Temporary password: {{ $password }}

You may log in with the new password now.
Please define a new password choosen by yourself immediatly after logging in.

{{ config('app.name') }} is looking forward for you.
@endcomponent

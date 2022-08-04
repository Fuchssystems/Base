@component('mail::message')
Hola {{ $username }},

Te has registrado en {{ config('app.name') }}.
Finalmente, confirme su dirección de correo electrónico.

@component('mail::button', ['url' => $url])
Enlace de confirmación
@endcomponent

El enlace es válido hasta {{ $validUntil }}.

{{ config('app.name') }} te espera.
@endcomponent

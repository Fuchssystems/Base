@component('mail::message')
Hola {{ $username }},

Ha solicitado una contraseña temporal {{ config('app.name') }}.

Contraseña temporal: {{ $password }}

Ahora puede iniciar sesión con la nueva contraseña.
Asigne una nueva contraseña seleccionada por usted inmediatamente después de iniciar sesión.

{{ config('app.name') }} te espera.
@endcomponent

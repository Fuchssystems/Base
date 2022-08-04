@component('mail::message')
Hello {{ $username }},

You have registered on {{ config('app.name') }}.
To complete the registration please confirm your email address.

@component('mail::button', ['url' => $url])
Confirmation link
@endcomponent

The link is valid until {{ $validUntil }}.

{{ config('app.name') }} is looking forward for you.
@endcomponent

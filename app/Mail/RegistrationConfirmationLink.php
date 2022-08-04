<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegistrationConfirmationLink extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $view = 'emails.' . $this->data['locale'] . '.registration_confirmation_link';
        return $this->markdown($view,[
          'username' => $this->data['username'],
          'url' => $this->data['url'],
          'validUntil' => $this->data['validUntil'],
        ])->subject($this->data['subject']);
    }
}

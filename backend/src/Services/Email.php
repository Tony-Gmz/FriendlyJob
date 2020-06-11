<?php

namespace App\Services;

use App\Entity\CheckEmail;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

class Email
{
    private $em;
    private $mailer;

    public function __construct(EntityManagerInterface $em, MailerInterface $mailer)
    {
        $this->em = $em;
        $this->mailer = $mailer;
    }


    public function sendEmail(User $user, CheckEmail $checkEmail)
    {
        $email = (new TemplatedEmail())
            ->from('friendlyjob.services@gmail.com')
            //! a décommenter
            //->to($user->getEmail())
            ->to('friendlyjob.services@gmail.com')
            ->subject('Confirmation de votre inscription')
            ->htmlTemplate('email/signup.html.twig')
            ->context([
                'user' => $user,
                'check_email' => $checkEmail,
            ])
        ;

        $this->mailer->send($email);
    }

    public function generateToken()
    {
        return rtrim(strtr(base64_encode(random_bytes(32)), '+/','-_'), '=');
    }
}
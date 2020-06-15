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

    /**
     * This method is used to send an email to the user who registers for a validation
     */
    public function sendEmail(User $user, CheckEmail $checkEmail)
    {
        // We create the Email template and we retrieve the current user's email to send him a registration email
        $email = (new TemplatedEmail())
            ->from('friendlyjob.services@gmail.com')
            ->to($user->getEmail())
            ->subject('Confirmation de votre inscription')
            ->htmlTemplate('email/signup.html.twig')
            ->context([
                'user' => $user,
                'check_email' => $checkEmail,
            ])
        ;

        // With the mailer component from Symfony, we send an email to the user
        $this->mailer->send($email);
    }

    /**
     * This method is used to generate a random token for the registration validation
     */
    public function generateToken()
    {
        return rtrim(strtr(base64_encode(random_bytes(32)), '+/','-_'), '=');
    }
}
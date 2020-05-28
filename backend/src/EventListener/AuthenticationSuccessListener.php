<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\Security\Core\User\UserInterface;

class AuthenticationSuccessListener
{

    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

        $department = [ 'id' => $user->getDepartment()->getId(), 
                        'name' => $user->getDepartment()->getName(), 
                        'number' => $user->getDepartment()->getNumber(),
                    ];

        $data['user'] = [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
            'firstname' => $user->getFirstname(),
            'lastname' => $user->getLastname(),
            'image' => $user->getImage(),
            'about' => $user->getAbout(),
            'department' => $department,
            'isLogged' => true,
        ];

        $user = $event->getUser();

        //dd($event, $data, $user);

        $event->setData($data);
    }
}
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
        // We store the data and the user from the event
        $data = $event->getData();
        $user = $event->getUser();

        // If the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return;
        }

        // We retrieve the user's checkEmail
        $checkEmail = $user->getCheckEmail();

        // If $checkEmail is not null, we retrieve the user's IsConfirmed
        // Else $checkEmail is null, the user has no entry, so the user is automatically confirmed
        if ( $checkEmail != null ){
            $isConfirmed = $checkEmail->getIsConfirmed();
        }
        else {
            $isConfirmed = true;
        }

        // Little security to avoid that the token is sent if the user is not confirmed
        /*
        if ( $isConfirmed == false )
        {
            $data['token']= 'Invalid Token';
        }
        */

        // We store the department's data from the user who sets off the event
        $department = [ 
                        'id' => $user->getDepartment()->getId(), 
                        'name' => $user->getDepartment()->getName(), 
                        'number' => $user->getDepartment()->getNumber(),
                    ];

        // We store all the user's data, with a 'isLogged' key at true, and the 'isConfirmed' key
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
            'isConfirmed' => $isConfirmed,
        ];

        // We retrieve the current User data
        $user = $event->getUser();

        // We set all the recovered data to the event
        $event->setData($data);
    }
}
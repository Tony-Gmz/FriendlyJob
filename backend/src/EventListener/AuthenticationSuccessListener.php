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

        // On récuperer le checkEmail
        $checkEmail = $user->getCheckEmail();

        // Si $checkEmail est null donc l'utilisateur n'a pas d'entrée dans notre checkEmail
        // on n'éxécute la méthode getIsConfirmed
        // si checkEmail == null notre utilisateur est confirmé ( mécanique commande possible pour clean la table checkEmail)
        if ( $checkEmail != null ){
            $isConfirmed = $checkEmail->getIsConfirmed();
        }
        else {
            $isConfirmed = true;
        }

        //! Petite sécurité pour éviter que le token soit envoyé si l'utilisateur n'est pas confirmé
        /*
        if ( $isConfirmed == false )
        {
            $data['token']= 'Invalid Token';
        }
        */

        $department = [ 
                        'id' => $user->getDepartment()->getId(), 
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
            'isConfirmed' => $isConfirmed,
        ];

        $user = $event->getUser();

        //dd($event, $data, $user);

        $event->setData($data);
    }
}
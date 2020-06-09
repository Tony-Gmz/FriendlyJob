<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class RatingVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['ADD'])
            && $subject instanceof \App\Entity\Rating;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();
        $rating = $subject;
        $demand = $rating->getDemand();
        $friendlyUserDemand = $demand->getFriendlyUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'ADD':
                // Condition AUTEUR DE LA NOTE (exemple)
                if ($user == $friendlyUserDemand) {
                    return true;
                }
                // logic to determine if the user can EDIT
                // return true or false
                break;
        }

        return false;
    }
}

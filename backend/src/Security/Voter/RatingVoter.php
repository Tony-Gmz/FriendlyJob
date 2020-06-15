<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class RatingVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // https://symfony.com/doc/current/security/voters.html
        // We want to set authorizations on the Rating::Add method
        return in_array($attribute, ['ADD'])
            && $subject instanceof \App\Entity\Rating;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        // We get the user thanks to his token
        $user = $token->getUser();
        // We recover the Rating object
        $rating = $subject;
        // We recover the demand associated with the evaluation
        $demand = $rating->getDemand();
        // We recover the FriendlyUser association with the demand
        $friendlyUserDemand = $demand->getFriendlyUser();
        // If the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // We check conditions and return true to grant permission
        switch ($attribute) {
            case 'ADD':
                // If the user is the friendlyUser associated with the demand, we grant access
                // Else, we do not grant access
                if ($user == $friendlyUserDemand) {
                    return true;
                }
                break;
        }

        return false;
    }
}

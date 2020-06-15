<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class DemandVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // https://symfony.com/doc/current/security/voters.html
        // We want to set authorizations on the Demand::Edit and Delete method
        return in_array($attribute, ['EDIT', 'DELETE'])
            && $subject instanceof \App\Entity\Demand;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        // We get the user thanks to his token
        $user = $token->getUser();
        // We recover the FriendlyUser who made the Demand
        $friendlyUser = $subject->getFriendlyUser();
        // We recover the JobWorker who got the Demand
        $jobWorker = $subject->getJobworker();
        // We recover the demand's status
        $status = $subject->getStatus();

        // If the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // We check conditions and return true to grant permission
        switch ($attribute) {
            case 'DELETE':
                // If the user is a JobWorker and the demand's status match the Regex
                // The JobWorker can delete the demand
                if ($user == $jobWorker && preg_match('/^(Annul(e|é)e|Termin(e|é)e)$/', ucfirst(strtolower($status)))) {
                    return true;
                }

                // If the user is a FriendlyUser and the demand's status match the Regex
                // The FriendlyUser can delete the demand
                if ($user == $friendlyUser && preg_match('/^(Refus(e|é)e)$/', ucfirst(strtolower($status)))) {
                    return true;
                }
                break;
            case 'EDIT':
                // If the user is a FriendlyUser or a JobWorker
                // He can modify the demand
                if ($user == $friendlyUser || $user == $jobWorker) {
                    return true;
                }
                break;
        }

        return false;
    }
}

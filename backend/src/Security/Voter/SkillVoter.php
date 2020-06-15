<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class SkillVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // https://symfony.com/doc/current/security/voters.html
        // We want to set authorizations on the Skill::Edit and Delete method
        return in_array($attribute, ['EDIT', 'DELETE'])
            && $subject instanceof \App\Entity\Skill;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        // We get the user thanks to his token
        $user = $token->getUser();
        // We recover the skill associated with the user
        $userSkill = $subject->getUser();
        // If the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // We check conditions and return true to grant permission
        switch ($attribute) {
            // For EDIT and DELETE
            case 'EDIT':
            case 'DELETE':
                // If the user is the user associated with the skill you want to edit or delete, we grant access
                // Else, we do not grant access
                if ($user == $userSkill) {
                    return true;
                }
                break;
        }

        return false;
    }
}

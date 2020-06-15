<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     * This method is used to logged an user
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {   
        // If the user is logged we redirect him
        if ($this->getUser()) {
            return $this->redirectToRoute('documentation');
        }

        // Get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // Last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        // Render the EasyAdmin login form
        return $this->render('@EasyAdmin/page/login.html.twig', [
            'last_username' => $lastUsername, 
            'error' => $error,
            'csrf_token_intention' => 'authenticate',
        ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     * This method is used to logout an user
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}

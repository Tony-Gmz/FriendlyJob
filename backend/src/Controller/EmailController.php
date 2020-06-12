<?php

namespace App\Controller;

use App\Repository\CheckEmailRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class EmailController extends AbstractController
{
    
    /**
     * @Route("/confirmation", name="confirm_email", methods={"GET"})
     * This method is used to confirm a user's email address
     */
    public function confirmEmail(CheckEmailRepository $checkEmailRepository)
    {
        
        // If the parameter GET in url named token is not set we throw a new Exception
        if ( !isset($_GET['token']) ) {
            throw new \Exception("Le token est introuvable dans l'url");
        }
        
        // We store the token in a variable
        $token = $_GET['token'];

        // We search for checkEmail data thanks to the Repository with the token value
        $checkEmail = $checkEmailRepository->findOneByToken($token);
        
        // If $checkEmail is null we throw a new Exception
        if ( $checkEmail == null ) {
            throw new \Exception("Le token pour l'utilisateur est introuvable");
        }
        
        // We store isConfirmed value in a variable
        $isConfirmed = $checkEmail->getIsConfirmed();
        
        // If $isConfirmed is true we redirect the user
        if ( $isConfirmed ) {
            return $this->redirectToRoute('documentation');
            // redirects externally
            //return $this->redirect('http://symfony.com/doc');
        }

        // We set the isConfirmed value to true
        $checkEmail->setIsConfirmed(1);
        
        // We call the EntityManagerInterface to persist the data
        $em = $this->getDoctrine()->getManager();
        $em->persist($checkEmail);
        $em->flush();
        
        // We store user object in a variable
        $user = $checkEmail->getUser();

        // We render a twig view with user parameter
        return $this->render('email/confirm.html.twig', [
            'user' => $user
        ]);
    }
}

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
        
        //! Existance de token en get dans l'url
        if ( !isset($_GET['token']) ) {
            throw new \Exception("Le token est introuvable dans l'url");
        }
        $token = $_GET['token'];

        $checkEmail = $checkEmailRepository->findOneByToken($token);
        
        //! Token introuvable par la qb en bdd
        if ( $checkEmail == null ) {
            throw new \Exception("Le token pour l'utilisateur est introuvable");
        }
        
        $isConfirmed = $checkEmail->getIsConfirmed();
        
        //! Rediriger l'utilisateur si il est déja confirmé
        if ( $isConfirmed ) {
            return $this->redirectToRoute('documentation');
            // redirects externally
            //return $this->redirect('http://symfony.com/doc');
        }

        $checkEmail->setIsConfirmed(1);
        $em = $this->getDoctrine()->getManager();
        $em->persist($checkEmail);
        $em->flush();
        
        $user = $checkEmail->getUser();

        return $this->render('email/confirm.html.twig', [
            'user' => $user
        ]);
    }
}

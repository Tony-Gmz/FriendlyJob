<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DocumentationController extends AbstractController
{
    /**
     * @Route("/", name="documentation")
     * This method is used to display the back office home page
     */
    public function homepage()
    {
        // We render our twig view
        return $this->render('documentation/index.html.twig');
    }
}

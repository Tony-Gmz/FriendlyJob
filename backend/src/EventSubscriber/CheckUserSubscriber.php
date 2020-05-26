<?php

namespace App\EventSubscriber;

use Lexik\Bundle\JWTAuthenticationBundle\Response\JWTAuthenticationFailureResponse;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class CheckUserSubscriber implements EventSubscriberInterface
{
    public function onKernelResponse(ResponseEvent $event)
    {
        $response = $event->getResponse();
        $path = $event->getRequest()->getPathInfo();
        $requestHeader = $event->getRequest()->headers->all();

        if ($response instanceof JWTAuthenticationFailureResponse && $path == '/api/v1/users/check')
        {
            //dd($requestHeader, $response);
            if (isset($requestHeader['authorization'])) {
                $response->setContent('{"code":401,"message":"Le token JWT saisie est incorrect","user": {"isLogged": false}}');
            } else {
                $response->setContent('{"code":401,"message":"Le token JWT est introuvable","user": {"isLogged": false}}');
            }
        }
        
    }

    public static function getSubscribedEvents()
    {
        return [
            'kernel.response' => 'onKernelResponse',
        ];
    }
}

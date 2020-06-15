<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\HttpFoundation\RequestStack;

class JWTCreatedListener 
{
    
    /**
     * @var RequestStack
     */
    private $requestStack;
    /**
     * @param RequestStack $requestStack
     */
    
    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }
    /**
     * @param JWTCreatedEvent $event
     * This method will run on a JWT token creation
     * @return void
     */
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        // We store the current Request
        $request = $this->requestStack->getCurrentRequest();
        
        // We retrieve the user role and email
        $payload = $event->getData();
        
        // We set an expiration date and hour for the token (everyday at 3 PM)
        $expiration = new \DateTime('+1 day');
        $expiration->setTime(15, 0, 0);

        // We store the expiration TimeStamp and the user ip
        $payload['exp'] = $expiration->getTimestamp();
        $payload['ip'] = $request->getClientIp();
        
        // We set the data
        $event->setData($payload);
        
        // We set the 'JWT' key to the event's header
        $header = $event->getHeader();
        $header['cty'] = 'JWT';

        // We set the header
        $event->setHeader($header);
    }
}

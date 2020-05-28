<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\HttpFoundation\RequestStack;

<<<<<<< HEAD
class JWTCreatedListener 
{
    
=======
class JWTCreatedListener
{
>>>>>>> 6e4acc8c30325be8a1d6d626ec79a2b9e6ee9b4f
    /**
     * @var RequestStack
     */
    private $requestStack;
<<<<<<< HEAD

=======
    
>>>>>>> 6e4acc8c30325be8a1d6d626ec79a2b9e6ee9b4f
    /**
     * @param RequestStack $requestStack
     */
    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }
<<<<<<< HEAD

=======
    
>>>>>>> 6e4acc8c30325be8a1d6d626ec79a2b9e6ee9b4f
    /**
     * @param JWTCreatedEvent $event
     *
     * @return void
     */
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        $request = $this->requestStack->getCurrentRequest();
        
        $payload = $event->getData();
        
        $expiration = new \DateTime('+1 day');
        $expiration->setTime(15, 0, 0);
        $payload['exp'] = $expiration->getTimestamp();
    
        $payload['ip'] = $request->getClientIp();
        
        $user = $event->getUser();

        $payload['user'] = [
            'id' => $user->getId(),
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
            'firstname' => $user->getFirstname(),
            'lastname' => $user->getLastname(),
            'image' => $user->getImage(),
            'about' => $user->getAbout(),
            'isLogged' => true,
        ];
        
        $event->setData($payload);
        
        //dd($payload, $event, $request, $user);
        
        $header = $event->getHeader();
        $header['cty'] = 'JWT';

        $event->setHeader($header);
    }
}

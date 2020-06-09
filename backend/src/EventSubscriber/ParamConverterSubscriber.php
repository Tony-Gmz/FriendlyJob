<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ParamConverterSubscriber implements EventSubscriberInterface
{
    public function onKernelException(ExceptionEvent $event)
    {
        $throwable = $event->getThrowable();
        $request = $event->getRequest();
        $statusCode = $throwable->getStatusCode();
        $pathInfo = $request->getPathInfo();
        
        if ( $throwable instanceof NotFoundHttpException && $statusCode == 404 && preg_match('`^\/api\/`', $pathInfo) ) {
            return $event->setResponse($this->setApiResponse());
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            'kernel.exception' => 'onKernelException',
        ];
    }

    public function setApiResponse()
    {
        $message = [
            'status' => 404,
            'message' => 'This ressource does not exist',
        ];
        $status = 404;

        $response = new JsonResponse(
            $message,
            $status
        );
        $response->headers->set('Content-Type', 'application/json');
        
        return $response;
    }
}

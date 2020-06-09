<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExceptionSubscriber implements EventSubscriberInterface
{
    public function onKernelException(ExceptionEvent $event)
    {
        $throwable = $event->getThrowable();
        $request = $event->getRequest();
        if (method_exists($throwable, 'getStatusCode')) {

            $statusCode = $throwable->getStatusCode();
        }
        else {
            $statusCode = null;
        }
        $pathInfo = $request->getPathInfo();
        
        if ( $throwable instanceof NotFoundHttpException && $statusCode == 404 && preg_match('`^\/api\/`', $pathInfo) ) {
            return $event->setResponse($this->setApiResponse404());
        }

        if ( $throwable instanceof AccessDeniedHttpException && $statusCode == 403 && preg_match('`^\/api\/`', $pathInfo) ) {
            return $event->setResponse($this->setApiResponse403());
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            'kernel.exception' => 'onKernelException',
        ];
    }

    public function setApiResponse404()
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

    public function setApiResponse403()
    {
        $message = [
            'status' => 404,
            'message' => "You do not have the permissions to access this request",
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

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
        // We store the throwable, which is a NotFoundHttpException object
        $throwable = $event->getThrowable();
        // We store the Request object
        $request = $event->getRequest();

        // We check if the 'getStatusCode' method exists
        // If it does not, we set the statusCode with a null value
        if (method_exists($throwable,'getStatusCode'))
        {
            $statusCode = $throwable->getStatusCode();
        }
        else {
            $statusCode = null;
        }

        // We store the path info where the request happened
        $pathInfo = $request->getPathInfo();
        
        // We send a JSON error message with a status code (ApiResponse404 method) to handle an error 404
        // Like this, we can treat every 404 error from every request
        if ( $throwable instanceof NotFoundHttpException && $statusCode == 404 && preg_match('`^\/api\/`', $pathInfo) ) {
            return $event->setResponse($this->setApiResponse404());
        }

        // We send a JSON error message with a status code (ApiResponse403 method) to handle an error 403
        // Like this, we can treat every 403 error from every request
        if ( $throwable instanceof AccessDeniedHttpException && $statusCode == 403 && preg_match('`^\/api\/`', $pathInfo) ) {
            return $event->setResponse($this->setApiResponse403());
        }
    }

    /**
     * This event is called on a kernel.exception
     */
    public static function getSubscribedEvents()
    {
        return [
            'kernel.exception' => 'onKernelException',
        ];
    }

    /**
     * This method is used to send a 404 status with a message in JSON format
     */
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

    /**
     * This method is used to send a 403 status with a message in JSON format
     */
    public function setApiResponse403()
    {
        $message = [
            'status' => 403,
            'message' => "You do not have the permission to access this request",
        ];
        $status = 403;

        $response = new JsonResponse(
            $message,
            $status
        );
        $response->headers->set('Content-Type', 'application/json');
        
        return $response;
    }
}

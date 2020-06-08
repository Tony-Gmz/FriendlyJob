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
        $route = $request->get('_route');

        //! Gestion Erreur Param Converter sur delete skill
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_skills_delete' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur edit skill
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_skills_edit' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur readById service
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_services_read_id' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur readByTitle service
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_services_read_title' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur getJobWorkerByServices service
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_services_jobworker' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur getJobWorkerByServices service
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_services_jobworker_price' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur getJobWorkerByServices service
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_services_jobworker_rating' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur getJobWorkersFromDepartmentByServices service
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_services_department_jobworker' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur getJobWorkersFromDepartmentByPrice service
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_services_department_jobworker_price' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur getJobWorkersFromDepartmentByRating service
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_services_department_jobworker_rating' ) {
            return $event->setResponse($this->setApiResponse());
        }

        //! Gestion Erreur Param Converter sur edit demande
        if ( $throwable instanceof NotFoundHttpException && $route == 'api_v1_demands_edit' ) {
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

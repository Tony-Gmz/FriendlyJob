<?php

namespace App\Repository;

use App\Entity\Service;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Service|null find($id, $lockMode = null, $lockVersion = null)
 * @method Service|null findOneBy(array $criteria, array $orderBy = null)
 * @method Service[]    findAll()
 * @method Service[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ServiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Service::class);
    }
    
    /**
     * Used to find all the JobWorkers according to the service they are related
     * We added some filter, to have them by price, rating, department, and by order
     */
    public function findJobworkerByService($serviceId, $departmentId = null, $price = null, $rating = null, $orderBy = 'ASC')
    {
        $qb = $this->createQueryBuilder('s');
        
        $qb
            ->addSelect('sk', 'u', 'dep', 'dem', 'r')
            ->join('s.skills', 'sk')
            ->join('sk.user', 'u')
            ->join('u.department', 'dep')
            ->leftJoin('u.jobWorkerDemands', 'dem')
            ->leftJoin('dem.rating', 'r')
            ->where('s.id = :id')
            ->setParameter('id', $serviceId)

        ;
        if ( $price != null) {
                
            $qb
                ->orderBy('sk.price', $orderBy)
            ;
        }
        if ( $rating != null) {

            $qb
                ->orderBy('r.star', 'DESC')
            ;
        }

        if ($departmentId != null)
        {
            $qb
                ->andWhere('dep.id = :id2')
                ->setParameter('id2', $departmentId)
            ;
            if ( $price != null) {
                
                $qb
                    ->orderBy('sk.price', $orderBy)
                ;
            }
            if ( $rating != null) {

                $qb
                    ->orderBy('r.star', 'DESC')
                ;
            }

        }

        //dd($qb->getQuery());
        //dd($qb->getQuery()->getResult());
        return $qb->getQuery()->getResult();
    }

    /**
     * Used to find all sub-services from one service
     */
    public function findSubServiceFromService($id)
    {
        $qb = $this->createQueryBuilder('s');

        $qb
            ->where('s.parentId = :id')
            ->setParameter('id', $id)
        ;
        //dd($qb->getQuery());
        //dd($qb->getQuery()->getResult());
        return $qb->getQuery()->getResult();
    }
}
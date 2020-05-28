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
    
    public function findJobworkerByService($id)
    {
        $qb = $this->createQueryBuilder('s');
        
        $qb
            ->addSelect('sk', 'u', 'dep', 'dem', 'r')
            ->join('s.skills', 'sk')
            ->join('sk.user', 'u')
            ->join('u.department', 'dep')
            ->Join('u.jobWorkerDemands', 'dem')
            ->LeftJoin('dem.rating', 'r')
            ->orderBy('r.star', 'DESC')
            ->where('s.id = :id')
            ->setParameter('id', $id)
            
        ;
        //dd($qb->getQuery());
        //dd($qb->getQuery()->getResult());
        return $qb->getQuery()->getResult();
    }

    public function findJobworkerByServiceWithLimit($id, $limit =null)
    {
        $qb = $this->createQueryBuilder('s');
        
        $qb
            ->addSelect('sk', 'u', 'dep', 'dem', 'r')
            ->join('s.skills', 'sk')
            ->join('sk.user', 'u')
            ->join('u.department', 'dep')
            ->join('u.jobWorkerDemands', 'dem')
            ->join('dem.rating', 'r')
            ->orderBy('avg(r.star)', 'DESC')
            ->groupBy('u.id')
            ->where('s.id = :id')
            ->setParameter('id', $id)
            ->setMaxResults($limit)
            
        ;
        //dd($qb->getQuery());
        //dd($qb->getQuery()->getResult());
        return $qb->getQuery()->getResult();
    }

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
    

    /*
    public function findOneBySomeField($value): ?Service
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
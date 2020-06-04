<?php

namespace App\Repository;

use App\Entity\Demand;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Demand|null find($id, $lockMode = null, $lockVersion = null)
 * @method Demand|null findOneBy(array $criteria, array $orderBy = null)
 * @method Demand[]    findAll()
 * @method Demand[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DemandRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Demand::class);
    }

    public function findAllDemandsFromOneUser(int $userId)
    {
        $qb = $this->createQueryBuilder('d');

        $qb
            ->addSelect('u', 'u1', 's', 'de')
            ->join('d.friendlyUser', 'u')
            ->join('d.jobWorker', 'u1')
            ->join('d.service', 's')
            ->join('u.department', 'de')
            ->where('u.id = :id')
            ->orWhere('u1.id = :id')
            ->addSelect("(CASE WHEN d.status like 'En attente' THEN 0
                        WHEN d.status like 'Accepté' THEN 2
                        WHEN d.status like 'Annulé' THEN 3
                        WHEN d.status like 'Refusé' THEN 4
                        WHEN d.status like 'Terminé' THEN 5
                        ELSE 6 END) AS HIDDEN ORD ")
            ->orderBy('ORD', 'ASC')
            ->setParameter('id', $userId)
        ;
        
        return $qb->getQuery()->getResult();
    }

    // /**
    //  * @return Demand[] Returns an array of Demand objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Demand
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

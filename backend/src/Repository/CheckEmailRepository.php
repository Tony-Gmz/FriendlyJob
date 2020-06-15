<?php

namespace App\Repository;

use App\Entity\CheckEmail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CheckEmail|null find($id, $lockMode = null, $lockVersion = null)
 * @method CheckEmail|null findOneBy(array $criteria, array $orderBy = null)
 * @method CheckEmail[]    findAll()
 * @method CheckEmail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CheckEmailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CheckEmail::class);
    }

    /**
     * Used to find a user with the token
     */
    public function findOneByToken($token)
    {
        return $this->createQueryBuilder('c')
            ->addSelect('u')
            ->join('c.user', 'u')
            ->andWhere('c.token = :token')
            ->setParameter('token', $token)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    
}

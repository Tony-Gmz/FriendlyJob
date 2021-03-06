<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newEncodedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    /**
     * Used to get the details of a JobWorker
     */
    public function findJobWorkerDetails($id)
    {
        $qb = $this->createQueryBuilder('u');
        
        $qb
            ->addSelect('dep, sk, s')
            ->join('u.department', 'dep')
            ->join('u.skills', 'sk')
            ->join('sk.service', 's')
            ->where('u.id = :id')
            ->andWhere('u.roles = :roles')
            ->setParameter('id', $id)
            ->setParameter('roles', '["JOBWORKER"]')
        ;
        return $qb->getQuery()->getOneOrNullResult();
    }

    /**
     * Used to get the rating of a JobWorker
     */
    public function findJobWorkerRating($id)
    {
        $qb = $this->createQueryBuilder('u');
        
        $qb
            ->addSelect('dep, dem, s, r')
            ->join('u.department', 'dep')
            ->leftJoin('u.jobWorkerDemands', 'dem')
            ->join('dem.service', 's')
            ->join('dem.rating', 'r')
            ->where('u.id = :id')
            ->andWhere('u.roles = :roles')
            ->setParameter('id', $id)
            ->setParameter('roles', '["JOBWORKER"]')
        ;
        return $qb->getQuery()->getResult();
    }

    /**
     * Used to get the details of all the admins
     */
    public function findContactDetails()
    {
        $qb = $this->createQueryBuilder('u');
        
        $qb
            ->addSelect('dep')
            ->leftjoin('u.department', 'dep')
            ->Where('u.roles = :roles')
            ->setParameter('roles', '["ROLE_ADMIN"]')
        ;
        return $qb->getQuery()->getResult();
    }

    /**
     * Used to get the details of all the JobWorkers
     */
    public function getAllJobWorkers()
    {
        $qb = $this->createQueryBuilder('u');

        $qb
            ->addSelect('dep, sk, s, dem, r')
            ->join('u.department', 'dep')
            ->join('u.skills', 'sk')
            ->join('sk.service', 's')
            ->join('u.jobWorkerDemands', 'dem')
            ->join('dem.rating', 'r')
            ->where('u.roles =  :roles')
            ->andWhere('r IS NOT NULL')
            ->setParameter('roles', '["JOBWORKER"]')
        ;

        return $qb->getQuery()->getResult();
    }

    /**
     * Used to get the user's role
     */
    public function findUserType($id, $roles) {
        
        $qb = $this->createQueryBuilder('u');

        $qb
            ->where('u.roles = :roles')
            ->andWhere('u.id = :id')
            ->setParameter('roles', '["'.$roles.'"]')
            ->setParameter('id', $id)
        ;

        return $qb->getQuery()->getOneOrNullResult();
    }

    /**
     * Used to find all the users according to their role
     */
    public function findByRole($roles) {
        
        $qb = $this->createQueryBuilder('u');

        $qb
            ->where('u.roles = :roles')
            ->setParameter('roles', '["'.$roles.'"]')
        ;

        return $qb->getQuery()->getResult();
    }
}

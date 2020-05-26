<?php

namespace App\Entity;

use App\Repository\DepartmentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=DepartmentRepository::class)
 */
class Department
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"department_browse"})
     * @Groups({"user_read", "user_add", "user_edit", "user_jobworker_rating", "user_random_jobworker", "user_jobworker_details"})
     * @Groups({"service_jobworker"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"department_browse"})
     * @Groups({"user_read", "user_add", "user_edit", "user_jobworker_rating", "user_random_jobworker", "user_jobworker_details"})
     * @Groups({"service_jobworker"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"department_browse"})
     * @Groups({"user_read", "user_add", "user_edit", "user_jobworker_rating", "user_random_jobworker", "user_jobworker_details"})
     * @Groups({"service_jobworker"})
     */
    private $number;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="department")
     */
    private $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getNumber(): ?string
    {
        return $this->number;
    }

    public function setNumber(string $number): self
    {
        $this->number = $number;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setDepartment($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            // set the owning side to null (unless already changed)
            if ($user->getDepartment() === $this) {
                $user->setDepartment(null);
            }
        }

        return $this;
    }
}

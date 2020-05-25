<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Department::class, inversedBy="users")
     * @ORM\JoinColumn(nullable=false)
     */
    private $department;

    /**
     * @ORM\OneToMany(targetEntity=Skill::class, mappedBy="user", orphanRemoval=true)
     */
    private $skills;

    /**
     * @ORM\OneToMany(targetEntity=Demand::class, mappedBy="friendlyUser", orphanRemoval=true)
     */
    private $friendlyUserDemands;

    /**
     * @ORM\OneToMany(targetEntity=Demand::class, mappedBy="jobWorker", orphanRemoval=true)
     */
    private $jobWorkerDemands;

    public function __construct()
    {
        $this->skills = new ArrayCollection();
        $this->friendlyUserDemands = new ArrayCollection();
        $this->jobWorkerDemands = new ArrayCollection();
    }

    /**
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        
        return $this->roles;
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     */
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     */
    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     */
    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

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
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     */
    public function getDepartment(): ?Department
    {
        return $this->department;
    }

    public function setDepartment(?Department $department): self
    {
        $this->department = $department;

        return $this;
    }

    /**
     * @return Collection|Skill[]
     */
    public function getSkills(): Collection
    {
        return $this->skills;
    }

    public function addSkill(Skill $skill): self
    {
        if (!$this->skills->contains($skill)) {
            $this->skills[] = $skill;
            $skill->setUser($this);
        }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        if ($this->skills->contains($skill)) {
            $this->skills->removeElement($skill);
            // set the owning side to null (unless already changed)
            if ($skill->getUser() === $this) {
                $skill->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Demand[]
     */
    public function getFriendlyUserDemands(): Collection
    {
        return $this->friendlyUserDemands;
    }

    public function addFriendlyUserDemand(Demand $friendlyUserDemand): self
    {
        if (!$this->friendlyUserDemands->contains($friendlyUserDemand)) {
            $this->friendlyUserDemands[] = $friendlyUserDemand;
            $friendlyUserDemand->setFriendlyUser($this);
        }

        return $this;
    }

    public function removeFriendlyUserDemand(Demand $friendlyUserDemand): self
    {
        if ($this->friendlyUserDemands->contains($friendlyUserDemand)) {
            $this->friendlyUserDemands->removeElement($friendlyUserDemand);
            // set the owning side to null (unless already changed)
            if ($friendlyUserDemand->getFriendlyUser() === $this) {
                $friendlyUserDemand->setFriendlyUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Demand[]
     */
    public function getJobWorkerDemands(): Collection
    {
        return $this->jobWorkerDemands;
    }

    public function addJobWorkerDemand(Demand $jobWorkerDemand): self
    {
        if (!$this->jobWorkerDemands->contains($jobWorkerDemand)) {
            $this->jobWorkerDemands[] = $jobWorkerDemand;
            $jobWorkerDemand->setJobWorker($this);
        }

        return $this;
    }

    public function removeJobWorkerDemand(Demand $jobWorkerDemand): self
    {
        if ($this->jobWorkerDemands->contains($jobWorkerDemand)) {
            $this->jobWorkerDemands->removeElement($jobWorkerDemand);
            // set the owning side to null (unless already changed)
            if ($jobWorkerDemand->getJobWorker() === $this) {
                $jobWorkerDemand->setJobWorker(null);
            }
        }

        return $this;
    }
}

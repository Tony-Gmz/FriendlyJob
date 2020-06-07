<?php

namespace App\Entity;

use App\Repository\SkillRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=SkillRepository::class)
 */
class Skill
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"user_random_jobworker", "user_jobworker_details"})
     * @Groups({"service_jobworker"})
     * @Groups({"skill_add", "skill_edit"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"user_random_jobworker", "user_jobworker_details"})
     * @Groups({"service_jobworker"})
     * @Groups({"skill_add", "skill_edit"})
     * @Assert\NotBlank(allowNull = true)
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"user_random_jobworker", "user_jobworker_details"})
     * @Groups({"service_jobworker"})
     * @Groups({"skill_add", "skill_edit"})
     * @Assert\Positive
     * @Assert\Range(min = 8, max = 50, notInRangeMessage = "This value should be an integer between {{ min }} and {{ max }}")
     * @Assert\NotNull
     */
    private $price;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="skills")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"service_jobworker"})
     * @Groups({"skill_add"})
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="skills")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"user_random_jobworker", "user_jobworker_details"})
     * @Groups({"skill_add"})
     */
    private $service;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function __toString()
    {
        return $this->description;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }
}

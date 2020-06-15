<?php

namespace App\Entity;

use App\Repository\RatingRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=RatingRepository::class)
 */
class Rating
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"user_jobworker_rating", "user_random_jobworker"})
     * @Groups({"service_jobworker"})
     * @Groups({"demand_one_user"})
     * @Groups({"rating_add"})
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Groups({"user_jobworker_rating", "user_random_jobworker"})
     * @Groups({"service_jobworker"})
     * @Groups({"demand_one_user"})
     * @Groups({"rating_add"})
     * @Assert\NotBlank
     * @Assert\NotNull
     */
    private $comment;

    /**
     * @ORM\Column(type="smallint")
     * @Groups({"user_jobworker_rating", "user_random_jobworker"})
     * @Groups({"service_jobworker"})
     * @Groups({"demand_one_user"})
     * @Groups({"rating_add"})
     * @Assert\Positive
     * @Assert\Range(min = 1, max = 5, notInRangeMessage = "This value should be an integer between {{ min }} and {{ max }}")
     * @Assert\NotNull
     */
    private $star;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToOne(targetEntity=Demand::class, inversedBy="rating", cascade={"persist", "remove"})
     * @Groups({"rating_add"})
     */
    private $demand;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function __toString()
    {
        return "#".$this->id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getStar(): ?int
    {
        return $this->star;
    }

    public function setStar(?int $star): self
    {
        $this->star = $star;

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

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getDemand(): ?Demand
    {
        return $this->demand;
    }

    public function setDemand(?Demand $demand): self
    {
        $this->demand = $demand;

        return $this;
    }
}

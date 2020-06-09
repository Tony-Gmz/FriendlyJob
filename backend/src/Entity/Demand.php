<?php

namespace App\Entity;

use App\Repository\DemandRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=DemandRepository::class)
 */
class Demand
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"service_jobworker"})
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"user_jobworker_rating", "user_random_jobworker"})
     * @Groups({"rating_add"})
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"user_jobworker_rating"})
     * @Groups({"rating_add"})
     * @Assert\NotBlank
     * @Assert\Length(max = 500, maxMessage = "Your demand body must not exceed {{ limit }} characters")
     */
    private $body;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"user_jobworker_rating"})
     * @Groups({"rating_add"})
     * @Assert\Type("\DateTimeInterface")
     */
    private $reservationDate;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"user_jobworker_rating"})
     * @Groups({"rating_add"})
     * @Assert\Type("\DateTimeInterface")
     */
    private $reservationHour;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"user_jobworker_rating"})
     * @Groups({"rating_add"})
     * @Assert\NotBlank
     */
    private $status;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"demand_add"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"demand_add", "demand_edit"})
     */
    private $updatedAt;

    /**
     * @ORM\OneToOne(targetEntity=Rating::class, mappedBy="demand", cascade={"persist", "remove"})
     * @Groups({"user_jobworker_rating", "user_random_jobworker"})
     * @Groups({"demand_one_user"})
     * @Groups({"service_jobworker"})
     */
    private $rating;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="demands", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"user_jobworker_rating"})
     */
    private $service;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="friendlyUserDemands", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     * @Groups({"user_jobworker_rating"})
     */
    private $friendlyUser;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="jobWorkerDemands", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"demand_add", "demand_edit", "demand_one_user"})
     */
    private $jobWorker;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(?string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getReservationDate(): \DateTimeInterface
    {
        return $this->reservationDate;
    }

    public function setReservationDate(\DateTimeInterface $reservationDate): self
    {
        $this->reservationDate = $reservationDate;

        return $this;
    }

    public function getReservationHour(): \DateTimeInterface
    {
        return $this->reservationHour;
    }

    public function setReservationHour(\DateTimeInterface $reservationHour): self
    {
        $this->reservationHour = $reservationHour;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

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

    public function getRating(): ?Rating
    {
        return $this->rating;
    }

    public function setRating(?Rating $rating): self
    {
        $this->rating = $rating;

        // set (or unset) the owning side of the relation if necessary
        $newDemand = null === $rating ? null : $this;
        if ($rating->getDemand() !== $newDemand) {
            $rating->setDemand($newDemand);
        }

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

    public function getFriendlyUser(): ?User
    {
        return $this->friendlyUser;
    }

    public function setFriendlyUser(?User $friendlyUser): self
    {
        $this->friendlyUser = $friendlyUser;

        return $this;
    }

    public function getJobWorker(): ?User
    {
        return $this->jobWorker;
    }

    public function setJobWorker(?User $jobWorker): self
    {
        $this->jobWorker = $jobWorker;

        return $this;
    }
}

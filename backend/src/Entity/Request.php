<?php

namespace App\Entity;

use App\Repository\RequestRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RequestRepository::class)
 */
class Request
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", length=16383)
     */
    private $body;

    /**
     * @ORM\Column(type="datetime")
     */
    private $reservationDate;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $reservationHour;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToOne(targetEntity=Rating::class, mappedBy="request", cascade={"persist", "remove"})
     */
    private $rating;

    /**
     * @ORM\ManyToOne(targetEntity=Service::class, inversedBy="requests")
     * @ORM\JoinColumn(nullable=false)
     */
    private $service;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="friendlyUserRequests")
     * @ORM\JoinColumn(nullable=false)
     */
    private $friendlyUser;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="jobWorkerRequests")
     * @ORM\JoinColumn(nullable=false)
     */
    private $jobWorker;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getReservationDate(): ?\DateTimeInterface
    {
        return $this->reservationDate;
    }

    public function setReservationDate(\DateTimeInterface $reservationDate): self
    {
        $this->reservationDate = $reservationDate;

        return $this;
    }

    public function getReservationHour(): ?string
    {
        return $this->reservationHour;
    }

    public function setReservationHour(string $reservationHour): self
    {
        $this->reservationHour = $reservationHour;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
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
        $newRequest = null === $rating ? null : $this;
        if ($rating->getRequest() !== $newRequest) {
            $rating->setRequest($newRequest);
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

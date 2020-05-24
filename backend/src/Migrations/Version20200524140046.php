<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200524140046 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE request ADD service_id INT NOT NULL, ADD friendly_user_id INT NOT NULL, ADD job_worker_id INT NOT NULL');
        $this->addSql('ALTER TABLE request ADD CONSTRAINT FK_3B978F9FED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id)');
        $this->addSql('ALTER TABLE request ADD CONSTRAINT FK_3B978F9F1957FB72 FOREIGN KEY (friendly_user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE request ADD CONSTRAINT FK_3B978F9FAC905527 FOREIGN KEY (job_worker_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_3B978F9FED5CA9E6 ON request (service_id)');
        $this->addSql('CREATE INDEX IDX_3B978F9F1957FB72 ON request (friendly_user_id)');
        $this->addSql('CREATE INDEX IDX_3B978F9FAC905527 ON request (job_worker_id)');
        $this->addSql('ALTER TABLE skill ADD user_id INT NOT NULL, ADD service_id INT NOT NULL');
        $this->addSql('ALTER TABLE skill ADD CONSTRAINT FK_5E3DE477A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE skill ADD CONSTRAINT FK_5E3DE477ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id)');
        $this->addSql('CREATE INDEX IDX_5E3DE477A76ED395 ON skill (user_id)');
        $this->addSql('CREATE INDEX IDX_5E3DE477ED5CA9E6 ON skill (service_id)');
        $this->addSql('ALTER TABLE user ADD department_id INT NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649AE80F5DF FOREIGN KEY (department_id) REFERENCES department (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649AE80F5DF ON user (department_id)');
        $this->addSql('ALTER TABLE rating ADD request_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE rating ADD CONSTRAINT FK_D8892622427EB8A5 FOREIGN KEY (request_id) REFERENCES request (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_D8892622427EB8A5 ON rating (request_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE rating DROP FOREIGN KEY FK_D8892622427EB8A5');
        $this->addSql('DROP INDEX UNIQ_D8892622427EB8A5 ON rating');
        $this->addSql('ALTER TABLE rating DROP request_id');
        $this->addSql('ALTER TABLE request DROP FOREIGN KEY FK_3B978F9FED5CA9E6');
        $this->addSql('ALTER TABLE request DROP FOREIGN KEY FK_3B978F9F1957FB72');
        $this->addSql('ALTER TABLE request DROP FOREIGN KEY FK_3B978F9FAC905527');
        $this->addSql('DROP INDEX IDX_3B978F9FED5CA9E6 ON request');
        $this->addSql('DROP INDEX IDX_3B978F9F1957FB72 ON request');
        $this->addSql('DROP INDEX IDX_3B978F9FAC905527 ON request');
        $this->addSql('ALTER TABLE request DROP service_id, DROP friendly_user_id, DROP job_worker_id');
        $this->addSql('ALTER TABLE skill DROP FOREIGN KEY FK_5E3DE477A76ED395');
        $this->addSql('ALTER TABLE skill DROP FOREIGN KEY FK_5E3DE477ED5CA9E6');
        $this->addSql('DROP INDEX IDX_5E3DE477A76ED395 ON skill');
        $this->addSql('DROP INDEX IDX_5E3DE477ED5CA9E6 ON skill');
        $this->addSql('ALTER TABLE skill DROP user_id, DROP service_id');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649AE80F5DF');
        $this->addSql('DROP INDEX IDX_8D93D649AE80F5DF ON user');
        $this->addSql('ALTER TABLE user DROP department_id');
    }
}

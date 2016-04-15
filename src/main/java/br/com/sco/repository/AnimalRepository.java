package br.com.sco.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sco.entity.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Long>{

	Collection<Animal> findByIdentificador(String identificador);
	Collection<Animal> findByTipo(String tipo);
}


package br.com.sco.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.sco.entity.AnimalFoto;

public interface AnimalFotoRepository extends JpaRepository<AnimalFoto, Long>{

	@Query("SELECT f.pathImagem FROM Foto f, AnimalFoto af WHERE af.idFoto = f.id AND af.idAnimal = ?1 AND f.dtInsert = ( select max(f2.dtInsert) from Foto f2 where f2.id = f.id)")
	String getFoto(Long id);
}

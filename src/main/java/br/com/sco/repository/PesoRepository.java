package br.com.sco.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.sco.entity.Animal;
import br.com.sco.entity.Peso;

public interface PesoRepository extends JpaRepository<Peso, Long>{

	@Query("SELECT p.valor FROM Peso p WHERE p.idAnimal = ? AND p.dtMedicao = (select max(p2.dtMedicao) from Peso p2 where p2.idAnimal = p.idAnimal)")
	String getPeso(Long id);
	
	@Query("SELECT p FROM Peso p WHERE p.idAnimal = ?")
	Collection<Peso> getPesoDoAnimal(Long id);
}

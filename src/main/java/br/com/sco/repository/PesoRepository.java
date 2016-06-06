package br.com.sco.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.sco.entity.Peso;

public interface PesoRepository extends JpaRepository<Peso, Long>{

	@Query("SELECT p.valor FROM Peso p WHERE p.idAnimal = ? AND p.dtMedicao = (select max(p2.dtMedicao) from Peso p2 where p2.idAnimal = p.idAnimal)")
	String getPeso(Long id);
}

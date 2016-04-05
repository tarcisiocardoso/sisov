package br.com.sco.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sco.entity.Filho;

public interface FilhoRepository extends JpaRepository<Filho, Long>{
	
//	Collection<Filho> findAllByMae(Long idFilho);
}

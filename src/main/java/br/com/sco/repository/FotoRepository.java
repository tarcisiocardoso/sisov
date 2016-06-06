package br.com.sco.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sco.entity.Foto;

public interface FotoRepository extends JpaRepository<Foto, Long>{

}

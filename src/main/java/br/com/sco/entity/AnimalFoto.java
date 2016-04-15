package br.com.sco.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AnimalFoto {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private Long idAnimal;
	private Long idFoto;
	
	public AnimalFoto(Long idAnimal, Long idFoto) {
		super();
		this.idAnimal = idAnimal;
		this.idFoto = idFoto;
	}
	public AnimalFoto() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdAnimal() {
		return idAnimal;
	}
	public void setIdAnimal(Long idAnimal) {
		this.idAnimal = idAnimal;
	}
	public Long getIdFoto() {
		return idFoto;
	}
	public void setIdFoto(Long idFoto) {
		this.idFoto = idFoto;
	}
	@Override
	public String toString() {
		return "AnimalFoto [id=" + id + ", idAnimal=" + idAnimal + ", idFoto=" + idFoto + "]";
	}
	
	
}

package br.com.sco.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Peso {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	private Long idAnimal;
	
	private Date dtMedicao;
	private Float valor;
	public Peso(Long idAnimal, Date dtMedicao, Float valor) {
		super();
		this.idAnimal = idAnimal;
		this.dtMedicao = dtMedicao;
		this.valor = valor;
	}
	public Peso() {
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
	public Date getDtMedicao() {
		return dtMedicao;
	}
	public void setDtMedicao(Date dtMedicao) {
		this.dtMedicao = dtMedicao;
	}
	public Float getValor() {
		return valor;
	}
	public void setValor(Float valor) {
		this.valor = valor;
	}
	@Override
	public String toString() {
		return "Peso [id=" + id + ", idAnimal=" + idAnimal + ", dtMedicao=" + dtMedicao + ", valor=" + valor + "]";
	}
	
	
}

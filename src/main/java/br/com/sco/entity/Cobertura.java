package br.com.sco.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cobertura {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	private Long idMacho;
	private Long idFemea;
	
	private Date dtCobertura;
	
	private Long idPeso;
	

	public Long getIdPeso() {
		return idPeso;
	}

	public void setIdPeso(Long idPeso) {
		this.idPeso = idPeso;
	}

	public Cobertura(Long idMacho, Long idFemea, Long idPeso, Date dtCobertura) {
		super();
		this.idMacho = idMacho;
		this.idFemea = idFemea;
		this.dtCobertura = dtCobertura;
	}

	public Cobertura() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdMacho() {
		return idMacho;
	}

	public void setIdMacho(Long idMacho) {
		this.idMacho = idMacho;
	}

	public Long getIdFemea() {
		return idFemea;
	}

	public void setIdFemea(Long idFemea) {
		this.idFemea = idFemea;
	}

	public Date getDtCobertura() {
		return dtCobertura;
	}

	public void setDtCobertura(Date dtCobertura) {
		this.dtCobertura = dtCobertura;
	}

	@Override
	public String toString() {
		return "Cruzamento [id=" + id + ", idMacho=" + idMacho + ", idFemea=" + idFemea
				+ ", dtCobertura=" + dtCobertura + "]";
	}
	
	
}

package br.com.sco.repository.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import br.com.sco.entity.Animal;

@Repository
public class AnimalDao {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    
    public Collection<Animal> todos(){
		//JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		
		return jdbcTemplate.query(
				"SELECT a.*, "
				+"	( "
				+"		select path_imagem from foto where id = ( select max(id) from animal_foto where id_animal = a.id) "
				+"	) as foto,"
				+ " ( "
				+ " SELECT valor FROM PESO where id = (select max(id) from PESO where id_animal = a.id)  "
				+ " ) as peso"
				+" FROM animal a ",
                new MapperAnimal()
        ); //.forEach(a -> System.out.println(a.toString()));
		
//		return null;
	}

	
    // JDBC-backed implementations of the methods on the CorporateEventDao follow...
}

class MapperAnimal implements RowMapper<Animal> {

    public Animal mapRow(ResultSet rs, int rowNum) throws SQLException {
    	Animal a = new Animal();
    	a.setId(rs.getLong("id") );
    	a.setIdentificado( rs.getString("identificador"));
    	a.setRaca(rs.getString("raca"));
    	String sexo = rs.getString("sexo");
    	a.setSexo((sexo != null)?sexo.charAt(0):'M');
    	a.setTipo(rs.getString("tipo"));
    	a.setDtNascimento( rs.getDate("dt_nascimento"));
		a.setFoto(rs.getString("foto"));
		a.setPeso( rs.getFloat("peso"));
		a.setIdPai( rs.getLong("id_pai"));
		a.setIdMae( rs.getLong("id_mae"));
//		a.setIdFilho(idFilho);
		if( a.getFoto() == null ){
			a.setFoto("sheep.png");
		}
        return a;
    }
}
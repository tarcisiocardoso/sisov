package br.com.sco.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import br.com.sco.entity.Animal;

public class TesteJDBC {

	//@Autowired (required=true)
    //JdbcTemplate jdbcTemplate;
	
	 @Autowired
	 DataSource dataSource;

	public Collection<Animal> todos(){
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		
		jdbcTemplate.query(
                "SELECT *, 'xxx' as foto FROM animal",
                (rs, rowNum) -> make(rs)
        ).forEach(a -> System.out.println(a.toString()));
		
		return null;
	}

	private Animal make(ResultSet rs) {
		Animal a = new Animal();
		try {
			a.setId(rs.getLong("id") );
			a.setFoto(rs.getString("foto"));
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}

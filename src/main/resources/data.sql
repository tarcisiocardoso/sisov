insert into animal(identificador, dt_nascimento, id_filho, raca, sexo) values ('001', current_date(), 1, 'W DORPER', 'M' );
insert into animal(identificador, dt_nascimento, id_filho, raca, sexo) values ('002', current_date(), 1, 'RND', 'F' );
insert into animal(identificador, dt_nascimento, id_pai, id_mae, raca, sexo) values ('003', current_date(), 1, 2, '1/2 W DORPER', 'F' );
insert into animal(identificador, dt_nascimento, id_pai, id_mae, raca, sexo) values ('004', current_date(), 1, 2,  'RND', 'M' );
insert into animal(identificador, dt_nascimento, id_pai, id_mae, raca, sexo) values ('005', current_date(), 1, 2,  'RND', 'F' );

insert into filho (id_filho, id_animal) values( 1, 3);
insert into filho (id_filho, id_animal) values( 1, 4);
insert into filho (id_filho, id_animal) values( 1, 4);

insert into reproducao (id_mae, id_filho, id_procedimento, descricao) values (2, 1, 1, 'Tudo normal');

insert into cruzamento (id_macho, id_femea, id_peso, dt_cobertura) values (1, 2, 1, current_date() );

insert into peso (id_animal, dt_medicao, valor) values (1, '2015-01-01', 4);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-02-01', 14);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-06-01', 32);
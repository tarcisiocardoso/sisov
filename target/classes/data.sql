insert into animal( identificador, dt_nascimento, raca, sexo, tipo) values ('001', '2014-11-01', 'Dorper', 'M', 'Reprodutor' );

insert into animal( identificador, dt_nascimento, raca, sexo, tipo) values ('002', '2013-11-01', 'Santa Ines', 'F', 'Matriz' );

insert into animal( identificador, dt_nascimento, raca, sexo, tipo) values ('003', '2015-11-01', 'RND', 'F', 'Matriz' );
insert into animal( identificador, dt_nascimento, id_pai, id_mae, raca, sexo) values ('004', '2015-11-01', 1, 2, '1/2 Dorper', 'F' );
insert into animal( identificador, dt_nascimento, id_pai, id_mae, raca, sexo) values ('005', '2015-11-01', 1, 2,  'RND', 'M' );
insert into animal( identificador, dt_nascimento, id_pai, id_mae, raca, sexo) values ('006', '2015-11-01', 1, 2,  'RND', 'F' );

insert into filho (id_animal, id_filho) values( 1, 3);
insert into filho (id_animal, id_filho) values( 1, 4);
insert into filho (id_animal, id_filho) values( 2, 4);

insert into reproducao (id_mae, id_filho, id_procedimento, descricao) values (2, 1, 1, 'Tudo normal');

insert into cobertura (id_macho, id_femea, id_peso, dt_cobertura) values (1, 2, 1, '2015-01-01' );

insert into peso (id_animal, dt_medicao, valor) values (1, '2015-01-01', 4);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-02-01', 14);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-06-01', 32);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-07-01', 52);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-08-01', 62);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-09-01', 72);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-10-01', 82);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-11-01', 85);
insert into peso (id_animal, dt_medicao, valor) values (1, '2015-12-01', 90);

insert into foto (path_imagem, dt_insert) values ('raca_white_dorper.jpg', '2015-01-01');
insert into foto (path_imagem, dt_insert) values ('santa_ines.jpg', '2013-01-01');


insert into animal_foto (id_animal, id_foto) values (1, 1);
insert into animal_foto (id_animal, id_foto) values (2, 2);

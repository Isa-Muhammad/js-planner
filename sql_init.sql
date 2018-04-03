create database if not exists jsPlanner;

create TABLE if not exists jsPlanner.weeks(
  id int primary key auto_increment,
  title varchar(50) NOT NULL
);


create TABLE if not exists jsPlanner.topics(
  id int primary key auto_increment,
  title varchar(50) NOT NULL
);


create TABLE if not exists jsPlanner.notes(
  id int primary key auto_increment,
  title varchar(50) NOT NULL
);


create TABLE if not exists jsPlanner.resources(
  id int primary key auto_increment,
  title varchar(50) NOT NULL
);


create TABLE if not exists jsPlanner.user(
  id int PRIMARY KEY auto_increment,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL
);

/*user entries*/
insert ignore into jsPlanner.user values (1, "isa", "test");

/*week entries*/
insert ignore into jsPlanner.weeks values (1, "css animation");
insert ignore into jsPlanner.weeks values (2, "css grids");
insert ignore into jsPlanner.weeks values (3, "dom elements");


/*topic entries*/
insert ignore into jsPlanner.topics values (1, "test data");
insert ignore into jsPlanner.topics values (2, "blah");
insert ignore into jsPlanner.topics values (3, "dom");



/*note entries*/
insert ignore into jsPlanner.notes values (1, "css animation");
insert ignore into jsPlanner.notes values (2, "css grids");
insert ignore into jsPlanner.notes values (3, "dom elements");

/*res entries*/
insert ignore into jsPlanner.resources values (1, "test");
insert ignore into jsPlanner.resources values (2, "testing");
insert ignore into jsPlanner.resources values (3, "dom");  

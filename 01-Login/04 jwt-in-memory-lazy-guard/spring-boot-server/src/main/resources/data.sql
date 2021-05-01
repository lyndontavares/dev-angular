INSERT INTO roles (name) VALUES ('ROLE_ADMIN');

INSERT INTO roles (name) VALUES ('ROLE_USER');

INSERT INTO roles (name) VALUES ('ROLE_MODERATOR');

INSERT INTO users (username,password,email) 
VALUES ('admin','$2a$10$Nt39cTguw7YIWg9OXNwXqO9iUHWVAsl2LJkt6hAPz9igkxApgcPFm','admin@mail.com');

INSERT INTO user_roles (user_id,role_id) 
VALUES (1,1);


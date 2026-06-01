CREATE TABLE user_login_credentials (

    id SERIAL PRIMARY KEY,

    first_name VARCHAR(100),

    last_name VARCHAR(100),

    middle_name VARCHAR(100),

    email VARCHAR(150) UNIQUE,

    username VARCHAR(100) UNIQUE,

    password VARCHAR(200),

    phone VARCHAR(20)
);
Create Table User_Details(
user_id SERIAL PRIMARY KEY,
username varchar(100) NOT NULL,
email varchar(255) UNIQUE NOT NULL,
password varchar(255) NOT NULL,
created_at TIMESTAMP Default CURRENT_TIMESTAMP
);
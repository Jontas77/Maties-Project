CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE students (
    student_id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_name    VARCHAR(255) NOT NULL,
    student_email   VARCHAR(255) UNIQUE NOT NULL,
    student_password    VARCHAR(255) NOT NULL
);

CREATE TABLE mentors (
    mentor_id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    mentor_name    VARCHAR(255) NOT NULL,
    mentor_email   VARCHAR(255) UNIQUE NOT NULL,
    mentor_password    VARCHAR(255) NOT NULL
);

CREATE TABLE admin (
    admin_id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    admin_name    VARCHAR(255) NOT NULL,
    admin_email   VARCHAR(255) UNIQUE NOT NULL,
    admin_password    VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
    project_id  SERIAL PRIMARY KEY,
    student_id  UUID REFERENCES students(student_id),
    project_name    VARCHAR(255) NOT NULL,
    project_desc    VARCHAR(500) NOT NULL
);

CREATE TABLE profile (
    profile_id   SERIAL PRIMARY KEY,
    student_id      UUID REFERENCES students(student_id),
    profile_name    VARCHAR(255),
    profile_email   VARCHAR(255),
    profile_phone   INT,
    profile_bio     VARCHAR(500),
    profile_pic     VARCHAR(500)
);

CREATE TABLE competitions (
    competition_id  SERIAL PRIMARY KEY,
    title   VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    contact     VARCHAR(255) NOT NULL
);

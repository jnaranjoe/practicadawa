--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-07-15 17:25:31

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16429)
-- Name: dawa; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA dawa;


ALTER SCHEMA dawa OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 221 (class 1259 OID 20492)
-- Name: tb_provincias; Type: TABLE; Schema: dawa; Owner: postgres
--

CREATE TABLE dawa.tb_provincias (
    id_provincia integer NOT NULL,
    nombre_provincia character varying(50) NOT NULL,
    poblacion numeric(10,0) NOT NULL,
    extensionkm2 numeric(10,2) NOT NULL,
    estado boolean DEFAULT true,
    user_created character varying(30) NOT NULL,
    date_created timestamp without time zone NOT NULL,
    user_modified character varying(30) NOT NULL,
    date_modified timestamp without time zone NOT NULL,
    user_deleted character varying(30) NOT NULL,
    date_deleted timestamp without time zone NOT NULL
);


ALTER TABLE dawa.tb_provincias OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 20491)
-- Name: tb_provincias_id_provincia_seq; Type: SEQUENCE; Schema: dawa; Owner: postgres
--

CREATE SEQUENCE dawa.tb_provincias_id_provincia_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE dawa.tb_provincias_id_provincia_seq OWNER TO postgres;

--
-- TOC entry 4910 (class 0 OID 0)
-- Dependencies: 220
-- Name: tb_provincias_id_provincia_seq; Type: SEQUENCE OWNED BY; Schema: dawa; Owner: postgres
--

ALTER SEQUENCE dawa.tb_provincias_id_provincia_seq OWNED BY dawa.tb_provincias.id_provincia;


--
-- TOC entry 219 (class 1259 OID 16431)
-- Name: tb_user; Type: TABLE; Schema: dawa; Owner: postgres
--

CREATE TABLE dawa.tb_user (
    user_id integer NOT NULL,
    user_login character varying(50) NOT NULL,
    user_password character varying(50) NOT NULL,
    user_name character varying(80) NOT NULL,
    user_state boolean DEFAULT true,
    user_person_create character varying(50) NOT NULL,
    user_date_create timestamp without time zone NOT NULL,
    user_person_update character varying(50),
    user_date_update timestamp without time zone,
    user_person_delete character varying(50),
    user_date_delete timestamp without time zone
);


ALTER TABLE dawa.tb_user OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16430)
-- Name: tb_user_user_id_seq; Type: SEQUENCE; Schema: dawa; Owner: postgres
--

CREATE SEQUENCE dawa.tb_user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE dawa.tb_user_user_id_seq OWNER TO postgres;

--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 218
-- Name: tb_user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: dawa; Owner: postgres
--

ALTER SEQUENCE dawa.tb_user_user_id_seq OWNED BY dawa.tb_user.user_id;


--
-- TOC entry 4750 (class 2604 OID 20495)
-- Name: tb_provincias id_provincia; Type: DEFAULT; Schema: dawa; Owner: postgres
--

ALTER TABLE ONLY dawa.tb_provincias ALTER COLUMN id_provincia SET DEFAULT nextval('dawa.tb_provincias_id_provincia_seq'::regclass);


--
-- TOC entry 4748 (class 2604 OID 16434)
-- Name: tb_user user_id; Type: DEFAULT; Schema: dawa; Owner: postgres
--

ALTER TABLE ONLY dawa.tb_user ALTER COLUMN user_id SET DEFAULT nextval('dawa.tb_user_user_id_seq'::regclass);


--
-- TOC entry 4904 (class 0 OID 20492)
-- Dependencies: 221
-- Data for Name: tb_provincias; Type: TABLE DATA; Schema: dawa; Owner: postgres
--



--
-- TOC entry 4902 (class 0 OID 16431)
-- Dependencies: 219
-- Data for Name: tb_user; Type: TABLE DATA; Schema: dawa; Owner: postgres
--

INSERT INTO dawa.tb_user VALUES (2, 'pcruz', '2e98345c63a5ab28756783f9b7ff4054', 'Pablo Cruz', true, 'admin', '2025-06-11 13:17:41.536584', NULL, NULL, NULL, NULL);
INSERT INTO dawa.tb_user VALUES (3, 'jnaranjo', '2e98345c63a5ab28756783f9b7ff4054', 'Jeshua Naranjo', true, 'admin', '2025-06-11 13:17:41.536584', NULL, NULL, NULL, NULL);
INSERT INTO dawa.tb_user VALUES (1, 'admin', '2e98345c63a5ab28756783f9b7ff4054', 'usuario admin', true, 'admin', '2025-06-11 13:17:02.629173', NULL, NULL, NULL, NULL);


--
-- TOC entry 4912 (class 0 OID 0)
-- Dependencies: 220
-- Name: tb_provincias_id_provincia_seq; Type: SEQUENCE SET; Schema: dawa; Owner: postgres
--

SELECT pg_catalog.setval('dawa.tb_provincias_id_provincia_seq', 1, false);


--
-- TOC entry 4913 (class 0 OID 0)
-- Dependencies: 218
-- Name: tb_user_user_id_seq; Type: SEQUENCE SET; Schema: dawa; Owner: postgres
--

SELECT pg_catalog.setval('dawa.tb_user_user_id_seq', 3, true);


--
-- TOC entry 4755 (class 2606 OID 20498)
-- Name: tb_provincias tb_provincias_pkey; Type: CONSTRAINT; Schema: dawa; Owner: postgres
--

ALTER TABLE ONLY dawa.tb_provincias
    ADD CONSTRAINT tb_provincias_pkey PRIMARY KEY (id_provincia);


--
-- TOC entry 4753 (class 2606 OID 16437)
-- Name: tb_user tb_user_pkey; Type: CONSTRAINT; Schema: dawa; Owner: postgres
--

ALTER TABLE ONLY dawa.tb_user
    ADD CONSTRAINT tb_user_pkey PRIMARY KEY (user_id);


-- Completed on 2025-07-15 17:25:31

--
-- PostgreSQL database dump complete
--


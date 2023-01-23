--
-- PostgreSQL database dump
--

-- Dumped from database version 13.9 (Ubuntu 13.9-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.1

-- Started on 2023-01-23 17:12:04

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 25 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 4118 (class 0 OID 0)
-- Dependencies: 25
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 229 (class 1259 OID 1200096)
-- Name: exercises; Type: TABLE; Schema: public; Owner: adtyuacf
--

CREATE TABLE public.exercises (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.exercises OWNER TO adtyuacf;

--
-- TOC entry 228 (class 1259 OID 1200094)
-- Name: exercise_id_seq; Type: SEQUENCE; Schema: public; Owner: adtyuacf
--

CREATE SEQUENCE public.exercise_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exercise_id_seq OWNER TO adtyuacf;

--
-- TOC entry 4120 (class 0 OID 0)
-- Dependencies: 228
-- Name: exercise_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adtyuacf
--

ALTER SEQUENCE public.exercise_id_seq OWNED BY public.exercises.id;


--
-- TOC entry 231 (class 1259 OID 1200106)
-- Name: sets; Type: TABLE; Schema: public; Owner: adtyuacf
--

CREATE TABLE public.sets (
    id integer NOT NULL,
    weekid integer NOT NULL,
    exerciseid integer NOT NULL,
    reps integer DEFAULT 1 NOT NULL,
    weight integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.sets OWNER TO adtyuacf;

--
-- TOC entry 230 (class 1259 OID 1200104)
-- Name: sets_id_seq; Type: SEQUENCE; Schema: public; Owner: adtyuacf
--

CREATE SEQUENCE public.sets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sets_id_seq OWNER TO adtyuacf;

--
-- TOC entry 4121 (class 0 OID 0)
-- Dependencies: 230
-- Name: sets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adtyuacf
--

ALTER SEQUENCE public.sets_id_seq OWNED BY public.sets.id;


--
-- TOC entry 227 (class 1259 OID 1200088)
-- Name: weeks; Type: TABLE; Schema: public; Owner: adtyuacf
--

CREATE TABLE public.weeks (
    id integer NOT NULL
);


ALTER TABLE public.weeks OWNER TO adtyuacf;

--
-- TOC entry 226 (class 1259 OID 1200086)
-- Name: week_id_seq; Type: SEQUENCE; Schema: public; Owner: adtyuacf
--

CREATE SEQUENCE public.week_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.week_id_seq OWNER TO adtyuacf;

--
-- TOC entry 4122 (class 0 OID 0)
-- Dependencies: 226
-- Name: week_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adtyuacf
--

ALTER SEQUENCE public.week_id_seq OWNED BY public.weeks.id;


--
-- TOC entry 3962 (class 2604 OID 1200099)
-- Name: exercises id; Type: DEFAULT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.exercises ALTER COLUMN id SET DEFAULT nextval('public.exercise_id_seq'::regclass);


--
-- TOC entry 3963 (class 2604 OID 1200109)
-- Name: sets id; Type: DEFAULT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.sets ALTER COLUMN id SET DEFAULT nextval('public.sets_id_seq'::regclass);


--
-- TOC entry 3961 (class 2604 OID 1200091)
-- Name: weeks id; Type: DEFAULT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.weeks ALTER COLUMN id SET DEFAULT nextval('public.week_id_seq'::regclass);


--
-- TOC entry 4110 (class 0 OID 1200096)
-- Dependencies: 229
-- Data for Name: exercises; Type: TABLE DATA; Schema: public; Owner: adtyuacf
--

COPY public.exercises (id, name) FROM stdin;
1	Supino
2	Abdominal
\.


--
-- TOC entry 4112 (class 0 OID 1200106)
-- Dependencies: 231
-- Data for Name: sets; Type: TABLE DATA; Schema: public; Owner: adtyuacf
--

COPY public.sets (id, weekid, exerciseid, reps, weight) FROM stdin;
3	1	1	50	10
5	1	1	5	5
2	1	1	51	5
1	1	1	1	5
9	1	2	4	20
\.


--
-- TOC entry 4108 (class 0 OID 1200088)
-- Dependencies: 227
-- Data for Name: weeks; Type: TABLE DATA; Schema: public; Owner: adtyuacf
--

COPY public.weeks (id) FROM stdin;
1
\.


--
-- TOC entry 4123 (class 0 OID 0)
-- Dependencies: 228
-- Name: exercise_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adtyuacf
--

SELECT pg_catalog.setval('public.exercise_id_seq', 2, true);


--
-- TOC entry 4124 (class 0 OID 0)
-- Dependencies: 230
-- Name: sets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adtyuacf
--

SELECT pg_catalog.setval('public.sets_id_seq', 9, true);


--
-- TOC entry 4125 (class 0 OID 0)
-- Dependencies: 226
-- Name: week_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adtyuacf
--

SELECT pg_catalog.setval('public.week_id_seq', 3, true);


--
-- TOC entry 3969 (class 2606 OID 1200103)
-- Name: exercises exercise_name_key; Type: CONSTRAINT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercise_name_key UNIQUE (name);


--
-- TOC entry 3971 (class 2606 OID 1200101)
-- Name: exercises exercise_pk; Type: CONSTRAINT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercise_pk PRIMARY KEY (id);


--
-- TOC entry 3973 (class 2606 OID 1200113)
-- Name: sets sets_pk; Type: CONSTRAINT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.sets
    ADD CONSTRAINT sets_pk PRIMARY KEY (id);


--
-- TOC entry 3967 (class 2606 OID 1200093)
-- Name: weeks week_pk; Type: CONSTRAINT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.weeks
    ADD CONSTRAINT week_pk PRIMARY KEY (id);


--
-- TOC entry 3974 (class 2606 OID 1200114)
-- Name: sets sets_fk0; Type: FK CONSTRAINT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.sets
    ADD CONSTRAINT sets_fk0 FOREIGN KEY (weekid) REFERENCES public.weeks(id);


--
-- TOC entry 3975 (class 2606 OID 1200119)
-- Name: sets sets_fk1; Type: FK CONSTRAINT; Schema: public; Owner: adtyuacf
--

ALTER TABLE ONLY public.sets
    ADD CONSTRAINT sets_fk1 FOREIGN KEY (exerciseid) REFERENCES public.exercises(id);


--
-- TOC entry 4119 (class 0 OID 0)
-- Dependencies: 25
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-01-23 17:12:05

--
-- PostgreSQL database dump complete
--


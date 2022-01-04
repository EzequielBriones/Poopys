-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2021 a las 06:12:02
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `poopys`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perros`
--

CREATE TABLE `perros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `edad` varchar(60) DEFAULT NULL,
  `raza` varchar(60) NOT NULL,
  `sexo` varchar(60) NOT NULL,
  `tamaño` varchar(60) NOT NULL,
  `caracter` varchar(250) NOT NULL,
  `descripción` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `perros`
--

INSERT INTO `perros` (`id`, `nombre`, `edad`, `raza`, `sexo`, `tamaño`, `caracter`, `descripción`, `img`) VALUES
(1, 'Arizona', 'Cachorra, 5 años', 'Mestiza', 'Hembra', 'Mediana', 'Activa, temperamental', 'Arizona es una perra juguetona, a la que le gusta corretear y la atención. Suele enojarse cuando no le dan lo que quiere, por lo que gruñe, es muy territorial y guardiana. No es la mayor admiradora de los niños, pero los tolera. Una gran compañera para pe', 'https://picsum.photos/id/940/300/300'),
(2, 'Cacho', 'Adulto, 6 años', 'Maltes', 'Macho', 'Chico', 'Tranquilo, cariñoso', 'Cacho es un perro adulto de casa, muy tranquilo y cariñoso, bueno alrededor de niños. Una buena adición a cualquier familia.', 'https://picsum.photos/id/237/200/300'),
(3, 'Uma', 'Cachorra, 3 años', 'Mestiza', 'Hembra', 'Mediano', 'Divertida, inquieta ', 'Uma está con nosotros hace 1 año, llegó con mucho malestar y desnutrida, pero ahora es una perrita juguetona y con muchas ganas de vivir.', 'https://picsum.photos/id/379/300/300'),
(4, 'Milanesa', 'Cachorra, 2 años', 'Pitbull', 'Hembra', 'Mediana', 'Juguetona, inquieta', 'Mila es una cachorrita muy divertida y curiosa, le encanta jugar, dormir y pasar tiempo con la gente. Es muy amistosa y glotona, buena con los chicos, por lo que seria perfecta para cualquier familia.', 'ujsyhybbfmqvqbhevi04'),
(5, 'Indio', 'Cachorro, 1 año', 'Pitbull', 'Macho', 'Mediano', 'Juguetón', 'Indio es un perro muy inquieto y juguetón, le encanta jugar a buscar la pelota, es muy guardián, le encanta cuidar de la gente y otros perritos, sin dudas un gran perro de familia.', 'aahzvvtla1jhrw6prumg'),
(6, 'Mondongo', 'Cachorro, 1 año', 'Pitbull', 'Macho', 'Mediano', 'Juguetón', 'Mondongo es un pitbull muy cariñoso, le encanta dar paseos, jugar con sus juguetitos y los besos y abrazos. Le gusta dormir, morder a la gente despacio, y perseguir. Un gran perro para cualquier familia.', 'lqdqaixn1kn0xv14psm8'),
(7, 'Panda', 'Adulto, 12 años', 'Maltés', 'Macho', 'Chico', 'Tranquilo', 'Panda es un perro adulto, es calmado pero temperamental, le encanta dormir y que le rasquen la panza. Tiene dificultades debido a su edad, pero a pesar de todo es un gran perro para hacerle compañía a cualquier persona relajada.', 'v42quyqtb5qdav32ar9y'),
(8, 'Tokio', 'Cachorra, 2 años', 'Caniche', 'Hembra', 'Chica', 'Inquieta, juguetona', 'Tokio es una cachorra de caniche muy activa, le encanta molestar a sus hermanos y hermanas, robar comida, corretear, y que la tengan en brazos. Es muy buena con los chicos, por ende una gran mascota para cualquier familia.', 'lnggf79npt8iu0jyeavw'),
(9, 'Gala', 'Adulta, 11 años', 'Mestiza', 'Hembra', 'Mediana', 'Tranquila', 'Gala es una perra muy amistosa, le encanta que le den comida de la mesa, dormir a la luz del sol, y las caricias. Es territorial y celosa, pero un gran miembro para cualquier familia.', 'mkxmj2w9diipvvvhaduv');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(60) NOT NULL,
  `user_pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_pass`) VALUES
(1, 'ezequiel', '827ccb0eea8a706c4c34a16891f84e7b'),
(2, 'marcelobettini', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `perros`
--
ALTER TABLE `perros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `perros`
--
ALTER TABLE `perros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

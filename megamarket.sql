-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-10-2023 a las 21:28:14
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `megamarket`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventories`
--

CREATE TABLE `inventories` (
  `id` int(11) NOT NULL,
  `ref` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `tax` int(11) NOT NULL,
  `create_date` datetime NOT NULL DEFAULT current_timestamp(),
  `create_usser` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `inventories`
--

INSERT INTO `inventories` (`id`, `ref`, `amount`, `cost`, `tax`, `create_date`, `create_usser`) VALUES
(1, 2584, 12, 14952, 2848, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(2, 67543, 43, 20237, 3855, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(3, 8883, 46, 16834, 3206, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(4, 11708, 20, 8047, 1533, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(5, 10631, 32, 20624, 3928, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(6, 17766, 22, 21591, 4113, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(7, 17764, 56, 4267, 813, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(8, 13856, 23, 22181, 4225, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(9, 1213, 12, 25074, 4776, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(10, 22134, 43, 19992, 3808, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(11, 12991, 46, 4536, 864, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(12, 13152, 10, 4662, 888, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(13, 12954, 32, 5418, 1032, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(14, 13132, 22, 2646, 504, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(15, 17966, 56, 17091, 3256, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(16, 18473, 23, 19192, 3656, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(17, 9260, 12, 12449, 2371, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(18, 6636, 43, 6310, 1202, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(19, 4013, 46, 8988, 1712, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(20, 5470, 24, 8232, 1568, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(21, 15662, 32, 9428, 1796, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(22, 676, 22, 10668, 2032, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(23, 2584, -3, 14952, 2848, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(24, 67543, -5, 20237, 3855, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(25, 8883, -8, 16834, 3206, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(26, 11708, -3, 8047, 1533, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(27, 10631, -7, 20624, 3928, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(28, 17766, -3, 21591, 4113, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(29, 17764, -5, 4267, 813, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(30, 13856, -8, 22181, 4225, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(31, 1213, -3, 25074, 4776, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(32, 22134, -7, 19992, 3808, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(33, 12991, -3, 4536, 864, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(34, 13152, -5, 4662, 888, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(35, 12954, -8, 5418, 1032, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(36, 13132, -3, 2646, 504, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(37, 17966, -7, 17091, 3256, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(38, 18473, -3, 19192, 3656, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(39, 9260, -5, 12449, 2371, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(40, 6636, -8, 6310, 1202, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(41, 4013, -3, 8988, 1712, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(42, 5470, -7, 8232, 1568, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(43, 15662, -3, 9428, 1796, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(44, 676, -5, 10668, 2032, '0000-00-00 00:00:00', 'ADMIN_TIENDA'),
(47, 67543, -1, 20237, 3855, '2023-10-09 15:40:48', 'BUY'),
(48, 67543, -1, 20237, 3855, '2023-10-09 15:41:33', 'BUY'),
(49, 6636, -1, 6310, 1202, '2023-10-09 15:45:44', 'BUY'),
(50, 11708, -1, 8047, 1533, '2023-10-09 15:46:18', 'BUY'),
(51, 67543, -1, 20237, 3855, '2023-10-09 15:48:31', 'BUY'),
(52, 67543, -1, 20237, 3855, '2023-10-09 15:49:42', 'BUY'),
(53, 11708, -1, 8047, 1533, '2023-10-09 15:50:25', 'BUY'),
(54, 676, -1, 10668, 2032, '2023-10-09 15:51:16', 'BUY'),
(55, 67543, -1, 20237, 3855, '2023-10-09 15:51:55', 'BUY'),
(56, 676, 10, 10668, 2032, '2023-10-09 18:29:57', 'ADMIN_TIENDA'),
(58, 676, -10, 0, 0, '2023-10-09 18:34:35', 'ADMIN_TIENDA'),
(59, 1213, -2, 0, 0, '2023-10-09 18:37:51', 'ADMIN_TIENDA'),
(60, 2584, -2, 14952, 2848, '2023-10-10 10:16:09', 'BUY'),
(61, 12954, -1, 5418, 1032, '2023-10-10 10:16:09', 'BUY'),
(62, 17766, -1, 21591, 4113, '2023-10-10 10:16:09', 'BUY'),
(63, 2584, -2, 14952, 2848, '2023-10-10 10:25:15', 'BUY'),
(64, 22134, -3, 19992, 3808, '2023-10-10 10:25:15', 'BUY'),
(65, 13152, -1, 4662, 888, '2023-10-10 10:31:53', 'BUY'),
(66, 67543, -2, 20237, 3855, '2023-10-10 10:31:53', 'BUY'),
(67, 4013, 10, 0, 0, '2023-10-10 10:34:22', 'ADMIN_TIENDA'),
(68, 4013, -50, 0, 0, '2023-10-10 10:34:35', 'ADMIN_TIENDA'),
(69, 4013, 10, 0, 0, '2023-10-10 10:35:07', 'ADMIN_TIENDA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `ref` int(11) NOT NULL,
  `product_name` varchar(150) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` varchar(300) NOT NULL,
  `specifications` varchar(300) NOT NULL,
  `sale_price` varchar(20) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  `creation_usser` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `ref`, `product_name`, `brand`, `category`, `description`, `specifications`, `sale_price`, `image`, `creation_date`, `creation_usser`) VALUES
(1, 2584, 'PECHUGA SIN PIEL FRESCA EUROMAX *KG 2 UND', '', 'CARNICOS', 'PECHUGA SIN PIEL FRESCA EUROMAX *KG 2 UN', '-', '17800', '172380-1600-1600.webp', '2023-10-05 00:00:00', 'ADMIN_TIENDA'),
(2, 67543, 'DETERGENTE POLVO ULTRA FAB X 3 KG', '', 'ASEO', 'DETERGENTE POLVO ULTRA FAB X 3 KG', '', '24092', '173309-1600-1600.webp', '2023-10-06 14:40:52', 'ADMIN_TIENDA'),
(3, 8883, 'QUESO PARMESANO RALLADO x 250GR ALPINA', '', 'LACTEOS', 'QUESO PARMESANO RALLADO x 250GR ALPINA', '-', '20040', '158799-1600-1600.webp', '2023-10-06 15:09:07', 'ADMIN_TIENDA'),
(4, 11708, 'QUESO CREMA COLANTA 400gr', '', 'LACTEOS', 'QUESO CREMA COLANTA 400gr', '-', '9580', '172146-1600-1600.webp', '2023-10-06 15:09:07', 'ADMIN_TIENDA'),
(5, 10631, 'ALIM LACTEO KLIM 3+PREBIO3 x 500 GR', '', 'LACTEOS', 'ALIM LACTEO KLIM 3+PREBIO3 x 500 GR', '-', '24552', '158629-1600-1600.webp', '2023-10-06 15:10:20', 'ADMIN_TIENDA'),
(6, 17766, 'LECHE UHT ENTERA CAJA COLANTA X6*1000ML', '', 'LACTEOS', 'LECHE UHT ENTERA CAJA COLANTA X6*1000ML', '-', '25704', '170092-1600-1600.webp', '2023-10-06 15:12:00', 'ADMIN_TIENDA'),
(7, 17764, 'LECHE UHT DESLACTOSA CAJA COLANTA*1000ML', '', 'LACTEOS', 'LECHE UHT DESLACTOSA CAJA COLANTA*1000ML', '-', '5080', '170091-1600-1600.webp', '2023-10-06 15:12:00', 'ADMIN_TIENDA'),
(8, 13856, 'CHORIZO MIXTO ANT x 20 UND AP3 LAU', '', 'CARNICOS', 'CHORIZO MIXTO ANT x 20 UND AP3 LAU', '-', '26406', '158666-1600-1600.webp', '2023-10-06 15:15:40', 'ADMIN_TIENDA'),
(9, 1213, 'CARNE RES PORCIONAD RANCHERA*600GR', '', 'CARNICOS', 'CARNE RES PORCIONAD RANCHERA*600GR', '-', '29850', '169458-1600-1600.webp', '2023-10-06 15:15:40', 'ADMIN_TIENDA'),
(10, 22134, 'CARNE HAMBURGUESA LE CARNE GOURMET*750GR', '', 'CARNICOS', 'CARNE HAMBURGUESA LE CARNE GOURMET*750GR', '', '23800', '165659-1600-1600.webp', '2023-10-06 15:16:04', 'ADMIN_TIENDA'),
(11, 12991, 'CEBOLLA ROJA', '', 'VERDURAS', 'CEBOLLA ROJA', '-', '5400', '159571-1600-1600.webp', '2023-10-06 15:19:27', 'ADMIN_TIENDA'),
(12, 13152, 'TOMATE CHONTO', '', 'VERDURAS', 'TOMATE CHONTO', '-', '5550', '157792-1600-1600.webp', '2023-10-06 15:19:27', 'ADMIN_TIENDA'),
(13, 12954, 'AGUACATE HASS', '', 'VERDURAS', 'AGUACATE HASS', '', '6450', '158707-1600-1600.webp', '2023-10-06 15:20:08', 'ADMIN_TIENDA'),
(14, 13132, 'PLATANO', '', 'VERDURAS', 'PLATANO', '-', '3150', '172474-1600-1600.webp\r\n', '2023-10-06 15:21:46', 'ADMIN_TIENDA'),
(15, 17966, 'LAVAPLATOS LIQ LIMON AXION x2,3LT', '', 'ASEO', 'LAVAPLATOS LIQ LIMON AXION x2,3LT', 'Axion', '20347', '166997-1600-1600.png', '2023-10-06 15:24:26', 'ADMIN_TIENDA'),
(16, 18473, 'PAPEL HIGIENICO SCOTT CUID COMP *12 UND', '', 'ASEO', 'PAPEL HIGIENICO SCOTT CUID COMP *12 UND', 'Scott', '22848', '155741-1600-1600.webp', '2023-10-06 15:24:26', 'ADMIN_TIENDA'),
(17, 9260, 'SUAVIZANTE SOFLAN PRIMAVERA*2UND*1000ML', '', 'ASEO', 'SUAVIZANTE SOFLAN PRIMAVERA*2UND*1000ML', 'Suavitel', '14820', '159926-1600-1600.webp', '2023-10-06 15:26:29', 'ADMIN_TIENDA'),
(18, 6636, 'TOALLA COCINA FAMILIA GREEN*1UND', '', 'ASEO', 'TOALLA COCINA FAMILIA GREEN*1UND', 'Familia', '7512', '170686-1600-1600.png', '2023-10-06 15:26:29', 'ADMIN_TIENDA'),
(19, 4013, 'DUO PACK COCACOLA ORG*1,5LT SIN AZUx1,5', '', 'BEBIDAS GASEOSAS', 'DUO PACK COCACOLA ORG*1,5LT SIN AZUx1,5', 'Coca cola', '10700', '161078-1600-1600.png', '2023-10-06 15:29:20', 'ADMIN_TIENDA'),
(20, 5470, 'GASEOSA COCACOLA CREATIONS S/AZUCA 4PACK', '', 'BEBIDAS GASEOSAS', 'GASEOSA COCACOLA CREATIONS S/AZUCA 4PACK', 'Coca cola', '9800', '159659-1600-1600.png', '2023-10-06 15:29:20', 'ADMIN_TIENDA'),
(21, 15662, 'DUO GASEOSA POSTOBON x 3125 ML', '', 'BEBIDAS GASEOSAS', 'DUO GASEOSA POSTOBON x 3125 ML', 'Postobon', '11224', '169574-1600-1600.webp', '2023-10-06 15:30:51', 'ADMIN_TIENDA'),
(22, 676, 'DUO BRETAÑA 2Ux2.5LT + CANADA DRY 1.5LT', '', 'BEBIDAS GASEOSAS', 'DUO BRETAÑA 2Ux2.5LT + CANADA DRY 1.5LT', 'Postobon', '12700', '159716-1600-1600.png', '2023-10-06 15:30:51', 'ADMIN_TIENDA'),
(26, 3242, 'PRUEBA', 'PRUEBA', 'PRUEBA', 'PRUEBA', 'PRUEBA', '20000', 'esc_col.png', '2023-10-10 10:33:07', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL,
  `date_cart` date NOT NULL,
  `ref` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `create_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `nombres` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `rol` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `token` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `date_con` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `nombres`, `password`, `rol`, `mail`, `token`, `fecha`, `date_con`) VALUES
(1, 'alex@gmail.com', 'Alexander Cifuentes', '827ccb0eea8a706c4c34a16891f84e7b', 'GERENTE_TIENDA', 'alex@gmail.com', '', '2023-10-03', '2023-10-09 23:01:46');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inventories`
--
ALTER TABLE `inventories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ref` (`ref`);

--
-- Indices de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `inventories`
--
ALTER TABLE `inventories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

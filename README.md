<h1 align="center"> Amigo Secreto </h1>

## Descripción del Programa

**Amigo Secreto** es una aplicación web interactiva que permite organizar sorteos para intercambio de regalos entre amigos. [1](#0-0) 

## Funcionamiento

### 1. Agregar Participantes
La aplicación permite agregar nombres de participantes mediante un campo de entrada de texto. [2](#0-1) 

### 2. Validaciones Implementadas
El sistema incluye múltiples validaciones para asegurar la calidad de los datos:
- **Campos vacíos**: No permite agregar nombres en blanco [3](#0-2) 
- **Números y caracteres especiales**: Rechaza entradas que contengan números o símbolos especiales [4](#0-3) 
- **Nombres duplicados**: Evita agregar el mismo nombre dos veces [5](#0-4) 

### 3. Visualización de Lista
Los nombres agregados se muestran dinámicamente en una lista visible al usuario. [6](#0-5) 

### 4. Sorteo Aleatorio
El programa genera un sorteo aleatorio entre todos los participantes agregados. [7](#0-6) 

## Puntos Claves

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica de la aplicación [8](#0-7) 
- **CSS3**: Diseño responsive con variables CSS personalizadas [9](#0-8) 
- **JavaScript**: Lógica de validación y sorteo sin dependencias externas [10](#0-9) 

### Características de Usabilidad
- **Interfaz intuitiva**: Diseño claro con títulos descriptivos [11](#0-10) 
- **Accesibilidad**: Implementa atributos ARIA para lectores de pantalla [12](#0-11) 
- **Retroalimentación visual**: Resultado del sorteo destacado en color verde [13](#0-12) 

### Seguridad y Validación
- **Limpieza de datos**: Elimina espacios y convierte a minúsculas para consistencia [14](#0-13) 
- **Prevención de sorteos vacíos**: No permite sortear sin participantes [15](#0-14) 

## Flujo de Uso
1. El usuario ingresa nombres de participantes uno por uno
2. El sistema valida y agrega cada nombre a la lista
3. Una vez completada la lista, se presiona el botón "Sortear amigo"
4. El sistema selecciona aleatoriamente un participante y muestra el resultado

## Notes

Esta aplicación es un proyecto educativo que demuestra conceptos fundamentales de desarrollo web frontend. El código está bien estructurado con separación clara de responsabilidades entre HTML, CSS y JavaScript. La implementación incluye buenas prácticas de validación de datos y accesibilidad web, haciendo que sea un ejemplo sólido para aprender desarrollo web básico.

<h1 align="center"> Amigo Secreto </h1>

> [!NOTE]   
> Es el primer desafio del programa G9 de Oracle One y Alura Latam.

## Descripción del Programa

> [!IMPORTANT]   
> Oracle One y Alura Latam proporcionaron los archivos **HTML** y **CSS** terminados para enfocarse al 100% en la lógica con Java Script.
> Agregué algunas líneas de código adicionales al **HTML** y **CSS**.

El Challenge **Amigo Secreto** es una aplicación web interactiva que permite organizar sorteos entre amigos.

## Funcionamiento

### 1. Agregar Participantes
La aplicación permite agregar nombres de participantes mediante un campo de entrada de texto.
![ejemplo]() 

### 2. Validaciones Implementadas
El sistema incluye múltiples validaciones para asegurar la calidad de los datos:
- **Campos vacíos**: No permite agregar nombres en blanco.
- **Números y caracteres especiales**: Rechaza entradas que contengan números o símbolos especiales.
> [!TIP] 
> En los parametros **()** de **IF** se aplica: lista === "" || /\d/.test(lista) || /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(lista) para las 3 validaciones anteriores.  
- **Nombres duplicados**: Evita agregar el mismo nombre dos veces.
> [!TIP] 
> En los parametros **()** de otro **IF** utiliza el metodo:
> **.includes ()**

### 3. Visualización de Lista
Los nombres agregados se muestran dinámicamente en una lista visible al usuario.
> [!TIP]
> Utiliza el metodo:
> **.push ()** y luego se llama a una Función que crea la lista mediante el bucle/loop **FOR**.

### 4. Sorteo Aleatorio
El programa genera un sorteo aleatorio entre todos los participantes agregados.
> [!TIP]
> Utiliza el objeto:
> **Math** con sus metodos **.floor ()** y **.random** combinados.

### 5. Reinicio del Sistema
El programa permite al usuario **reiniciar el sorteo**.

## Puntos Claves

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica de la aplicación.
- **CSS3**: Diseño responsive con variables CSS personalizadas.
- **JavaScript**: Lógica de validación y sorteo sin dependencias externas.

### Características de Usabilidad
- **Interfaz intuitiva**: Diseño claro con títulos descriptivos.
- **Accesibilidad**: Implementa atributos ARIA para lectores de pantalla.
- **Retroalimentación visual**: Resultado del sorteo destacado en color verde. 

### Seguridad y Validación
- **Limpieza de datos**: Elimina espacios y convierte a minúsculas para consistencia.
> [!TIP] 
> Utiliza los metodos:
> .trim () y .toLowerCase () 
- **Prevención de sorteos vacíos**: No permite sortear sin participantes.

## Flujo de Uso
- El usuario ingresa nombres de participantes uno por uno.
- El sistema valida y agrega cada nombre a la lista.
- Una vez completada la lista, se presiona el botón "Sortear amigo".
- El sistema selecciona aleatoriamente un participante y muestra el resultado.
- El sistema cuenta con un reinicio, preiona el botón "Reiniciar Sorteo".

## Resumen

Esta aplicación es un proyecto educativo que demuestra conceptos fundamentales de desarrollo web frontend. La implementación incluye buenas prácticas de validación de datos y accesibilidad web, haciendo que sea un ejemplo sólido para aprender desarrollo web básico.





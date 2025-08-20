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
![gif que muestra como se agregan los datos](https://github.com/Lm729/Challenge-Amigo-Segreto-Alura/blob/80fa3f8b3a06926a2a4dc1be54db2780e86d6bd3/Explicaci%C3%B3n/Agregar%20Participantes.gif) 

### 2. Validaciones Implementadas
El sistema incluye múltiples validaciones para asegurar la calidad de los datos:
- **Campos vacíos**: No permite agregar nombres en blanco.
- **Números y caracteres especiales**: Rechaza entradas que contengan números o símbolos especiales.
![gif que muestra como se validan los datos](https://github.com/Lm729/Challenge-Amigo-Segreto-Alura/blob/a7bbe2876bebe8fdb2b5d3440dc87b17e7892e53/Explicaci%C3%B3n/Validar.mp4.gif)
> [!TIP] 
> En los parametros **()** de **IF** se aplica el siguiente código para las 3 validaciones anteriores.
![imagen que muestra parte del código](https://github.com/Lm729/Challenge-Amigo-Segreto-Alura/blob/5ea817f334c692fb0763df03d2f30507dae153e2/Explicaci%C3%B3n/C%C3%B3digo%20validar.JPG)

> [!IMPORTANT]
>- En el bloque de código **IF** podemos ver el aviso en forma de **Alert**.
>- La limpieza del **Input** para que el usuario no tenga que borrar manualmente.
>- Se utiliza el **Return** para salir de **función** al terminar el **IF**. .

- **Nombres duplicados**: Evita agregar el mismo nombre dos veces.
> [!TIP] 
> En los parametros **()** de otro **IF** utiliza el metodo:
> **.includes ()**

### 3. Visualización de Lista
Los nombres agregados se muestran dinámicamente en una lista visible al usuario.
> [!TIP]
> Utiliza el metodo:
> **.push ()** y luego se llama a una Función que crea la lista mediante el bucle/loop **FOR**

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
- **Limpieza de datos**: Elimina espacios, convierte a minúsculas para consistencia y futuras comparaciones.
> [!TIP] 
>- Utiliza los metodos:
>- .trim () y .toLowerCase () combinados.
> ![imagen que muestra parte del código](https://github.com/Lm729/Challenge-Amigo-Segreto-Alura/blob/e410bdd4c8bbe909d32f564094e701e2543a6827/Explicaci%C3%B3n/Valida%20y%20convierte%20a%20minuscula.JPG)
- **Prevención de sorteos vacíos**: No permite sortear sin participantes.

## Flujo de Uso
- El usuario ingresa nombres de participantes uno por uno.
- El sistema valida y agrega cada nombre a la lista.
- Una vez completada la lista, se presiona el botón "Sortear amigo".
- El sistema selecciona aleatoriamente un participante y muestra el resultado.
- El sistema cuenta con un reinicio, preiona el botón "Reiniciar Sorteo".

## Resumen

Esta aplicación es un proyecto educativo que demuestra conceptos fundamentales de desarrollo web frontend. La implementación incluye buenas prácticas de validación de datos y accesibilidad web, haciendo que sea un ejemplo sólido para aprender desarrollo web básico.











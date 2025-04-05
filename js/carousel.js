(function() {
    let scene, camera, renderer;
    let carousel;
    let images = [
        { src: 'img/Carousel/Carousel_1.svg', link: 'https://www.ejemplo1.com' },
        { src: 'img/Carousel/Carousel_2.svg', link: 'https://www.ejemplo1.com' },
        { src: 'img/Carousel/Carousel_3.svg', link: 'https://www.ejemplo1.com' },
        { src: 'img/Carousel/Carousel_4.svg', link: 'https://www.ejemplo1.com' },
        { src: 'img/Carousel/Carousel_5.svg', link: 'https://www.ejemplo1.com' }
    ];
    let currentSlide = 0;
    let targetRotation = 0;
    let rotationSpeed = 0.01;  // Velocidad de rotación de la animación
    let rotating = false;  // Variable para evitar que se inicie otra rotación mientras se mueve

    // Crear la escena y la cámara
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Crear el renderizador con fondo transparente
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Obtener el contenedor con id 'pr' y añadir el renderizador allí
    let container = document.getElementById('carousel');
    if (container) {
        container.appendChild(renderer.domElement);  // Insertamos el renderizador en el div
    } else {
        console.error("El contenedor con id 'pr' no se encontró.");
    }

    // Establecer el color de fondo como transparente
    renderer.setClearColor(0x000000, 0); // 0x000000 es el color (negro) y 0 es la transparencia (alpha)

    // Crear el cilindro (será invisible, solo sirve para mantener las imágenes en forma circular)
    let geometry = new THREE.CylinderGeometry(20, 20, 1, 32);  // Radio 20, cilindro de 1 unidad de altura
    let material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: false, visible: false });
    carousel = new THREE.Mesh(geometry, material);
    scene.add(carousel);

    // Posicionar la cámara
    camera.position.z = 15;

    // Añadir una luz ambiental para mejorar la visibilidad
    let light = new THREE.AmbientLight(0x404040, 2);  // Luz suave
    scene.add(light);

    // Cargar las texturas (imágenes del carrusel)
    let loader = new THREE.TextureLoader();

    let meshes = [];
    images.forEach((image, index) => {
        loader.load(image.src, (texture) => {
            // Calcular la relación de aspecto de la imagen
            let aspectRatio = texture.image.width / texture.image.height;

            // Ajustar el tamaño de la geometría según la proporción de la imagen
            let planeWidth = 13.5;  // Aumentar el ancho para hacer las imágenes más grandes
            let planeHeight = planeWidth / aspectRatio;  // Ajuste proporcional de la altura

            let material = new THREE.MeshBasicMaterial({
                map: texture, 
                side: THREE.FrontSide  // Usamos FrontSide para que las imágenes estén orientadas hacia afuera
            });

            let mesh = new THREE.Mesh(new THREE.PlaneGeometry(planeWidth, planeHeight), material);  // Imagen con tamaño ajustado

            // Posicionar las imágenes alrededor del cilindro
            mesh.position.set(Math.sin((index / images.length) * 2 * Math.PI) * 6, 0, Math.cos((index / images.length) * 2 * Math.PI) * 6);  // Distribución circular
            // Girar las imágenes para que apunten hacia afuera (ya está orientado con FrontSide)
            mesh.rotateY(Math.PI);  // Invertir la dirección de las imágenes, para que miren hacia afuera

            // Agregar las imágenes al cilindro
            carousel.add(mesh);  // Añadir cada imagen al cilindro
            meshes.push(mesh); // Guardar las mallas para referencia futura
        });
    });

    // Función para mover a la siguiente imagen, de forma circular
    function moveSlide(direction) {
        if (rotating) return; // No hacer nada si ya está rotando
        rotating = true;  // Indicar que está en rotación

        // Modificar el índice de la imagen actual dependiendo de la dirección
        if (direction === 1) {
            currentSlide = (currentSlide + 1) % images.length; // Mover a la siguiente imagen (y volver a la primera si es la última)
        } else if (direction === -1) {
            currentSlide = (currentSlide - 1 + images.length) % images.length; // Mover a la imagen anterior (y volver a la última si es la primera)
        }

        // Calculamos la rotación objetivo basada en la dirección de la imagen seleccionada
        targetRotation = (currentSlide / images.length) * 2 * Math.PI;

        // Iniciar la animación
        animate();
    }

    // Botones de control
    document.getElementById('prev').addEventListener('click', () => moveSlide(-1));  // Control izquierdo
    document.getElementById('next').addEventListener('click', () => moveSlide(1));  // Control derecho

    // Animación para rotar el carrusel hacia la imagen seleccionada
    function animate() {
        requestAnimationFrame(animate);

        // Mover el carrusel hacia la rotación objetivo con un movimiento suave
        let rotationDifference = targetRotation - carousel.rotation.y;

        // Ajustar la dirección de la rotación para que siempre sea la más corta
        if (rotationDifference > Math.PI) {
            rotationDifference -= 2 * Math.PI;
        } else if (rotationDifference < -Math.PI) {
            rotationDifference += 2 * Math.PI;
        }

        carousel.rotation.y += rotationDifference * rotationSpeed;

        // Mantener las imágenes mirando hacia la cámara
        meshes.forEach(mesh => {
            mesh.lookAt(camera.position);  // Hacer que cada imagen mire siempre hacia la cámara
        });

        // Detener el movimiento cuando el carrusel llega a la rotación exacta
        if (Math.abs(rotationDifference) < 0.01) {
            carousel.rotation.y = targetRotation;
            rotating = false; // Fin de la rotación
        }

        renderer.render(scene, camera);
    }

    // Eliminamos la detección de clics en las imágenes (ya no se necesita)
    // window.addEventListener('click', onMouseClick, false);  // Eliminar esta línea

    animate();
})();

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
    let rotationSpeed = 0.01;  // Rotation speed of the animation
    let rotating = false;  // Variable to prevent initiating another rotation while the carousel is moving

    // Create the scene and the camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create the renderer with transparent background
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Get the container with id 'carousel' and append the renderer to it
    let container = document.getElementById('carousel');
    if (container) {
        container.appendChild(renderer.domElement);  // Insert the renderer into the div
    } else {
        console.error("Container with id 'carousel' not found.");
    }

    // Set the background color to transparent
    renderer.setClearColor(0x000000, 0); // 0x000000 is the color (black) and 0 is the transparency (alpha)

    // Create a cylinder (it will be invisible, just used to hold images in a circular shape)
    let geometry = new THREE.CylinderGeometry(20, 20, 1, 32);  // Radius 20, cylinder with 1 unit height
    let material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: false, visible: false });
    carousel = new THREE.Mesh(geometry, material);
    scene.add(carousel);

    // Position the camera
    camera.position.z = 15;

    // Add ambient light to improve visibility
    let light = new THREE.AmbientLight(0x404040, 2);  // Soft light
    scene.add(light);

    // Load the textures (images for the carousel)
    let loader = new THREE.TextureLoader();

    let meshes = [];
    images.forEach((image, index) => {
        loader.load(image.src, (texture) => {
            // Calculate the aspect ratio of the image
            let aspectRatio = texture.image.width / texture.image.height;

            // Adjust the size of the geometry according to the image aspect ratio
            let planeWidth = 13.5;  // Increase width to make images larger
            let planeHeight = planeWidth / aspectRatio;  // Proportional height adjustment

            let material = new THREE.MeshBasicMaterial({
                map: texture, 
                side: THREE.FrontSide  // Use FrontSide so images face outward
            });

            let mesh = new THREE.Mesh(new THREE.PlaneGeometry(planeWidth, planeHeight), material);  // Image with adjusted size

            // Position images around the cylinder
            mesh.position.set(Math.sin((index / images.length) * 2 * Math.PI) * 6, 0, Math.cos((index / images.length) * 2 * Math.PI) * 6);  // Circular distribution
            // Rotate the images so they face outward (already oriented with FrontSide)
            mesh.rotateY(Math.PI);  // Invert the direction of the images, so they face outward

            // Add the images to the cylinder
            carousel.add(mesh);  // Add each image to the cylinder
            meshes.push(mesh); // Store the meshes for future reference
        });
    });

    // Function to move to the next image, in a circular manner
    function moveSlide(direction) {
        if (rotating) return; // Do nothing if already rotating
        rotating = true;  // Indicate that rotation is in progress

        // Modify the current image index depending on the direction
        if (direction === 1) {
            currentSlide = (currentSlide + 1) % images.length; // Move to the next image (and wrap back to the first if it's the last)
        } else if (direction === -1) {
            currentSlide = (currentSlide - 1 + images.length) % images.length; // Move to the previous image (and wrap back to the last if it's the first)
        }

        // Calculate the target rotation based on the selected image's direction
        targetRotation = (currentSlide / images.length) * 2 * Math.PI;

        // Start the animation
        animate();
    }

    // Control buttons
    document.getElementById('prev').addEventListener('click', () => moveSlide(-1));  // Left control
    document.getElementById('next').addEventListener('click', () => moveSlide(1));  // Right control

    // Animation to rotate the carousel to the selected image
    function animate() {
        requestAnimationFrame(animate);

        // Move the carousel towards the target rotation with smooth movement
        let rotationDifference = targetRotation - carousel.rotation.y;

        // Adjust the rotation direction so it always takes the shortest path
        if (rotationDifference > Math.PI) {
            rotationDifference -= 2 * Math.PI;
        } else if (rotationDifference < -Math.PI) {
            rotationDifference += 2 * Math.PI;
        }

        carousel.rotation.y += rotationDifference * rotationSpeed;

        // Keep images facing the camera
        meshes.forEach(mesh => {
            mesh.lookAt(camera.position);  // Make each image always face the camera
        });

        // Stop movement when the carousel reaches the exact rotation
        if (Math.abs(rotationDifference) < 0.01) {
            carousel.rotation.y = targetRotation;
            rotating = false; // End of the rotation
        }

        renderer.render(scene, camera);
    }

    animate();
})();

// Scene initialization
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// Usar la variable 'renderer' solo en dream.js
const dreamRenderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('spaceCanvas'),
    alpha: true
});
dreamRenderer.setSize(window.innerWidth, window.innerHeight);
dreamRenderer.setClearColor(0x000000, 0);  // Fondo transparente

// Create the light source
const lightSource = new THREE.PointLight(0xFFA500, 1, 100);
lightSource.position.set(0, 0, 0);
scene.add(lightSource);

// Create magic particles
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 500;
const positions = new Float32Array(particleCount * 3);

// Set random positions for the particles
for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = Math.random() * 100 - 50;
    positions[i * 3 + 1] = Math.random() * 100 - 50;
    positions[i * 3 + 2] = Math.random() * 100 - 50;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Load particle texture
const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load('../img/circle.png');

// Create material for the particles
const particleMaterial = new THREE.PointsMaterial({
    map: particleTexture,
    size: 0.4,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});

// Create the particle system and add it to the scene
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Variables for mouse-controlled rotation
let mouseX = 0, mouseY = 0;

// Update mouse position on movement
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = (event.clientY / window.innerHeight) * 2 - 1;
});

// Animation function to update the scene continuously
function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += mouseX * 0.0055;
    particles.rotation.y += mouseY * 0.0055;
    camera.lookAt(scene.position);
    dreamRenderer.render(scene, camera);
}

// Start the animation loop
animate();

// Adjust the canvas size when the window is resized
window.addEventListener('resize', () => {
    dreamRenderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

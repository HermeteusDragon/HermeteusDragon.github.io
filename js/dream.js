/*
This is a project by Hermeteus (Francisco Fernández Coca) for his personal portfolio.
It is released under the CC BY-SA license.
*/

// Scene initialization
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;  // Set the camera position along the z-axis

// Use the 'dreamRenderer' variable only in dream.js
const dreamRenderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('spaceCanvas'),  // Use the canvas element with the id 'spaceCanvas'
    alpha: true  // Enable transparency in the background
});
dreamRenderer.setSize(window.innerWidth, window.innerHeight);  // Set the renderer size
dreamRenderer.setClearColor(0x000000, 0);  // Set transparent background color

// Create the light source
const lightSource = new THREE.PointLight(0xFFA500, 1, 100);  // Create a point light with orange color
lightSource.position.set(0, 0, 0);  // Set the light's position at the center of the scene
scene.add(lightSource);  // Add the light to the scene

// Create magic particles
const particleGeometry = new THREE.BufferGeometry();  // Create the geometry for the particles
const particleCount = 500;  // Set the number of particles
const positions = new Float32Array(particleCount * 3);  // Array to store positions for each particle

// Set random positions for the particles
for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = Math.random() * 100 - 50;  // Random x position between -50 and 50
    positions[i * 3 + 1] = Math.random() * 100 - 50;  // Random y position between -50 and 50
    positions[i * 3 + 2] = Math.random() * 100 - 50;  // Random z position between -50 and 50
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));  // Set particle positions

// Load particle texture
const textureLoader = new THREE.TextureLoader();  // Create a texture loader
const particleTexture = textureLoader.load('../img/circle.png');  // Load the texture for the particles

// Create material for the particles
const particleMaterial = new THREE.PointsMaterial({
    map: particleTexture,  // Apply the texture to the particles
    size: 0.4,  // Set the size of each particle
    transparent: true,  // Enable transparency
    blending: THREE.AdditiveBlending,  // Use additive blending for a glowing effect
    depthWrite: false  // Disable depth writing to make particles visible even when behind others
});

// Create the particle system and add it to the scene
const particles = new THREE.Points(particleGeometry, particleMaterial);  // Create the particle system
scene.add(particles);  // Add the particles to the scene

// Variables for mouse-controlled rotation
let mouseX = 0, mouseY = 0;  // Initialize mouse position variables

// Update mouse position on movement
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;  // Normalize mouseX to the range [-1, 1]
    mouseY = (event.clientY / window.innerHeight) * 2 - 1;  // Normalize mouseY to the range [-1, 1]
});

// Animation function to update the scene continuously
function animate() {
    requestAnimationFrame(animate);  // Request the next frame for animation
    particles.rotation.x += mouseX * 0.0055;  // Rotate particles on the x-axis based on mouseX
    particles.rotation.y += mouseY * 0.0055;  // Rotate particles on the y-axis based on mouseY
    camera.lookAt(scene.position);  // Make the camera always look at the center of the scene
    dreamRenderer.render(scene, camera);  // Render the scene from the camera's perspective
}

// Start the animation loop
animate();  // Begin the animation loop

// Adjust the canvas size when the window is resized
window.addEventListener('resize', () => {
    dreamRenderer.setSize(window.innerWidth, window.innerHeight);  // Adjust renderer size
    camera.aspect = window.innerWidth / window.innerHeight;  // Update camera aspect ratio
    camera.updateProjectionMatrix();  // Update camera projection matrix to match new aspect ratio
});

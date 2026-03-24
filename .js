// --- Simplified Model Loading (Sab kuch ek hi jagah) ---
const mtlLoader = new MTLLoader();
mtlLoader.load('car1.mtl', (materials) => {
    materials.preload();
    
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('car1.obj', (object) => {
        player = object;
        player.scale.set(0.1, 0.1, 0.1); 
        player.position.y = 0;
        scene.add(player);
    });
});


// Is line ko road loading ke andar replace karein
const roadTex = new THREE.TextureLoader().load('road.png');

loadModel('road.mtl', 'road.obj', (obj) => {
    obj.traverse((child) => {
        if (child.isMesh) {
            child.material.map = roadTex; // Direct road.png apply karna
        }
    });
    for(let i = 0; i < 5; i++) {
        let r = obj.clone();
        r.position.z = -i * 60;
        scene.add(r);
        roads.push(r);
    }
});

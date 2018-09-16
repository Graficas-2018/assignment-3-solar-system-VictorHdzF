// Victor Hernandez Ferzuli A010122166
var renderer = null, 
scene = null, 
camera = null,
sunGroup = null,
planetGroup = null;

var duration = 5000; // ms
var currentTime = Date.now();

var Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto;

function animate() 
{
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    var movement = now * 0.001;

// Rotation of groups and planets
    sunGroup.rotation.y -= angle / 5;
    planetGroup.rotation.x += angle * 0.5;

    // Sun.rotation.y += angle * 0.05;
    Mercury.rotation.y += angle * 0.2;
    Venus.rotation.y += angle * 0.4;
    Earth.rotation.y += angle * 0.6;
    Mars.rotation.y += angle * 0.8;
    Jupiter.rotation.y += angle * 1.0;
    Saturn.rotation.y += angle * 1.2;
    Uranus.rotation.y += angle * 1.4;
    Neptune.rotation.y += angle * 1.6;
    Pluto.rotation.y += angle * 1.8;
}

function run() {
    requestAnimationFrame(function() { run(); });
    
        // Render the scene
        renderer.render( scene, camera );

        // Spin the cube for next frame
        animate();
}

function createScene(canvas)
{    
    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);
    
    // Create a new Three.js scene
    scene = new THREE.Scene();
    // Set the background color 
     scene.background = new THREE.Color( "rgb(100, 100, 100)" );
     scene.background = new THREE.TextureLoader().load("images/stars.jpg");

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.z = 45;
    scene.add(camera);

    // Create a group to hold all the objects
    sunGroup = new THREE.Object3D;
    sunGroup.position.set(0, 0, 0);
    scene.add(sunGroup);
    
    // Add a Spot light to show off the objects
    var light = new THREE.SpotLight(0xfff8d4, 1.5, 0, 2);
    light.position.set(0, 0, 0);
    sunGroup.add(light);

    // Create a group for the moons
    planetGroup = new THREE.Object3D;
    sunGroup.add(planetGroup);
    // Move the planet group to a different position
    planetGroup.position.set(1, 1, 0);
///////////////////////////////////////////////////////     PLANET CREATION (INCLUDE MOONS, ORBITS AND RINGS)    /////////////////////////////////////////////////////

///////////////////////////////////////////////////////     SUN CREATION     ///////////////////////////////////////////////////////
    Sun = new THREE.Mesh((new THREE.SphereGeometry(2.8, 20, 20)),(new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load("images/sunmap.jpg")})));
    sunGroup.add(Sun);
///////////////////////////////////////////////////////     MERCURY CREATION     ///////////////////////////////////////////////////////
    Mercury = new THREE.Mesh((new THREE.SphereGeometry(0.5, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mercurymap.jpg"), bumpMap: new THREE.TextureLoader().load("images/mercurybump.jpg"), bumpScale: 0.1})));
    Mercury.position.set(5, 0, 0);
    sunGroup.add(Mercury);
    M_orbit = new THREE.Mesh((new THREE.TorusGeometry(5, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    M_orbit.rotation.set(45, 0, 0);
    sunGroup.add(M_orbit);
///////////////////////////////////////////////////////     VENUS CREATION     ///////////////////////////////////////////////////////
    Venus = new THREE.Mesh((new THREE.SphereGeometry(0.8, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/venusmap.jpg"), bumpMap: new THREE.TextureLoader().load("images/venusbump.jpg"), bumpScale: 0.1})));
    Venus.position.set(10, 0, 0);
    sunGroup.add(Venus);
    V_orbit = new THREE.Mesh((new THREE.TorusGeometry(10, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    V_orbit.rotation.set(45, 0, 0);
    sunGroup.add(V_orbit);
///////////////////////////////////////////////////////     EARTH CREATION     ///////////////////////////////////////////////////////
    Earth = new THREE.Mesh((new THREE.SphereGeometry(1, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/earthmap1k.jpg"), bumpMap: new THREE.TextureLoader().load("images/earthbump1k.jpg"), bumpScale: 0.1})));
    Earth.position.set(15, 0, 0);
    sunGroup.add(Earth);
    Moon = new THREE.Mesh((new THREE.SphereGeometry(0.1, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/moonmap1k.jpg"), bumpMap: new THREE.TextureLoader().load("images/moonbump1k.jpg"), bumpScale: 0.1})));
    Moon.position.set(15, 0, 0);
    planetGroup.add(Moon);
    E_orbit = new THREE.Mesh((new THREE.TorusGeometry(15, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    E_orbit.rotation.set(45, 0, 0);
    sunGroup.add(E_orbit);
///////////////////////////////////////////////////////     MARS CREATION     ///////////////////////////////////////////////////////
    Mars = new THREE.Mesh((new THREE.SphereGeometry(0.6, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Mars.position.set(20, 0, 0);
    sunGroup.add(Mars);
    Deimos = new THREE.Mesh((new THREE.SphereGeometry(0.1, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/deimosbump.jpg"), bumpMap: new THREE.TextureLoader().load("images/moonbump1k.jpg"), bumpScale: 0.1})));
    Deimos.position.set(20, 0, 0);
    planetGroup.add(Deimos);
    Phobos = new THREE.Mesh((new THREE.SphereGeometry(0.08, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/phobosbump.jpg"), bumpMap: new THREE.TextureLoader().load("images/moonbump1k.jpg"), bumpScale: 0.1})));
    Phobos.position.set(20, -1.5, 0);
    planetGroup.add(Phobos);
    MA_orbit = new THREE.Mesh((new THREE.TorusGeometry(20, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    MA_orbit.rotation.set(45, 0, 0);
    sunGroup.add(MA_orbit);
///////////////////////////////////////////////////////     ASTEROID FIELD CREATION     ///////////////////////////////////////////////////////
    /*for (var i = 1; i <= 365; i += 4)
    {
        var Asteroid = new THREE.Mesh((new THREE.DodecahedronGeometry(0.08)), new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("images/phobosbump.jpg")}));
        Asteroid.position.set((Math.cos((Math.PI/180) * i) * 24), 0, (Math.sin((Math.PI/180) * i) * 22.5));
        sunGroup.add(Asteroid);
    }
    for (var i = 1; i <= 365; i += 5)
    {
        var Asteroid = new THREE.Mesh((new THREE.DodecahedronGeometry(0.07)), new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("images/phobosbump.jpg")}));
        Asteroid.position.set((Math.cos((Math.PI/180) * i) * 25), 0, (Math.sin((Math.PI/180) * i) * 23));
        sunGroup.add(Asteroid);
    }
    for (var i = 1; i <= 365; i += 6)
    {
        var Asteroid = new THREE.Mesh((new THREE.DodecahedronGeometry(0.07)), new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("images/phobosbump.jpg")}));
        Asteroid.position.set((Math.cos((Math.PI/180) * i) * 26), 0, (Math.sin((Math.PI/180) * i) * 23.5));
        sunGroup.add(Asteroid);
    }
    for (var i = 1; i <= 365; i += 7)
    {
        var Asteroid = new THREE.Mesh((new THREE.DodecahedronGeometry(0.09)), new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("images/phobosbump.jpg")}));
        Asteroid.position.set((Math.cos((Math.PI/180) * i) * 27), 0, (Math.sin((Math.PI/180) * i)) * 24);
        sunGroup.add(Asteroid);
    }*/
///////////////////////////////////////////////////////     ASTEROID FIELD (.obj) CREATION     ///////////////////////////////////////////////////////
    var loader = new THREE.OBJLoader();
        // load a resource
        loader.load(
        // resource URL
	        "objects/Asteroid.obj",
	    // called when resource is loaded
            function ( object ) 
            {
                object.material = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("images/phobosbump.jpg")});
                object.position.set((Math.cos((Math.PI/180) * 1) * 25), 0, (Math.sin((Math.PI/180) * 1) * 25));
                object.scale.set(0.004, 0.004, 0.004);
                sunGroup.add(object);
                for (var i = 2; i <= 365; i++)
                {
                    Asteroid = object.clone();
                    Asteroid.position.set((Math.cos((Math.PI/180) * i) * (Math.floor(Math.random() * (27 - 22 + 1)) + 22)), 0, (Math.sin((Math.PI/180) * i) * (Math.floor(Math.random() * (27 - 22 + 1)) + 22)));
                    sunGroup.add(Asteroid);
                }
            },
        // called when loading is in progresses
        function ( xhr ) { console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); },
        // called when loading has errors
        function ( error ) { console.log( 'An error happened' );}
        );
///////////////////////////////////////////////////////     JUPITER CREATION     ///////////////////////////////////////////////////////
    Jupiter = new THREE.Mesh((new THREE.SphereGeometry(2.2, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/jupitermap.jpg")})));
    Jupiter.position.set(30, 0, 0);
    sunGroup.add(Jupiter);
    Ganymede = new THREE.Mesh((new THREE.SphereGeometry(0.04, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Ganymede.position.set(30, 2, 0);
    planetGroup.add(Ganymede);
    Callisto = new THREE.Mesh((new THREE.SphereGeometry(0.05, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Callisto.position.set(30, -3.5, 0);
    planetGroup.add(Callisto);
    Io = new THREE.Mesh((new THREE.SphereGeometry(0.06, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Io.position.set(30, 2.5, 0);
    planetGroup.add(Io);
    Europa = new THREE.Mesh((new THREE.SphereGeometry(0.09, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Europa.position.set(30, -3.8, 0);
    planetGroup.add(Europa);
    J_orbit = new THREE.Mesh((new THREE.TorusGeometry(30, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    J_orbit.rotation.set(45, 0, 0);
    sunGroup.add(J_orbit);
///////////////////////////////////////////////////////     SATURN CREATION     ///////////////////////////////////////////////////////
    Saturn = new THREE.Mesh((new THREE.SphereGeometry(1.7, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/saturnmap.jpg")})));
    Saturn.position.set(37, 0, 0);
    sunGroup.add(Saturn);
    Titan = new THREE.Mesh((new THREE.SphereGeometry(0.06, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Titan.position.set(37, 2, 0);
    planetGroup.add(Titan);
    Rhea = new THREE.Mesh((new THREE.SphereGeometry(0.07, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Rhea.position.set(37, -3.5, 0);
    planetGroup.add(Rhea);
    Dione = new THREE.Mesh((new THREE.SphereGeometry(0.08, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Dione.position.set(37, 2.5, 0);
    planetGroup.add(Dione);
    S_ring = new THREE.Mesh((new THREE.RingGeometry(1.8, 2.5, 30)),(new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load("images/saturnringcolor.jpg")})));
    S_ring.position.set(37, 0, 0);
    S_ring.rotation.set(45, 0, 0);
    sunGroup.add(S_ring);
    S_orbit = new THREE.Mesh((new THREE.TorusGeometry(37, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    S_orbit.rotation.set(45, 0, 0);
    sunGroup.add(S_orbit);
///////////////////////////////////////////////////////     URANUS CREATION     ///////////////////////////////////////////////////////
    Uranus = new THREE.Mesh((new THREE.SphereGeometry(1.5, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/uranusmap.jpg")})));
    Uranus.position.set(42, 0, 0);
    sunGroup.add(Uranus);
    Umbriel = new THREE.Mesh((new THREE.SphereGeometry(0.05, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Umbriel.position.set(42, 1, 0);
    planetGroup.add(Umbriel);
    Ariel = new THREE.Mesh((new THREE.SphereGeometry(0.05, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Ariel.position.set(42, -2.5, 0);
    planetGroup.add(Ariel);
    U_ring = new THREE.Mesh((new THREE.RingGeometry(1.6, 2, 30)),(new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load("images/uranusringcolour.jpg")})));
    U_ring.position.set(42, 0, 0);
    U_ring.rotation.set(45, 0, 0);
    sunGroup.add(U_ring);
    U_orbit = new THREE.Mesh((new THREE.TorusGeometry(42, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    U_orbit.rotation.set(45, 0, 0);
    sunGroup.add(U_orbit);
///////////////////////////////////////////////////////     NEPTUNE CREATION     ///////////////////////////////////////////////////////
    Neptune = new THREE.Mesh((new THREE.SphereGeometry(1.5, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/neptunemap.jpg")})));
    Neptune.position.set(47, 0, 0);
    sunGroup.add(Neptune);
    Triton = new THREE.Mesh((new THREE.SphereGeometry(0.05, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Triton.position.set(47, 1, 0);
    planetGroup.add(Triton);
    Proteus = new THREE.Mesh((new THREE.SphereGeometry(0.05, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Proteus.position.set(77, -2.5, 0);
    planetGroup.add(Proteus);
    N_orbit = new THREE.Mesh((new THREE.TorusGeometry(47, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    N_orbit.rotation.set(45, 0, 0);
    sunGroup.add(N_orbit);
///////////////////////////////////////////////////////     PLUTO CREATION     //////////////////////////////////////////////////////
    Pluto = new THREE.Mesh((new THREE.SphereGeometry(0.4, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/plutomap1k.jpg"), bumpMap: new THREE.TextureLoader().load("images/plutobump1k.jpg"), bumpScale: 0.1})));
    Pluto.position.set(52, 0, 0);
    sunGroup.add(Pluto);
    Charon = new THREE.Mesh((new THREE.SphereGeometry(0.03, 20, 20)),(new THREE.MeshPhongMaterial({ map:new THREE.TextureLoader().load("images/mars_1k_color.jpg"), bumpMap: new THREE.TextureLoader().load("images/marsbump1k.jpg"), bumpScale: 0.1})));
    Charon.position.set(47, 1, 0);
    planetGroup.add(Charon);
    P_orbit = new THREE.Mesh((new THREE.TorusGeometry(52, 0.007, 16, 100)),(new THREE.MeshBasicMaterial({ color: 0xf6ff00 })));
    P_orbit.rotation.set(45, 0, 0);
    sunGroup.add(P_orbit);
//////////////////////////////////////////////////////////         //////////////////////////////////////////////////////////

    // Now add the group to our scene
    scene.add( sunGroup );
}
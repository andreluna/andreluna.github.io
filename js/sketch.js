let points = [];
let mousePos;
let triangleCenter;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    
    triangleCenter = createVector(width / 2, height / 2);
    
    // Crie pontos iniciais
    for (let i = 0; i < 9000; i++) { 
        let x = random(width);
        let y = random(height);
        points.push(createVector(x, y));
    }
}

function draw() {
    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(color('#FFD700'), color('#8A2BE2'), inter);
        stroke(c);
        line(0, y, width, y);
    }

    mousePos = createVector(mouseX, mouseY);

    stroke(0); 
    strokeWeight(2); 

    for (let i = 0; i < points.length; i++) {
        point(points[i].x, points[i].y);

        let dir = p5.Vector.sub(points[i], mousePos);
        let distance = dir.mag();
        dir.normalize();

        if (distance < 99) { 
            dir.mult(6.1); 
            points[i].add(dir);
        }

        points[i].add(p5.Vector.random2D().mult(2)); 
        points[i].x = constrain(points[i].x, 0, width);
        points[i].y = constrain(points[i].y, 0, height);
    }

    stroke(0, 255, 0, 50); 
    strokeWeight(13); 
    fill(0, 0, 0, 0); 
    triangle(
        triangleCenter.x - 50, triangleCenter.y + 50,
        triangleCenter.x, triangleCenter.y - 50,
        triangleCenter.x + 50, triangleCenter.y + 50
    );
}

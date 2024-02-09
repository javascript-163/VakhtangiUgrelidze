class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        return "Area calculation not performed for general form.";
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }

    area() {
        return (this.base * this.height) / 2;
    }
}

// Test polymorphism
let circle = new Circle("Circle", 5);
let rectangle = new Rectangle("Rectangle", 4, 6);
let triangle = new Triangle("Triangle", 3, 4);

console.log(`Area of ${circle.name}: ${circle.area()}`);
console.log(`Area of ${rectangle.name}: ${rectangle.area()}`);
console.log(`Area of ${triangle.name}: ${triangle.area()}`);

let generalShape = new Shape("General Form");
console.log(`Area calculation: ${generalShape.area()}`);

"use client"

import React, { useRef, useEffect } from "react";
import "./background.css";

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = 2;
        this.dx = Math.random() * 4 - 2;
        this.dy = Math.random() * 4 - 2;
        this.gravity = 0.03;
        this.alpha = 1; // also serves as death trigger
        this.fadeRate = 0.01; 
        this.dead = false;
    }

    update() {
        if (this.dead) { return; }

        this.x += this.dx;
        this.y += this.dy;
        this.dy += this.gravity;
        this.alpha -= this.fadeRate;
        this.dead = (this.alpha <= 0);
    }

    draw(ctx) {
        if (this.dead) { return; }

        ctx.fillStyle = `rgba(${this.color.join(",")},${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = Math.floor(Math.random() * 2) - 1;
        this.dy = -Math.random() * 3 - 5;
        this.gravity = .04;
        this.radius = 3;

        // Firework explosion settings
        this.explosion_particles = 25;
        this.particles = [];
        this.exploding = false; // If the firework is in the exploding anim
        this.exploded = false; // If the exploding anim is over
    }

    update() {
        this.t += 1;
        this.x += this.dx;
        this.y += this.dy;
        this.dy += this.gravity;

        if (this.dy <= 1 || this.exploding) { return; }

        this.exploding = true;
        // Initialize particles
        for (let i = 0; i < this.explosion_particles; i++) {
            const color = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
            const particle = new Particle(this.x, this.y, color);
            this.particles.push(particle);
        }
        
    }

    draw(ctx) {
        if (!this.exploding) {
            ctx.fillStyle = "#F0F0F0";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Remove dead particles from the array
            this.particles = this.particles.filter(particle => !particle.dead);

            // Update & Draw particles
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].update();
                this.particles[i].draw(ctx);
            }

            // Check if no particles left
            this.exploded = (this.particles.length <= 0);
        }
    }
}

export default function Background() {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        let fireworks = [];
        let max_fireworks;
        // Draw calls go here
        const draw = (ctx, width, height) => {
            ctx.clearRect(0, 0, width, height); // Clear the canvas before drawing
            // Draw commands here
            // ctx.fillStyle = "#000000";
            // ctx.fillRect(0, 0, width, height);

            // Remove spent fireworks from the array
            fireworks = fireworks.filter(firework => !firework.exploded);
            
            // Refill fireworks
            while(fireworks.length < max_fireworks) {
                let firework =  new Firework(Math.random() * width, height);
                fireworks.push(firework);
            }
            
            // Update each firework
            ctx.fillStyle = "#F0F0F0";
            for (let i = 0; i < fireworks.length; i++) {
                fireworks[i].update();
                fireworks[i].draw(ctx);
            } 
        };

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Draw loop
        const intervalId = setInterval(() => {
            // Set canvas dimensions based on window size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Dynamically update max fireworks based on window size
            max_fireworks = Math.floor(canvas.width / 75);
            draw(ctx, canvas.width, canvas.height);
        }, 10);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return <canvas ref={canvasRef} className="canvas"/>;
}
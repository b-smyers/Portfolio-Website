'use client'

import React, { useRef, useEffect } from 'react';
import './background.css';

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = Math.floor(Math.random() * 2) - 1;
        this.dy = -Math.random() * 2 - 6;
        this.ddy = .04;
        this.exploded = false;
    }

    update() {
        this.t += 1;
        this.x += this.dx;
        this.y += this.dy;
        this.dy += this.ddy;

        if (this.dy >= 1) {
            this.exploded = true;
        }
    }
}

export default function Background() {
    const canvasRef = useRef(null);
    
    let fireworks = [];
    const max_fireworks = 24;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions based on window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Draw loop
        const intervalId = setInterval(() => {
            draw(ctx, canvas.width, canvas.height);
        }, 10);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    // Draw calls go here
    const draw = (ctx, width, height) => {
        ctx.clearRect(0, 0, width, height); // Clear the canvas before drawing
        // Draw commands here
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        // Remove spent fireworks from the array
        fireworks = fireworks.filter(firework => !firework.exploded);
        
        // Create more fireworks
        while(fireworks.length < max_fireworks) {
            let firework =  new Firework(Math.random() * width, height);
            fireworks.push(firework);
        }
        
        // Update each firework
        ctx.fillStyle = '#F0F0F0';
        for (let i = 0; i < fireworks.length; i++) {
            fireworks[i].update();
            ctx.beginPath();
            ctx.arc(fireworks[i].x, fireworks[i].y, 5, 0, Math.PI * 2);
            ctx.fill();
        } 
    };

    return <canvas ref={canvasRef} className='canvas'/>;
}
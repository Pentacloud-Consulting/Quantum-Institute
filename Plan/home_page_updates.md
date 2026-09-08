# Home Page Updates Summary

This document summarizes the recent design and functional updates applied to the components within the `src/FrontEnd/Home Page` directory.

## 1. The Mission Component (`The Mission.tsx`)
The `ArchSketchAnimation` component underwent a complete structural and aesthetic overhaul, transitioning from a 2D line-drawing sketch to a vibrant, immersive 3D scene.

**Key Changes:**
* **3D Structural Transformation:** Converted the flat 2D building representations into a dynamic 3D oblique projection, featuring multi-faceted blocks for the buildings and a sunken structural base platform.
* **"Desert Morning" Aesthetic:**
  * **Sky:** Implemented a smooth morning sky gradient (`from-sky-100` to `to-orange-100`) directly on the container to ensure edge-to-edge seamlessness without aspect ratio cutoffs.
  * **Terrain & Water:** Painted the base platform with warm sand tones (oranges and terracottas) and added a vibrant oasis-blue water feature in the central trough.
  * **Architecture:** Updated the building faces to resemble warm sandstone/terracotta using deep amber colors, enhanced by sunlit "Desert Triangles" architectural cutouts on the top and front faces.
* **Animations (`framer-motion`):**
  * Added smooth upward fade-in transitions for the 3D building blocks triggered on scroll (`whileInView`).
  * Animated the sun's trajectory along a dashed arc.
  * Implemented an animated, flowing light ray with a glowing gradient tail.
  * Added a continuously rotating dashed circular ring in the center of the structure.
  * Animated airflow arrows pointing inward towards the center.

## 2. Quantum Institute Component (`Quantum Institute.tsx`)
* **Sticky Scroll Architecture:** Maintains a modern sticky-scroll layout `h-[200vh]` that pins the content and crossfades between images (Agora and Elysium) and their corresponding text blocks as the user scrolls.
* **Interactive Media Component (`RotatingCircle`):**
  * Features a beautifully constructed `RotatingCircle` component that continuously rotates using `requestAnimationFrame`.
  * The outer ring is composed of four distinct quarter-circle images (`q1.png`, `q2.png`, `q9.png`, `q5.png`).
  * The center of the circle features a masked, autoplaying video (`Footer Video.mp4`) overlaid with a subtle orange blend mode for visual cohesion.
* **Typography & Layout:** Utilizes a clean 3-column layout at the bottom to present the institute's core mission statements around the central rotating media element, with staggered fade-in animations.

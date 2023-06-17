import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Euler, Quaternion } from "three";


function ARCamera({ enableTracking = true }) {
  const { camera } = useThree();
  const orientation = useRef({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  const rotationQuaternion = useRef(new Quaternion());
  const orientationEuler = useRef(new Euler());

  const acceleration = useRef({ x: 0, y: 0, z: 0 });
  const velocity = useRef({ x: 0, y: 0, z: 0 });
  const position = useRef({ x: 0, y: 0, z: 0 });

  const lastFrameTimestamp = useRef(0);

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation, true);
    window.addEventListener("devicemotion", handleMotion, true);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
      window.removeEventListener("devicemotion", handleMotion, true);
    };
  }, []);

  function handleOrientation(event) {
    // Convert the device's rotation angles to radians
    orientation.current.alpha = (event.alpha * Math.PI) / 180;
    orientation.current.beta = (event.beta * Math.PI) / 180;
    orientation.current.gamma = (event.gamma * Math.PI) / 180;

    // Calculate the new camera rotation based on the device's rotation
    const offset = Math.PI / 2;
    orientationEuler.current.fromArray([
      -orientation.current.beta,
      orientation.current.gamma,
      orientation.current.alpha,
    ]);

    rotationQuaternion.current.setFromEuler(orientationEuler.current);
  }

  function handleMotion(event) {
    const { x, y, z } = event.accelerationIncludingGravity;

    // Update acceleration values
    acceleration.current.x = x;
    acceleration.current.y = y;
    acceleration.current.z = z;
  }

  useFrame(({ camera }) => {
    const timestamp = performance.now();

    if (enableTracking) {
      const frameTime = timestamp - lastFrameTimestamp.current;

      // Integrate acceleration to calculate velocity
      velocity.current.x += acceleration.current.x / frameTime;
      velocity.current.y += acceleration.current.y / frameTime;
      velocity.current.z += acceleration.current.z / frameTime;

      // Apply velocity to camera position
      position.current.x -= velocity.current.x / frameTime;
      position.current.y -= velocity.current.y / frameTime;
      position.current.z -= velocity.current.z / frameTime;

      // Set camera position
      camera.position.set(
        0, //position.current.x,
        position.current.y,
        0 //position.current.z
      );
    }

    // Set camera rotation based on the rotationQuaternion
    camera.setRotationFromQuaternion(rotationQuaternion.current);
    lastFrameTimestamp.current = timestamp;
  });

  return null;
}


export default ARCamera
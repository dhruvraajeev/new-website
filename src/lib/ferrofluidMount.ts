// Vanilla (non-React) mount for the ferrofluid background — used by
// standalone pages like /thoughts/*.html that aren't part of the React app.
import { Renderer, Program, Mesh, Triangle } from "ogl";
import {
  ferrofluidVertex,
  ferrofluidFragment,
  prepColors,
  flowVec,
} from "./ferrofluidCore";

export interface FerrofluidMountOptions {
  colors?: string[];
  speed?: number;
  glow?: number;
  opacity?: number;
}

export function mountFerrofluid(
  container: HTMLElement,
  options: FerrofluidMountOptions = {},
): () => void {
  const { colors, speed = 0.4, glow = 0.7, opacity = 0.3 } = options;

  const renderer = new Renderer({
    dpr: window.devicePixelRatio || 1,
    alpha: true,
    antialias: true,
  });
  const gl = renderer.gl;
  const canvas = gl.canvas as HTMLCanvasElement;
  gl.clearColor(0, 0, 0, 0);
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.display = "block";
  container.appendChild(canvas);

  const { arr, count } = prepColors(colors);

  const uniforms = {
    iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
    iMouse: { value: [0, 0] },
    iTime: { value: 0 },
    uColor0: { value: arr[0] },
    uColor1: { value: arr[1] },
    uColor2: { value: arr[2] },
    uColor3: { value: arr[3] },
    uColor4: { value: arr[4] },
    uColor5: { value: arr[5] },
    uColor6: { value: arr[6] },
    uColor7: { value: arr[7] },
    uColorCount: { value: count },
    uFlow: { value: flowVec("down") },
    uSpeed: { value: speed },
    uScale: { value: 1.6 },
    uTurbulence: { value: 1 },
    uFluidity: { value: 0.1 },
    uRimWidth: { value: 0.2 },
    uSharpness: { value: 2.5 },
    uShimmer: { value: 1.5 },
    uGlow: { value: glow },
    uOpacity: { value: opacity },
    uMouseEnabled: { value: 0 },
    uMouseStrength: { value: 1 },
    uMouseRadius: { value: 0.35 },
  };

  const program = new Program(gl, {
    vertex: ferrofluidVertex,
    fragment: ferrofluidFragment,
    uniforms,
  });
  const geometry = new Triangle(gl);
  const mesh = new Mesh(gl, { geometry, program });

  const resize = () => {
    const rect = container.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height);
    uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  let rafId = requestAnimationFrame(function loop(t) {
    rafId = requestAnimationFrame(loop);
    uniforms.iTime.value = t * 0.001;
    renderer.render({ scene: mesh });
  });

  return () => {
    cancelAnimationFrame(rafId);
    ro.disconnect();
    if (canvas.parentElement === container) container.removeChild(canvas);
    program.remove();
    geometry.remove();
  };
}

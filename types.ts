
export enum AppState {
  INVITING = 'INVITING',
  ENVELOPE = 'ENVELOPE',
  READING = 'READING'
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  angle: number;
  rotation: number;
}

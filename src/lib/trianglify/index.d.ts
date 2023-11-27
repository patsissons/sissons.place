export interface Options {
  width?: number
  height?: number
  xColors?: string
  cellSize?: number
}

export class Pattern {
  toCanvas(): HTMLCanvasElement
}

export default function Trianglify(options: Options): Pattern


precision highp float;
varying vec2 vUv;

void main(){

  vUv = uv;
  gl_Position = modelViewMatrix * vec4( position, 1.0);

}

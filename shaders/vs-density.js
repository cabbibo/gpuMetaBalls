
precision highp float;
varying vec2 vUv;
attribute coords;

void main(){

  vUv = uv;
  gl_Position = vec4( coords* 2. -1 , 0. , 1. );

}

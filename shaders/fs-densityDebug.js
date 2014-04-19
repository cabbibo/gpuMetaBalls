uniform sampler2D texture;
uniform float slice;
uniform float size;
varying vec2 vUv;

void main(){

  vec2 p = vec2( vUv.x , (vUv.y/size) + ( slice / size ));
  vec4 c = texture2D( texture , p );
  gl_FragColor = c * .4;

}

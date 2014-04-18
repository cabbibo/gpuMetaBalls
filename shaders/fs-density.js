uniform int size;

// tex is a texture with each slice of the cube placed in grid in a texture.
// texCoord is a 3d texture coord
// size is the size if the cube in pixels.
// slicesPerRow is how many slices there are across the texture
// numRows is the number of rows of slices
 
vec2 computeSliceOffset(float slice, float slicesPerRow, vec2 sliceSize) {
  return sliceSize * vec2(mod(slice, slicesPerRow), 
                          floor(slice / slicesPerRow));
}
 
vec4 sampleAs3DTexture(
    sampler2D tex, vec3 texCoord, float size, float numRows, float slicesPerRow) {
  float slice   = texCoord.z * size;
  float sliceZ  = floor(slice);                         // slice we need
  float zOffset = fract(slice);                         // dist between slices
 
  vec2 sliceSize = vec2(1.0 / slicesPerRow,             // u space of 1 slice
                        1.0 / numRows);                 // v space of 1 slice
 
  vec2 slice0Offset = computeSliceOffset(sliceZ, slicesPerRow, sliceSize);
  vec2 slice1Offset = computeSliceOffset(sliceZ + 1.0, slicesPerRow, sliceSize);
 
  vec2 slicePixelSize = sliceSize / size;               // space of 1 pixel
  vec2 sliceInnerSize = slicePixelSize * (size - 1.0);  // space of size pixels
 
  vec2 uv = slicePixelSize * 0.5 + texCoord.xy * sliceInnerSize;
  vec4 slice0Color = texture2D(tex, slice0Offset + uv);
  vec4 slice1Color = texture2D(tex, slice1Offset + uv);
  return mix(slice0Color, slice1Color, zOffset);
  return slice0Color;
}


void main(){



}

precision highp float;
varying highp vec2 vVertTexCoord;

uniform sampler2D video;

void main() {
  vec4 origColor = texture2D(video, vec2(vVertTexCoord.x, vVertTexCoord.y*0.5));
  vec4 maskColor = texture2D(video, vec2(vVertTexCoord.x, vVertTexCoord.y*0.5 + 0.5));

  gl_FragColor = origColor * maskColor.r;
}

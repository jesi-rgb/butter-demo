precision highp float;
varying highp vec2 vVertTexCoord;

uniform sampler2D bg;
uniform sampler2D fg;

void main() {
  vec4 origColor = texture2D(bg, vVertTexCoord);
  vec4 maskColor = texture2D(fg, vVertTexCoord);
  gl_FragColor = origColor * maskColor.r;
}
precision highp float;
varying highp vec2 vVertTexCoord;

uniform sampler2D video;

void main() {
  vec4 origColor = texture2D(video, vVertTexCoord);

  gl_FragColor = origColor;
}

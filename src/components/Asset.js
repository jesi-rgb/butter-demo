import Draggable from "react-draggable";

export default function Asset() {
  return (
    <Draggable cancel=".body">
      <span className="h-32 shrink-0 rounded-sm border-2 border-blue-700 bg-gradient-to-br from-blue-500 to-blue-600"></span>
    </Draggable>
  );
}

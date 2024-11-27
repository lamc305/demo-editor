"use client";
import EditorCanvas from "@/features/fabric/EditorCanvas";
import Toolbox from "@/features/fabric/Toolbox";
import { useEffect, useRef, useState } from "react";
import {
  Canvas,
  FabricObject,
  FabricObjectProps,
  ObjectEvents,
  PencilBrush,
  SerializedObjectProps,
} from "fabric";

export default function Fabric() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<Canvas>();
  const [selected, setSelected] =
    useState<
      FabricObject<
        Partial<FabricObjectProps>,
        SerializedObjectProps,
        ObjectEvents
      >
    >();

  console.log(selected);

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current as HTMLCanvasElement, {
      backgroundColor: "white",
      selection: true,
      selectionBorderColor: "blue",
      hoverCursor: "pointer",
    });
    const brush = new PencilBrush(canvas);
    brush.color = "black";
    brush.width = 5;
    canvas.freeDrawingBrush = brush;
    canvas.setDimensions({ width: 1200, height: 780 });
    canvas.on({
      "selection:created": (e) => {
        console.log(e.selected[0]);
        if (e.selected[0].type !== "group") {
          setSelected(e.selected[0]);

          switch (e.selected[0].type) {
            case "rect":
            case "circle":
            case "triangle":
              // this.figureEditor = true;
              // this.getFill();
              break;
            case "i-text":
              // this.textEditor = true;
              console.log(
                e.selected[0].get("lineHeight"),
                e.selected[0].get("charSpacing"),
                e.selected[0].get("bold"),
                e.selected[0].get("fill"),
                e.selected[0].get("textDecoration"),
                e.selected[0].get("textAlign"),
                e.selected[0].get("fontFamily")
              );
              break;
            case "image":
              break;
          }
        }
      },
    });
    setCanvas(canvas);

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Delete") {
        for (const obj of canvas.getActiveObjects()) {
          canvas.remove(obj);
          canvas.discardActiveObject();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      canvas?.dispose();
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [canvasRef, setCanvas]);

  return (
    <div className="flex flex-col h-screen ">
      <Toolbox canvas={canvas} />
      <EditorCanvas ref={canvasRef} canvas={canvas as Canvas} />
    </div>
  );
}

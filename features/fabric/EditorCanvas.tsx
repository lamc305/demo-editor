import { Canvas } from "fabric";
import { forwardRef } from "react";

const EditorCanvas = forwardRef(({ canvas }: { canvas: Canvas }, ref) => {
  return (
    <div className="overflow-auto flex-1 bg-[#777] flex items-center justify-center">
      <canvas
        ref={ref as React.RefObject<HTMLCanvasElement>}
        className="w-full h-full"
        width="1200"
        height="780"
      ></canvas>
      <div className="h-[780px] bg-white ml-6 w-[300px] border-[1px] border-gray-600 drop-shadow-lg ">
        <div className="bg-slate-300 py-4 pl-3">
          <h2 className="">Custom design</h2>
        </div>
        <div
          className="custom-item"
          // *ngIf="canvas.selected && canvas.selected.type != 'group'"
        >
          <div className="custom-item-title">Opacity</div>
          <div className="custom-item-body">
            <input
              type="range"
              // [(ngModel)]="canvas.props.opacity"
              // onChange={}
              // (change)="setOpacity()"
            />
            {/* {canvas} */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default EditorCanvas;

EditorCanvas.displayName = "EditorCanvas";

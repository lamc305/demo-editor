import { Canvas, Image, IText } from "fabric";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { FaDownload, FaFont, FaImage, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const Toolbox = ({ canvas }: { canvas: Canvas | undefined }) => {
  const [drawingMode, setDrawingMode] = useState<boolean>(false);
  const data = useMemo(() => {
    const meme = {
      version: "6.5.1",
      objects: [
        {
          type: "Path",
          version: "6.5.1",
          originX: "left",
          originY: "top",
          left: 261.495,
          top: 39,
          width: 648.01,
          height: 330.005,
          fill: null,
          stroke: "black",
          strokeWidth: 5,
          strokeDashArray: null,
          strokeLineCap: "round",
          strokeDashOffset: 0,
          strokeLineJoin: "round",
          strokeUniform: false,
          strokeMiterLimit: 10,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: "",
          fillRule: "nonzero",
          paintFirst: "fill",
          globalCompositeOperation: "source-over",
          skewX: 0,
          skewY: 0,
          path: [
            ["M", 249.995, 295.5],
            ["Q", 250, 295.5, 250.5, 296],
            ["Q", 251, 296.5, 251.5, 296.5],
            ["Q", 252, 296.5, 253, 296.5],
            ["Q", 254, 296.5, 255, 296.5],
            ["Q", 256, 296.5, 257.5, 296.5],
            ["Q", 259, 296.5, 265.5, 294],
            ["Q", 272, 291.5, 279.5, 289],
            ["Q", 287, 286.5, 290, 285],
            ["Q", 293, 283.5, 302.5, 280],
            ["Q", 312, 276.5, 323, 271.5],
            ["Q", 334, 266.5, 340.5, 264.5],
            ["Q", 347, 262.5, 361, 257.5],
            ["Q", 375, 252.5, 390, 248.5],
            ["Q", 405, 244.5, 412.5, 241.5],
            ["Q", 420, 238.5, 426, 238],
            ["Q", 432, 237.5, 446.5, 234.5],
            ["Q", 461, 231.5, 467, 230.5],
            ["Q", 473, 229.5, 483, 228.5],
            ["Q", 493, 227.5, 498, 226.5],
            ["Q", 503, 225.5, 504.5, 225.5],
            ["Q", 506, 225.5, 506.5, 225.5],
            ["Q", 507, 225.5, 507, 226.5],
            ["Q", 507, 227.5, 506, 230.5],
            ["Q", 505, 233.5, 501.5, 243],
            ["Q", 498, 252.5, 495, 261.5],
            ["Q", 492, 270.5, 488, 279.5],
            ["Q", 484, 288.5, 481, 297.5],
            ["Q", 478, 306.5, 475, 317.5],
            ["Q", 472, 328.5, 471, 335],
            ["Q", 470, 341.5, 469, 350.5],
            ["Q", 468, 359.5, 468, 363.5],
            ["Q", 468, 367.5, 468.5, 371],
            ["Q", 469, 374.5, 470, 377],
            ["Q", 471, 379.5, 472.5, 382],
            ["Q", 474, 384.5, 476.5, 386],
            ["Q", 479, 387.5, 483.5, 390.5],
            ["Q", 488, 393.5, 498.5, 396.5],
            ["Q", 509, 399.5, 529, 404.5],
            ["Q", 549, 409.5, 561, 411.5],
            ["Q", 573, 413.5, 597, 416.5],
            ["Q", 621, 419.5, 637, 421.5],
            ["Q", 653, 423.5, 671, 424.5],
            ["Q", 689, 425.5, 706, 427.5],
            ["Q", 723, 429.5, 739, 430.5],
            ["Q", 755, 431.5, 769, 432.5],
            ["Q", 783, 433.5, 794, 435.5],
            ["Q", 805, 437.5, 807.5, 438],
            ["Q", 810, 438.5, 810, 439],
            ["Q", 810, 439.5, 808.5, 441.5],
            ["Q", 807, 443.5, 805, 444.5],
            ["Q", 803, 445.5, 800.5, 446.5],
            ["Q", 798, 447.5, 796.5, 449.5],
            ["Q", 795, 451.5, 793, 452.5],
            ["Q", 791, 453.5, 790.5, 454.5],
            ["Q", 790, 455.5, 789.5, 456.5],
            ["Q", 789, 457.5, 789, 458],
            ["Q", 789, 458.5, 789, 460],
            ["Q", 789, 461.5, 790, 462.5],
            ["Q", 791, 463.5, 792, 464.5],
            ["Q", 793, 465.5, 798, 470],
            ["Q", 803, 474.5, 807.5, 477],
            ["Q", 812, 479.5, 816.5, 483],
            ["Q", 821, 486.5, 828, 490.5],
            ["Q", 835, 494.5, 841.5, 499],
            ["Q", 848, 503.5, 851, 505],
            ["Q", 854, 506.5, 860.5, 510.5],
            ["Q", 867, 514.5, 872.5, 519],
            ["Q", 878, 523.5, 881, 525.5],
            ["Q", 884, 527.5, 884.5, 528],
            ["Q", 885, 528.5, 885, 529],
            ["Q", 885, 529.5, 885, 530],
            ["Q", 885, 530.5, 884.5, 531.5],
            ["Q", 884, 532.5, 883.5, 533],
            ["Q", 883, 533.5, 882.5, 535],
            ["Q", 882, 536.5, 882, 537],
            ["Q", 882, 537.5, 882, 539.5],
            ["Q", 882, 541.5, 882.5, 542],
            ["Q", 883, 542.5, 883.5, 543.5],
            ["Q", 884, 544.5, 886, 547],
            ["Q", 888, 549.5, 889, 550],
            ["Q", 890, 550.5, 890.5, 551.5],
            ["Q", 891, 552.5, 892.5, 553],
            ["Q", 894, 553.5, 895, 554],
            ["Q", 896, 554.5, 897, 555],
            ["L", 898.005, 555.505],
          ],
        },
        {
          fontSize: 40,
          fontWeight: "normal",
          fontFamily: "Times New Roman",
          fontStyle: "normal",
          lineHeight: 1.16,
          text: "Gello",
          charSpacing: 0,
          textAlign: "left",
          styles: [],
          pathStartOffset: 0,
          pathSide: "left",
          pathAlign: "baseline",
          underline: false,
          overline: false,
          linethrough: false,
          textBackgroundColor: "",
          direction: "ltr",
          type: "IText",
          version: "6.5.1",
          originX: "left",
          originY: "top",
          left: 434.2832,
          top: 435.9,
          width: 88.8672,
          height: 45.2,
          fill: "rgb(0,0,0)",
          stroke: null,
          strokeWidth: 1,
          strokeDashArray: null,
          strokeLineCap: "butt",
          strokeDashOffset: 0,
          strokeLineJoin: "miter",
          strokeUniform: false,
          strokeMiterLimit: 4,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: "",
          fillRule: "nonzero",
          paintFirst: "fill",
          globalCompositeOperation: "source-over",
          skewX: 0,
          skewY: 0,
        },
        {
          type: "Path",
          version: "6.5.1",
          originX: "left",
          originY: "top",
          left: 955.2439,
          top: 426,
          width: 0.01,
          height: 1,
          fill: null,
          stroke: "black",
          strokeWidth: 5,
          strokeDashArray: null,
          strokeLineCap: "round",
          strokeDashOffset: 0,
          strokeLineJoin: "round",
          strokeUniform: false,
          strokeMiterLimit: 10,
          scaleX: 1.5481,
          scaleY: 6.9167,
          angle: 0,
          flipX: true,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: "",
          fillRule: "nonzero",
          paintFirst: "fill",
          globalCompositeOperation: "source-over",
          skewX: 0,
          skewY: 0,
          path: [
            ["M", 575.995, 388.5],
            ["Q", 576, 388.5, 576, 388],
            ["L", 576.005, 387.5],
          ],
        },
        {
          type: "Path",
          version: "6.5.1",
          originX: "left",
          originY: "top",
          left: 598.495,
          top: 494,
          width: 0.01,
          height: 0,
          fill: null,
          stroke: "black",
          strokeWidth: 5,
          strokeDashArray: null,
          strokeLineCap: "round",
          strokeDashOffset: 0,
          strokeLineJoin: "round",
          strokeUniform: false,
          strokeMiterLimit: 10,
          scaleX: 24.7757,
          scaleY: 24.7757,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: "",
          fillRule: "nonzero",
          paintFirst: "fill",
          globalCompositeOperation: "source-over",
          skewX: 0,
          skewY: 0,
          path: [
            ["M", 575.995, 387.5],
            ["L", 576.005, 387.5],
          ],
        },
        {
          type: "Path",
          version: "6.5.1",
          originX: "left",
          originY: "top",
          left: 815.495,
          top: 477,
          width: 0.01,
          height: 0,
          fill: null,
          stroke: "black",
          strokeWidth: 5,
          strokeDashArray: null,
          strokeLineCap: "round",
          strokeDashOffset: 0,
          strokeLineJoin: "round",
          strokeUniform: false,
          strokeMiterLimit: 10,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: "",
          fillRule: "nonzero",
          paintFirst: "fill",
          globalCompositeOperation: "source-over",
          skewX: 0,
          skewY: 0,
          path: [
            ["M", 575.995, 387.5],
            ["L", 576.005, 387.5],
          ],
        },
        {
          type: "Path",
          version: "6.5.1",
          originX: "left",
          originY: "top",
          left: 982.495,
          top: 126.125,
          width: 38.005,
          height: 24.88,
          fill: null,
          stroke: "black",
          strokeWidth: 5,
          strokeDashArray: null,
          strokeLineCap: "round",
          strokeDashOffset: 0,
          strokeLineJoin: "round",
          strokeUniform: false,
          strokeMiterLimit: 10,
          scaleX: 1,
          scaleY: 1,
          angle: 0,
          flipX: false,
          flipY: false,
          opacity: 1,
          shadow: null,
          visible: true,
          backgroundColor: "",
          fillRule: "nonzero",
          paintFirst: "fill",
          globalCompositeOperation: "source-over",
          skewX: 0,
          skewY: 0,
          path: [
            ["M", 710.995, 234.5],
            ["Q", 711, 234.5, 712, 233.5],
            ["Q", 713, 232.5, 713.5, 232.5],
            ["Q", 714, 232.5, 714.5, 232],
            ["Q", 715, 231.5, 715, 232],
            ["Q", 715, 232.5, 715, 233],
            ["Q", 715, 233.5, 714.5, 234.5],
            ["Q", 714, 235.5, 712.5, 236.5],
            ["Q", 711, 237.5, 709.5, 238.5],
            ["Q", 708, 239.5, 705.5, 242],
            ["Q", 703, 244.5, 690, 250.5],
            ["L", 676.995, 256.505],
          ],
        },
      ],
      background: "white",
    };
    return meme;
  }, []);

  useEffect(() => {
    if (typeof data === "object" && canvas) {
      canvas?.loadFromJSON(data).then(() => {
        canvas.renderAll();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas]);

  function fileHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = async (e) => {
        const image = await Image.fromURL(e?.target?.result as string);
        image.scale(0.5);

        canvas?.add(image);
        canvas?.centerObject(image);
        canvas?.setActiveObject(image);
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
  }

  function clearAll() {
    canvas?.remove(...canvas.getObjects());
  }

  function addText() {
    const text = new IText("Edit this text");
    canvas?.add(text);
    canvas?.centerObject(text);
    canvas?.setActiveObject(text);
  }

  function toggleDrawingMode() {
    if (canvas) {
      canvas.isDrawingMode = !canvas.isDrawingMode as boolean;
      setDrawingMode(canvas?.isDrawingMode as boolean);
    }
  }

  function downloadImage() {
    const link = document.createElement("a");
    link.download = "photo_editor_image.png";
    link.href = canvas?.toDataURL() as string;
    link.click();
  }

  async function downloadExample() {
    const duplicateCanvas = await canvas?.clone([]);

    duplicateCanvas?.forEachObject((object) => {
      console.log(object);
      if (Boolean(object.get("text"))) {
        object.set(
          "text",
          object.get("text").replace("$name", "David").replace("$owner", "Luis")
        );
      }
    });

    const link = document.createElement("a");
    link.download = "photo_editor_image.png";
    link.href = duplicateCanvas?.toDataURL() as string;
    link.click();
  }

  const toJSON = () => {
    console.log(canvas?.toJSON());
  };

  return (
    <div className="p-2 bg-[#414141] flex gap-2">
      <button
        title="Add image"
        className="w-8 h-8 relative text-base border-none bg-[#ccc] rounded-[0.2em] flex items-center  justify-center"
      >
        <FaImage />
        <input
          className="opacity-0 absolute inset-0"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={fileHandler}
        />
      </button>
      <button
        title="Add text"
        onClick={addText}
        className="w-8 h-8 relative text-base border-none bg-[#ccc] rounded-[0.2em] flex items-center justify-center"
      >
        <FaFont />
      </button>

      <button
        title="Drawing mode"
        onClick={toggleDrawingMode}
        className={`w-8 h-8 relative text-base border-none bg-[#ccc] rounded-[0.2em] flex items-center justify-center ${
          drawingMode ? "bg-blue-600" : ""
        }`}
      >
        <FaPencil />
      </button>
      <button
        title="Clear all"
        className="w-8 h-8 relative text-base border-none bg-[#ccc] rounded-[0.2em] flex items-center justify-center"
        onClick={clearAll}
      >
        <FaTrash />
      </button>
      <button
        title="Download as image"
        className="w-8 h-8 relative text-base border-none bg-[#ccc] rounded-[0.2em] flex items-center justify-center"
        onClick={downloadImage}
      >
        <FaDownload />
      </button>
      <button
        title="Download as image"
        className="w-8 h-8 relative text-base border-none bg-[#ccc] rounded-[0.2em] flex items-center justify-center"
        onClick={downloadExample}
      >
        <FaDownload />
      </button>
      <button
        title="Download as image"
        className="w-8 h-8 relative text-base border-none bg-[#ccc] rounded-[0.2em] flex items-center justify-center"
        onClick={toJSON}
      >
        ToJSON
      </button>
    </div>
  );
};

export default Toolbox;

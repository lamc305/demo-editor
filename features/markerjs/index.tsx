/* eslint-disable @next/next/no-img-element */
"use client";
import { MarkerArea, MarkerAreaState } from "markerjs2";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function MarkerJSDemo() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [images, setImages] = useState<string>(
    "https://m.media-amazon.com/images/I/71SyeDuhb9S._AC_SX679_.jpg"
  );
  const [state, setState] = useState<MarkerAreaState>({
    width: 240,
    height: 299,
    markers: [
      {
        color: "#000000",
        fontFamily: "Helvetica, Arial, sans-serif",
        padding: 5,
        text: "Luisito",
        wrapText: false,
        left: 63.2310791015625,
        top: 56.18742370605469,
        width: 89,
        height: 71,
        rotationAngle: 7.744710546422908,
        visualTransformMatrix: {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: 0,
          f: 0,
        },
        containerTransformMatrix: {
          a: 0.9908783426215412,
          b: 0.1347594528171873,
          c: -0.1347594528171873,
          d: 0.9908783426215412,
          e: 12.107354682980727,
          f: -13.868863896941974,
        },
        typeName: "TextMarker",
        state: "select",
      },
    ],
  });
  console.log(state);
  useEffect(() => {
    showMarkerArea();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target?.files?.[0]) {
      setImages(URL.createObjectURL(e.target.files[0]));
    }
  }

  function showMarkerArea() {
    if (imageRef.current) {
      imageRef.current.src = images as string;
      const markerArea = new MarkerArea(imageRef.current as HTMLImageElement);

      markerArea.addEventListener("render", (event) => {
        if (imageRef.current) {
          imageRef.current.src = event.dataUrl;
          setState(event.state);
        }
      });
      markerArea.show();

      if (state) markerArea.restoreState(state as MarkerAreaState);
    }
  }
  console.log({ state });

  return (
    <div className="flex flex-col gap-20">
      <h1 className="font-bold mb-20">Marker.js 2 Demo</h1>
      <input
        onChange={handleChange}
        type="file"
        name="file"
        id="file"
        accept="image/*"
      />
      {Boolean(images) && (
        <img
          onClick={() => showMarkerArea()}
          ref={imageRef}
          src={images}
          alt="image ref"
          className="w-[300px] object-contain mt-20"
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
}

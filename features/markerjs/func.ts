import { MarkerArea, MarkerAreaState } from "markerjs2";
import { Dispatch, RefObject, SetStateAction } from "react";

export function createMarkerArea(
  target: RefObject<HTMLImageElement>,
  handleState: Dispatch<SetStateAction<MarkerAreaState>>
) {
  if (target.current) {
    const markerArea = new MarkerArea(target.current as HTMLImageElement);

    markerArea.addEventListener("render", (event) => {
      if (target.current) {
        target.current.src = event.dataUrl;
        handleState(event.state);
      }
    });
    return markerArea;
  }
}

import { makeSprite, t } from "@replay/core";

export const pipeWidth = 40;
export const pipeGap = 170;

export const Pipe = makeSprite({
  render({ props, device }) {
    const { size } = device;
    const { pipe, score } = props;
    const store = device.storage.getStore();

    const {
      yUpperTop,
      yUpperBottom,
      yLowerTop,
      yLowerBottom,
    } = getPipeYPositions(size, pipe.gapY);

    const highScore = Number(store.highScore);
    const color = score > highScore ? "red" : "green";
    return [
      t.rectangle({
        color: color,
        width: pipeWidth,
        height: yUpperTop - yUpperBottom,
        y: (yUpperTop + yUpperBottom) / 2,
      }),
      t.rectangle({
        color: color,
        width: pipeWidth,
        height: yLowerTop - yLowerBottom,
        y: (yLowerTop + yLowerBottom) / 2,
      }),
    ];
  },
});

export function getPipeYPositions(size, gapY) {
  return {
    yUpperTop: size.height / 2 + size.heightMargin,
    yUpperBottom: gapY + pipeGap / 2,
    yLowerTop: gapY - pipeGap / 2,
    yLowerBottom: -size.height / 2 - size.heightMargin,
  };
}

import React from 'react';

import cx from './Timeline.scss';

//TODO add listener for width change of container, and update canvas as needed
//Right now it listens for change of width in entire page, while this is correct, it might now always be.
//TODO Do not render canvas if he isn't visible on screen. Might hurt performance when scrolling down too much in stream
//Also it will affect amount of memory used by canvas
//TODO also we should cache computed values after array was scaled.
//This is because each second, while listening to music, we will change "played time", and because of that we would need fully recalculate values.
//We also could cache canvas, witch is better, and I might do that.
function handlePlayerCanvas(trackInfo, played, totalTime, container) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const updateCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const
      width = Math.floor(container.getBoundingClientRect().width),
      height = 100;

    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "#D2F287";

    let aspect = Math.ceil(4 * trackInfo.length / width);
    if (aspect <= 0) return;

    const widthOfLine = width / Math.floor(trackInfo.length / aspect) - 2;
    const listenedUpTo = played / totalTime * trackInfo.length;
    let xPos = 0;
    for (let i = 0; i < trackInfo.length; i += aspect)
    {
      if (i > listenedUpTo)
      {
        ctx.fillStyle = "#E1F5B2";
      }

      let sum = 0;
      for (let offset = 0; offset < aspect && offset < trackInfo.length; ++offset)
      {
        sum += trackInfo[i + offset];
      }
      sum /= Math.min(aspect, trackInfo.length - i);

      ctx.fillRect(xPos, (1 - sum) * height, widthOfLine, sum * height);
      xPos += widthOfLine + 2;
    }
  };
  requestAnimationFrame(() => {
    updateCanvas();
    container.appendChild(canvas);
    window.addEventListener('resize', updateCanvas);
  });
}

export default function FullTrackTimeline(props) {
  return (
    <div className={cx('timeline')}>
      <div
        className={cx('timeline__graph')}
        ref={it => {
          handlePlayerCanvas(props.trackAudioInfo, props.played, props.totalTime, it)
        }}
      />
      <div className={cx('timeline__line')}>
        {/* <div className={cx('timeline__time')}>
          <div className={cx('time__current')}>
            <div className={cx('time__current-offset')} style={{flex: "0.2"}}/>
            1:23
          </div>
          <div className={cx('time__total')}>
            4:12
          </div>
        </div> */}
        <div className={cx('timeline__progress-bar')}>
          <div className={cx('progress-bar__line')} style={{flex: "0.2"}}/>
        </div>
      </div>
    </div>
  );
}

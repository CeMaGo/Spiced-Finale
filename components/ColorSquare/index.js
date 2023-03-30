function getRamboRainbowNumbers() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

function getRandomNumber() {
  return (((1 << 24) * Math.random()) | 0).toString(16);
}

export default function ColorSquare() {
  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1">
      <div className="grid grid-cols-4 grid-flow-cols gap-2 mr-2">
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          01
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          02
        </div>
        <div
          className="rounded-full "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          03
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          04
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          05
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          06
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          07
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          08
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          09
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          10
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          11
        </div>
        <div
          className="rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          12
        </div>
        <div
          className="col-span-4 rounded-full"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          13
        </div>
        <br />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          01
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          02
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          03
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          04
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          05
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          06
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          07
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          08
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          09
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          10
        </button>
        <button style={{ background: `${getRamboRainbowNumbers()}` }}>
          {" "}
          11
        </button>
        <div
          className="row-span-2"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          12
        </div>
        <div
          className="col-start-1 col-end-4"
          //   className="col-start-n col-end-n"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          13
        </div>
      </div>
      {/* //===================>>>>>....***....<<<<<=====================\\*/}
      <div id="middle_grid" className="grid grid-cols-4 gap-2">
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 01</div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 02</div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 03</div>
        <div
          className=" gird grid-flow-row-dense "
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <div>***</div>
          <div>!!!</div> 04
        </div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 05</div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 06</div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 07</div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 08</div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 09</div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 10</div>
        <div style={{ background: `${getRamboRainbowNumbers()}` }}> 11</div>
        <div
          className="grid grid-flow-cols auto-cols-auto"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          <div>x</div>
          <div>y</div>
          <div>z</div> 12
        </div>
        <div
          className="col-start-3 col-span-2"
          style={{ background: `${getRamboRainbowNumbers()}` }}
        >
          {" "}
          13
        </div>
      </div>
    </div>
  );
}
//=================================>>>>>*****<<<<<==============================\\

//? with rgba number `${r}${g}${b}${a}` to random minimizing the number range (max 255), can it generate always matching colours?

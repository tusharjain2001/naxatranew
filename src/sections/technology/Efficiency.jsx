// Positions in design px, scaled by `--u` (1 on desktop, 0.8 on the phone).
const u = (n) => `calc(var(--u) * ${n})`
const at = (l, t, w, h) => ({ left: u(l), top: u(t), width: u(w), ...(h !== undefined && { height: u(h) }) })
const label = { fontSize: u(16.076) }

// Efficiency curve for the Antarix-AF58, laid out from the artboard (grid and curve as SVG, labels as text).
function Chart({ chart }) {
  return (
    <figure
      aria-label={`${chart.series}: ${chart.yLabel} against ${chart.xLabel}`}
      className="relative shrink-0 text-[#091816] [--u:calc(var(--spacing)*0.8)] xl:[--u:var(--spacing)]"
      style={{ width: u(462.8), height: u(457) }}
    >
      <img src={chart.grid} alt="" className="absolute max-w-none" style={at(79.48, 0, 374.177, 370.66)} />
      <div className="absolute flex items-center justify-center" style={at(73.15, 36.46, 380.507, 327.757)}>
        <img src={chart.curve} alt="" className="max-w-none shrink-0 rotate-90" style={{ width: u(328.108), height: u(380.507) }} />
      </div>
      <span className="absolute bg-[#091816]" style={at(79.48, 0, 0.8, 363.33)} />
      <span className="absolute bg-[#091816]" style={at(79.48, 363.33, 374.177, 0.8)} />
      <div className="absolute flex items-center justify-between text-center" style={{ ...at(70.33, 370.66, 392.46, 18.29), ...label }}>
        {chart.x.map((v) => (
          <span key={v} style={{ width: u(21.1) }}>
            {v}
          </span>
        ))}
      </div>
      <div className="absolute flex flex-col items-center justify-between leading-none" style={{ ...at(39.38, 25.2, 30.95, 348.15), ...label }}>
        {chart.y.map((v) => (
          <span key={v} className="flex items-center" style={{ height: u(18.29) }}>
            {v}
          </span>
        ))}
      </div>
      <figcaption style={label}>
        <span className="absolute text-center" style={at(194.12, 407.12, 145.59)}>
          {chart.xLabel}
        </span>
        <span className="absolute font-medium" style={at(215.42, 437.94, 145.59)}>
          {chart.series}
        </span>
        <span className="absolute origin-top-left -rotate-90 text-center whitespace-nowrap" style={{ left: 0, top: u(288.25), width: u(178.65) }}>
          {chart.yLabel}
        </span>
      </figcaption>
    </figure>
  )
}

export default function Efficiency({ data }) {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col items-center gap-[calc(var(--spacing)*33.076)] px-16 py-56 xl:flex-row xl:gap-231 xl:px-100 xl:py-100">
      <div className="flex flex-col items-center gap-[calc(var(--spacing)*33.076)] text-center capitalize xl:flex-1 xl:items-start xl:gap-32 xl:text-left">
        <h2 className="text-32 leading-37 tracking-display xl:w-800 xl:text-64 xl:leading-68">{data.title}</h2>
        <p className="w-330 text-14 leading-18 text-grey xl:w-auto xl:text-24 xl:leading-32">{data.text}</p>
      </div>
      <Chart chart={data.chart} />
    </section>
  )
}

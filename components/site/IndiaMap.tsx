'use client'

import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps'

const GEO_URL = '/india-states.json'
const HQ: [number, number] = [79.4861, 11.9401]

const primary = [
  { name: 'Villupuram', coords: [79.4861, 11.9401] as [number, number], hq: true,
    labelX: 0, labelY: -18, anchor: 'middle' as const },
]

const dotsOnly = [
  { name: 'Gingee',     coords: [79.4170, 12.2526] as [number, number] },
  { name: 'Vikravandi', coords: [79.5286, 11.9832] as [number, number] },
  { name: 'Mailam',     coords: [79.6167, 11.8833] as [number, number] },
]

// Static coverage dots — no per-node animation to keep GPU load low
const coverage: Array<{ name: string; coords: [number, number] }> = [
  { name: 'Chennai',        coords: [80.2707, 13.0827] },
  { name: 'Vellore',        coords: [79.1324, 12.9165] },
  { name: 'Kanchipuram',    coords: [79.7036, 12.8185] },
  { name: 'Cuddalore',      coords: [79.7681, 11.7480] },
  { name: 'Salem',          coords: [78.1460, 11.6643] },
  { name: 'Erode',          coords: [77.7172, 11.3410] },
  { name: 'Coimbatore',     coords: [76.9558, 11.0168] },
  { name: 'Tiruppur',       coords: [77.3411, 11.1085] },
  { name: 'Karur',          coords: [78.0767, 10.9601] },
  { name: 'Namakkal',       coords: [78.1674, 11.2232] },
  { name: 'Trichy',         coords: [78.7047, 10.7905] },
  { name: 'Thanjavur',      coords: [79.1378, 10.7870] },
  { name: 'Nagapattinam',   coords: [79.8447, 10.7672] },
  { name: 'Dindigul',       coords: [77.9803, 10.3673] },
  { name: 'Madurai',        coords: [78.1198,  9.9252] },
  { name: 'Sivaganga',      coords: [78.4824,  9.8476] },
  { name: 'Ramanathapuram', coords: [78.8308,  9.3639] },
  { name: 'Tirunelveli',    coords: [77.6921,  8.7139] },
  { name: 'Tuticorin',      coords: [78.1348,  8.7642] },
  { name: 'Nagercoil',      coords: [77.4119,  8.1793] },
]

const lineTargets: Array<[number, number]> = [
  [80.2707, 13.0827],
  [76.9558, 11.0168],
  [78.1198,  9.9252],
  [78.7047, 10.7905],
  [77.6921,  8.7139],
]

export function IndiaMap() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#e8f4ee]" style={{ minHeight: 440 }}>
      <ComposableMap
        width={500}
        height={580}
        projection="geoMercator"
        projectionConfig={{ scale: 4800, center: [78.5, 11.0] }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Tamil Nadu fill */}
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: any[] }) =>
            geographies
              .filter((g) => g.properties.NAME_1 === 'Tamil Nadu')
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1F4D3A"
                  stroke="#ffffff"
                  strokeWidth={1}
                  style={{ default:{outline:'none'}, hover:{outline:'none'}, pressed:{outline:'none'} }}
                />
              ))
          }
        </Geographies>

        {/* Network lines — CSS animation only (no SVG filter) */}
        {lineTargets.map((to, i) => (
          <Line
            key={i}
            from={HQ}
            to={to}
            stroke="#C8A95B"
            strokeWidth={0.8}
            strokeLinecap="round"
            strokeDasharray="5 5"
            className="network-line"
            style={{ animationDelay: `${i * 0.35}s`, opacity: 0.65 }}
          />
        ))}

        {/* Coverage nodes — static dots, no per-node animation */}
        {coverage.map((c) => (
          <Marker key={c.name} coordinates={c.coords}>
            <circle r={2.5} fill="#C8A95B" opacity={0.75} />
            <circle r={1.2} fill="#fff" opacity={0.9} />
          </Marker>
        ))}

        {/* Nearby dots — single pulse ring each */}
        {dotsOnly.map((m, i) => (
          <Marker key={m.name} coordinates={m.coords}>
            <circle r={8} fill="#C8A95B" opacity={0}>
              <animate attributeName="r"       from="4"  to="11" dur="2.8s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.4" to="0"  dur="2.8s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <circle r={3.5} fill="#C8A95B" opacity={0.9} />
            <circle r={1.8} fill="#ffffff" />
          </Marker>
        ))}

        {/* HQ marker — single pulse ring, no expensive SVG filters */}
        {primary.map((m) => (
          <Marker key={m.name} coordinates={m.coords}>
            <circle r={20} fill="#C8A95B" opacity={0}>
              <animate attributeName="r"       from="8"   to="26"  dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0"   dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r={6} fill="#C8A95B" opacity={0.9} />
            <circle r={2.5} fill="#ffffff" />
            <text
              x={m.labelX}
              y={m.labelY}
              textAnchor={m.anchor}
              style={{
                fontSize: '10px',
                fontWeight: 700,
                fill: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                paintOrder: 'stroke',
                stroke: '#1F4D3A',
                strokeWidth: '3px',
                strokeLinejoin: 'round',
              } as React.CSSProperties}
            >
              {m.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3.5 py-2.5 shadow-soft space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm inline-block shrink-0" style={{ background:'#1F4D3A' }} />
          <span className="font-semibold text-foreground">Tamil Nadu</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full inline-block shrink-0" style={{ background:'#C8A95B' }} />
          <span className="text-muted-foreground">Gingee · Vikravandi · Mailam</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-px shrink-0" style={{ borderTop:'2px dashed #C8A95B' }} />
          <span className="text-muted-foreground">Network routes</span>
        </div>
      </div>

      <div
        className="absolute bottom-4 right-4 rounded-xl px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase text-white"
        style={{ background:'#1F4D3A' }}
      >
        Active Region
      </div>
    </div>
  )
}

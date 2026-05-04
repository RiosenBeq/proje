type Row = [metric: string, before: string, after: string, target: string];

function parseValue(v: string): number {
  const m = v.replace(',', '.').match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : 0;
}

function maxOf(rows: Row[]): number {
  let m = 0;
  for (const r of rows) {
    m = Math.max(m, parseValue(r[1]), parseValue(r[2]), parseValue(r[3]));
  }
  return m || 1;
}

export default function BeforeAfter({ rows, eyebrow = 'ÖNCE / SONRA · ÖLÇÜM' }: { rows: Row[]; eyebrow?: string }) {
  if (!rows.length) return null;
  const max = maxOf(rows);

  return (
    <div className="ba-card">
      <div className="ba-head">
        <span className="ba-eyebrow">{eyebrow}</span>
        <span className="ba-legend">
          <span className="ba-key"><i className="ba-dot ba-before" />ÖNCE</span>
          <span className="ba-key"><i className="ba-dot ba-after" />SONRA</span>
          <span className="ba-key"><i className="ba-dot ba-target" />HEDEF</span>
        </span>
      </div>
      <ul className="ba-rows">
        {rows.map(([metric, before, after, target]) => {
          const b = parseValue(before);
          const a = parseValue(after);
          const t = parseValue(target);
          const bw = Math.min(100, (b / max) * 100);
          const aw = Math.min(100, (a / max) * 100);
          const tw = Math.min(100, (t / max) * 100);
          return (
            <li key={metric} className="ba-row">
              <div className="ba-metric">{metric}</div>
              <div className="ba-bars">
                <div className="ba-bar"><span className="ba-fill ba-before" style={{ width: `${bw}%` }} /><span className="ba-val">{before}</span></div>
                <div className="ba-bar"><span className="ba-fill ba-after" style={{ width: `${aw}%` }} /><span className="ba-val">{after}</span></div>
                <div className="ba-bar"><span className="ba-fill ba-target" style={{ width: `${tw}%` }} /><span className="ba-val">{target}</span></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

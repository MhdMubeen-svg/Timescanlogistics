"use client";

import { useState } from "react";

const n = (v: string) => { const x = parseFloat(v); return isNaN(x) || x < 0 ? 0 : x; };
const money = (v: number) => v.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function ToolsClient() {
  /* ---- Landed cost ---- */
  const [goods, setGoods] = useState("10000");
  const [freight, setFreight] = useState("1800");
  const [ins, setIns] = useState("60");
  const [dutyRate, setDutyRate] = useState("6.5");
  const [taxRate, setTaxRate] = useState("5");
  const [fees, setFees] = useState("350");
  const [units, setUnits] = useState("500");

  const cif = n(goods) + n(freight) + n(ins);
  const duty = cif * (n(dutyRate) / 100);
  const taxBase = cif + duty;
  const tax = taxBase * (n(taxRate) / 100);
  const landed = taxBase + tax + n(fees);
  const perUnit = n(units) > 0 ? landed / n(units) : 0;
  const landedExTax = landed - tax;

  /* ---- Chargeable weight ---- */
  const [L, setL] = useState("120");
  const [W, setW] = useState("100");
  const [H, setH] = useState("110");
  const [qty, setQty] = useState("4");
  const [actual, setActual] = useState("480");

  const cbm = (n(L) * n(W) * n(H) * n(qty)) / 1_000_000;
  const volAir = (n(L) * n(W) * n(H) * n(qty)) / 6000; // IATA divisor 6000 cm³/kg
  const chargeableAir = Math.max(n(actual), volAir);
  const tonnes = n(actual) / 1000;
  const revenueTons = Math.max(cbm, tonnes); // ocean LCL W/M

  const field = "field";

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2">

        {/* Landed cost */}
        <div className="rounded-sm border border-ink/10 p-7 lg:p-9" aria-labelledby="lc-h">
          <p className="eyebrow">Calculator 01</p>
          <h2 id="lc-h" className="h-display mt-2 text-2xl">Landed cost estimator</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            The true cost of imported goods: price + freight + insurance + duty + taxes + fees. Enter values in one currency.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div><label className="label" htmlFor="lc-goods">Goods value</label><input id="lc-goods" inputMode="decimal" className={field} value={goods} onChange={(e) => setGoods(e.target.value)} /></div>
            <div><label className="label" htmlFor="lc-freight">Freight cost</label><input id="lc-freight" inputMode="decimal" className={field} value={freight} onChange={(e) => setFreight(e.target.value)} /></div>
            <div><label className="label" htmlFor="lc-ins">Insurance</label><input id="lc-ins" inputMode="decimal" className={field} value={ins} onChange={(e) => setIns(e.target.value)} /></div>
            <div><label className="label" htmlFor="lc-duty">Duty rate %</label><input id="lc-duty" inputMode="decimal" className={field} value={dutyRate} onChange={(e) => setDutyRate(e.target.value)} /></div>
            <div><label className="label" htmlFor="lc-tax">Tax rate % (GST/HST/VAT)</label><input id="lc-tax" inputMode="decimal" className={field} value={taxRate} onChange={(e) => setTaxRate(e.target.value)} /></div>
            <div><label className="label" htmlFor="lc-fees">Clearance & other fees</label><input id="lc-fees" inputMode="decimal" className={field} value={fees} onChange={(e) => setFees(e.target.value)} /></div>
            <div className="sm:col-span-2"><label className="label" htmlFor="lc-units">Number of units (optional)</label><input id="lc-units" inputMode="decimal" className={field} value={units} onChange={(e) => setUnits(e.target.value)} /></div>
          </div>
          <dl className="mt-7 space-y-2 border-t border-ink/10 pt-5 text-sm" aria-live="polite">
            <div className="flex justify-between"><dt className="text-steel">CIF value (goods + freight + insurance)</dt><dd className="font-medium">{money(cif)}</dd></div>
            <div className="flex justify-between"><dt className="text-steel">Duty @ {n(dutyRate)}%</dt><dd className="font-medium">{money(duty)}</dd></div>
            <div className="flex justify-between"><dt className="text-steel">Tax @ {n(taxRate)}% (on CIF + duty)</dt><dd className="font-medium">{money(tax)}</dd></div>
            <div className="flex justify-between"><dt className="text-steel">Fees</dt><dd className="font-medium">{money(n(fees))}</dd></div>
            <div className="mt-3 flex justify-between border-t border-ink/10 pt-3"><dt className="font-display font-bold">Total landed cost</dt><dd className="font-display text-lg font-extrabold text-cargo">{money(landed)}</dd></div>
            <div className="flex justify-between"><dt className="text-steel">Excluding recoverable tax</dt><dd className="font-medium">{money(landedExTax)}</dd></div>
            {perUnit > 0 && <div className="flex justify-between"><dt className="text-steel">Landed cost per unit</dt><dd className="font-medium">{money(perUnit)}</dd></div>}
          </dl>
          <p className="mt-5 text-xs leading-relaxed text-steel">
            Planning estimate only. Actual duty depends on HS classification, origin and trade agreements; GST/HST is generally recoverable for registered Canadian businesses. Ask us to confirm rates for your goods.
          </p>
        </div>

        {/* Chargeable weight */}
        <div className="rounded-sm border border-ink/10 p-7 lg:p-9" aria-labelledby="cw-h">
          <p className="eyebrow">Calculator 02</p>
          <h2 id="cw-h" className="h-display mt-2 text-2xl">Chargeable weight & volume</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Air freight charges the greater of actual vs volumetric weight (divisor 6,000 cm³/kg). Ocean LCL charges per revenue ton: the greater of CBM vs tonnes.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div><label className="label" htmlFor="cw-l">Length (cm)</label><input id="cw-l" inputMode="decimal" className={field} value={L} onChange={(e) => setL(e.target.value)} /></div>
            <div><label className="label" htmlFor="cw-w">Width (cm)</label><input id="cw-w" inputMode="decimal" className={field} value={W} onChange={(e) => setW(e.target.value)} /></div>
            <div><label className="label" htmlFor="cw-h2">Height (cm)</label><input id="cw-h2" inputMode="decimal" className={field} value={H} onChange={(e) => setH(e.target.value)} /></div>
            <div><label className="label" htmlFor="cw-q">Pieces</label><input id="cw-q" inputMode="decimal" className={field} value={qty} onChange={(e) => setQty(e.target.value)} /></div>
            <div className="sm:col-span-2"><label className="label" htmlFor="cw-a">Total actual weight (kg)</label><input id="cw-a" inputMode="decimal" className={field} value={actual} onChange={(e) => setActual(e.target.value)} /></div>
          </div>
          <dl className="mt-7 space-y-2 border-t border-ink/10 pt-5 text-sm" aria-live="polite">
            <div className="flex justify-between"><dt className="text-steel">Total volume</dt><dd className="font-medium">{cbm.toFixed(3)} CBM</dd></div>
            <div className="flex justify-between"><dt className="text-steel">Volumetric weight (air)</dt><dd className="font-medium">{volAir.toFixed(1)} kg</dd></div>
            <div className="flex justify-between"><dt className="text-steel">Actual weight</dt><dd className="font-medium">{n(actual).toFixed(1)} kg</dd></div>
            <div className="mt-3 flex justify-between border-t border-ink/10 pt-3"><dt className="font-display font-bold">Air chargeable weight</dt><dd className="font-display text-lg font-extrabold text-cargo">{chargeableAir.toFixed(1)} kg</dd></div>
            <div className="flex justify-between"><dt className="font-display font-bold">Ocean LCL revenue tons (W/M)</dt><dd className="font-display text-lg font-extrabold text-cargo">{revenueTons.toFixed(3)}</dd></div>
          </dl>
          <p className="mt-5 text-xs leading-relaxed text-steel">
            Some couriers and consolidators use different volumetric divisors (e.g. 5,000). Above roughly 13–15 CBM, compare LCL against FCL pricing — a full container is often cheaper.
          </p>
        </div>
      </div>
    </section>
  );
}

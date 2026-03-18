import { createMemo, createSignal } from "solid-js";

const HOURS_PER_DAY = 8;
const WORK_DAYS_PER_MONTH = 21;
const MONTHS_PER_YEAR = 12;
const WORK_HOURS_PER_MONTH = WORK_DAYS_PER_MONTH * HOURS_PER_DAY;
const WORK_DAYS_PER_YEAR = WORK_DAYS_PER_MONTH * MONTHS_PER_YEAR;
const WORK_HOURS_PER_YEAR = WORK_HOURS_PER_MONTH * MONTHS_PER_YEAR;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const parseMoney = (value: string) => {
  const parsed = Number.parseInt(value.replace(/\D/g, ""), 10);
  return Number.isFinite(parsed) ? parsed : 0;
};

const parseDays = (value: string) => {
  const parsed = Number.parseInt(value.replace(/\D/g, ""), 10);
  return Number.isFinite(parsed) ? clamp(parsed, 0, WORK_DAYS_PER_YEAR) : 0;
};

const formatNumber = (value: number) =>
  Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export default function PayCalculatorForm() {
  const [annualSuggested, setAnnualSuggested] = createSignal(302400);
  const [paidFreeDays, setPaidFreeDays] = createSignal(21);
  const [paidSickDays, setPaidSickDays] = createSignal(5);

  const totalPaidDays = createMemo(() =>
    clamp(paidFreeDays() + paidSickDays(), 0, WORK_DAYS_PER_YEAR),
  );

  const leaveValue = createMemo(() =>
    Math.round((annualSuggested() / WORK_DAYS_PER_YEAR) * totalPaidDays()),
  );

  const combinedYearly = createMemo(() => annualSuggested() + leaveValue());
  const combinedMonthly = createMemo(() =>
    Math.round(combinedYearly() / MONTHS_PER_YEAR),
  );
  const combinedHourly = createMemo(() =>
    Math.round(combinedYearly() / WORK_HOURS_PER_YEAR),
  );

  return (
    <>
      <section class="grid gap-6 lg:grid-cols-2">
        <article class="rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <h2 class="text-xl font-semibold text-neutral-900">
            Suggested Salary
          </h2>
          <p class="mt-1 text-sm text-neutral-600">
            Changing one value updates the other two.
          </p>

          <div class="mt-6 grid gap-4">
            <label class="grid gap-1">
              <span class="text-sm font-medium text-neutral-700">Per hour</span>
              <input
                type="text"
                inputMode="numeric"
                value={formatNumber(
                  Math.round(annualSuggested() / WORK_HOURS_PER_YEAR),
                )}
                onInput={(event) =>
                  setAnnualSuggested(
                    parseMoney(event.currentTarget.value) * WORK_HOURS_PER_YEAR,
                  )
                }
                class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-lg font-semibold text-neutral-900 outline-none focus:border-neutral-500"
              />
            </label>

            <label class="grid gap-1">
              <span class="text-sm font-medium text-neutral-700">
                Per month
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={formatNumber(
                  Math.round(annualSuggested() / MONTHS_PER_YEAR),
                )}
                onInput={(event) =>
                  setAnnualSuggested(
                    parseMoney(event.currentTarget.value) * MONTHS_PER_YEAR,
                  )
                }
                class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-lg font-semibold text-neutral-900 outline-none focus:border-neutral-500"
              />
            </label>

            <label class="grid gap-1">
              <span class="text-sm font-medium text-neutral-700">Per year</span>
              <input
                type="text"
                inputMode="numeric"
                value={formatNumber(annualSuggested())}
                onInput={(event) =>
                  setAnnualSuggested(parseMoney(event.currentTarget.value))
                }
                class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-lg font-semibold text-neutral-900 outline-none focus:border-neutral-500"
              />
            </label>
          </div>
        </article>

        <article class="rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <h2 class="text-xl font-semibold text-neutral-900">Paid Days</h2>
          <p class="mt-1 text-sm text-neutral-600">
            These are treated as extra paid days on top of the suggested rate.
          </p>

          <div class="mt-6 grid gap-4">
            <label class="grid gap-1">
              <span class="text-sm font-medium text-neutral-700">
                Paid free days / year
              </span>
              <input
                type="number"
                inputMode="numeric"
                min="0"
                max={WORK_DAYS_PER_YEAR}
                step="1"
                value={paidFreeDays()}
                onInput={(event) =>
                  setPaidFreeDays(parseDays(event.currentTarget.value))
                }
                class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-lg font-semibold text-neutral-900 outline-none focus:border-neutral-500"
              />
            </label>

            <label class="grid gap-1">
              <span class="text-sm font-medium text-neutral-700">
                Paid sick days / year
              </span>
              <input
                type="number"
                inputMode="numeric"
                min="0"
                max={WORK_DAYS_PER_YEAR}
                step="1"
                value={paidSickDays()}
                onInput={(event) =>
                  setPaidSickDays(parseDays(event.currentTarget.value))
                }
                class="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-lg font-semibold text-neutral-900 outline-none focus:border-neutral-500"
              />
            </label>
          </div>
        </article>
      </section>

      <section class="mt-8 rounded-2xl border border-neutral-200 bg-neutral-900 text-white p-6 shadow-lg">
        <h2 class="text-xl font-semibold">Combined Compensation</h2>
        <p class="mt-1 text-sm text-neutral-300">
          Suggested salary plus value of paid free + sick days.
        </p>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <article class="rounded-xl border border-white/10 bg-white/5 p-4">
            <p class="text-2xl font-bold">{formatNumber(combinedHourly())}</p>
            <p class="text-sm text-neutral-300">per hour</p>
          </article>
          <article class="rounded-xl border border-white/10 bg-white/5 p-4">
            <p class="text-2xl font-bold">{formatNumber(combinedMonthly())}</p>
            <p class="text-sm text-neutral-300">per month</p>
          </article>
          <article class="rounded-xl border border-white/10 bg-white/5 p-4">
            <p class="text-2xl font-bold">{formatNumber(combinedYearly())}</p>
            <p class="text-sm text-neutral-300">per year</p>
          </article>
        </div>

        <p class="mt-5 text-sm text-neutral-300">
          Paid days total: {totalPaidDays()}. Extra annual value from paid days:{" "}
          {formatNumber(leaveValue())}.
        </p>
      </section>
    </>
  );
}

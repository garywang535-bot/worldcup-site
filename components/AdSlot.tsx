type Variant = "top" | "inline" | "bottom";

const styles: Record<Variant, string> = {
  top: "min-h-[72px] border border-dashed border-slate-300 dark:border-slate-700 rounded-lg",
  inline:
    "min-h-[120px] border border-dashed border-slate-300 dark:border-slate-700 rounded-lg my-6",
  bottom:
    "min-h-[64px] border border-dashed border-slate-300 dark:border-slate-700 rounded-lg",
};

/** AdSense 预留位：不遮挡主内容、无弹窗 */
export function AdSlot({
  variant,
  label = "Advertisement",
}: {
  variant: Variant;
  label?: string;
}) {
  return (
    <aside
      role="note"
      aria-label={label}
      className={`flex items-center justify-center bg-slate-100/80 text-slate-500 text-xs dark:bg-slate-900/60 dark:text-slate-400 ${styles[variant]}`}
    >
      <span>{label} placeholder</span>
    </aside>
  );
}

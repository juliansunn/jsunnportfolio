"use client";

import { useState } from "react";

export function CopyCommand({ command }: { command: string }) {
  const [label, setLabel] = useState("Copy");
  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setLabel("Copied");
    } catch {
      setLabel("Select it");
    }
    setTimeout(() => setLabel("Copy"), 1600);
  }
  return (
    <div className="cmd">
      <code>{command}</code>
      <button type="button" onClick={copy} aria-label="Copy install command">
        <span aria-live="polite">{label}</span>
      </button>
    </div>
  );
}

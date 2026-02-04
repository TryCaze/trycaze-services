'use client';

import { ChangeEvent } from 'react';
import type { Part } from '@/data/inventory'; // Import Part interface

interface PartSelectProps {
  label: string;
  items: Part[]; // Use Part[] instead of INVENTORY[]
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const PartSelect = ({
  label,
  items,
  name,
  value,
  onChange,
}: PartSelectProps) => {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-white">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        <option value="">Odaberite {label.toLowerCase()}</option>
        {items.map((part, idx) => (
          <option
            key={idx}
            value={part.label}
            disabled={part.stock === 0}
          >
            {part.label}{' '}
            {part.stock > 0
              ? `(Na skladištu: ${part.stock})`
              : `(Nedostupno – ~${part.leadTimeDays ?? '?'} dana)`}
          </option>
        ))}
      </select>
    </div>
  );
};
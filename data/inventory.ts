// data/inventory.ts

// 1. Define Part interface
export interface Part {
  value: string;
  label: string;
  stock: number;
  leadTimeDays?: number;
  price?: number;
}

// 2. Define PartCategory type
export type PartCategory = 'cpu' | 'gpu' | 'ram' | 'storage' | 'case' | 'psu';

// 3. Define Inventory type (an object with PartCategory keys)
export type Inventory = Record<PartCategory, Part[]>;

// 4. The actual INVENTORY object
export const INVENTORY: Inventory = {
  cpu: [
    { value: 'i9-13900K', label: 'Intel Core i9-13900K', stock: 5, price: 2500 },
    { value: 'i7-13700K', label: 'Intel Core i7-13700K', stock: 8, price: 1800 },
    { value: 'r9-7950X', label: 'AMD Ryzen 9 7950X', stock: 3, price: 2700 },
    { value: 'r7-7700X', label: 'AMD Ryzen 7 7700X', stock: 10, price: 1600 },
  ],
  gpu: [
    { value: 'rtx4090', label: 'NVIDIA RTX 4090', stock: 2, price: 8500 },
    { value: 'rtx4080', label: 'NVIDIA RTX 4080', stock: 4, price: 5500 },
    { value: 'rx7900xtx', label: 'AMD RX 7900 XTX', stock: 3, price: 5200 },
    { value: 'rtx4070', label: 'NVIDIA RTX 4070', stock: 7, price: 3200 },
  ],
  ram: [
    { value: '32gb-ddr5', label: '32GB DDR5 6000MHz', stock: 12, price: 800 },
    { value: '64gb-ddr5', label: '64GB DDR5 6000MHz', stock: 5, price: 1500 },
    { value: '16gb-ddr4', label: '16GB DDR4 3200MHz', stock: 20, price: 400 },
    { value: '32gb-ddr4', label: '32GB DDR4 3200MHz', stock: 15, price: 600 },
  ],
  storage: [
    { value: '2tb-nvme', label: '2TB NVMe SSD', stock: 10, price: 900 },
    { value: '1tb-nvme', label: '1TB NVMe SSD', stock: 15, price: 500 },
    { value: '4tb-ssd', label: '4TB SATA SSD', stock: 6, price: 1200 },
    { value: '2tb-hdd', label: '2TB HDD 7200RPM', stock: 25, price: 300 },
  ],
  case: [
    { value: 'fractal-north', label: 'Fractal Design North', stock: 7, price: 1100 },
    { value: 'corsair-4000d', label: 'Corsair 4000D Airflow', stock: 10, price: 800 },
    { value: 'nzxt-h9', label: 'NZXT H9 Flow', stock: 4, price: 1300 },
    { value: 'lian-li-o11', label: 'Lian Li O11 Dynamic', stock: 8, price: 950 },
  ],
  psu: [
    { value: '1000w-gold', label: '1000W 80+ Gold', stock: 9, price: 1100 },
    { value: '850w-gold', label: '850W 80+ Gold', stock: 15, price: 750 },
    { value: '750w-gold', label: '750W 80+ Gold', stock: 12, price: 600 },
    { value: '1200w-platinum', label: '1200W 80+ Platinum', stock: 3, price: 1800 },
  ],
};
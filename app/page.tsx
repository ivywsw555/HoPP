"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import HousePriceTracker from './components/HousePriceTracker'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HousePriceTracker />
    </main>
  )
}
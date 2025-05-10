export function Card({ children }) {
  return <div className="rounded bg-white text-black p-4">{children}</div>;
}
export const CardContent = Card;
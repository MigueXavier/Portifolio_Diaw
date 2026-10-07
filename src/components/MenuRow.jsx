import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

export default function MenuRow({ items, onSelect }) {
  const [focused, setFocused] = useState(0);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight") setFocused((i) => Math.min(i + 1, items.length - 1));
      if (e.key === "ArrowLeft") setFocused((i) => Math.max(i - 1, 0));
      if (e.key === "Enter") onSelect(items[focused]);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, focused, onSelect]);

  return (
    <div className="menu-row">
      <div className="menu-track" style={{ "--focused": focused }}>
        {items.map((item, index) => (
          <MenuCard
            key={item.id}
            item={item}
            focused={index === focused}
            passed={index < focused}
            onClick={() => (index === focused ? onSelect(item) : setFocused(index))}
          />
        ))}
      </div>
    </div>
  );
}
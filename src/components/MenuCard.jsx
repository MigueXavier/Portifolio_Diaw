import PixelIcon from "./Pixelcons";


const SMALL = 96;
const BIG = 160;

export default function MenuCard({ item, focused, passed, onClick }) {
  const size = focused ? BIG : SMALL;
  const classes = ["menu-card", focused && "focused", passed && "passed"]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={{ "--card-color": item.color, "--icon": `${size}px` }}
      onClick={onClick}
    >
      <PixelIcon src={item.icon} size={size} color={focused ? item.color : "var(--text)"} />
      <span>{item.label}</span>
    </div>
  );
}
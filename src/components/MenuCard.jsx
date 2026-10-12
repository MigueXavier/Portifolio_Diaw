import PixelIcon from "./Pixelcons";

const SMALL = 96;
const BIG = 160;

export default function MenuCard({ item, focused, passed, onClick }) {
  const size = focused ? BIG : SMALL;
  const color = focused ? item.color : "var(--text)";
  const classes = ["menu-card", focused && "focused", passed && "passed"]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={{ "--card-color": item.color, "--icon": `${size}px` }}
      onClick={onClick}
    >
      {item.image ? (
        <div className="card-image">
          <img
            src={item.image}
            alt=""
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      ) : item.icon ? (
        <PixelIcon src={item.icon} size={size} color={color} />
      ) : (
        <div className="cover" style={{ width: size, height: size, color }}>
          {item.label[0]}
        </div>
      )}
      <span>{item.label}</span>
    </div>
  );
}
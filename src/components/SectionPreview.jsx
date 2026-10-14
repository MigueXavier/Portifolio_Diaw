import { menus } from "../data/menu.js";

export default function SectionPreview({ sectionId }) {
  const items = menus[sectionId] ?? [];
  if (items.length === 0) return null;

  return (
    <div className="preview" aria-hidden="true">
      {items.map((item) => (
        <div className="preview-card" key={item.id}>
          {item.image ? (
            <div className="card-image">
              <img src={item.image} alt="" />
            </div>
          ) : (
            <div className="cover">{item.label[0]}</div>
          )}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
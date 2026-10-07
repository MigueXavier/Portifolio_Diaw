export default function PixelIcon({ src, size = 128, color = "currentColor" }) {
  const style = {
    width: size,
    height: size,
    backgroundColor: color,
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    imageRendering: "pixelated",
  };
  return <div className="pixel-icon" style={style} />;
}
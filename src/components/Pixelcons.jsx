export default function PixelIcon({
  src,
  size = 128,
  width = size,
  height = size,
  color = "currentColor",
}) {
  const style = {
    width,
    height,
    backgroundColor: color,
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    imageRendering: "pixelated",
  };
  return <div className="pixel-icon" style={style} />;
}
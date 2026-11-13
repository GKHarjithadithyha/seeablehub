import { Code2 } from "lucide-react";

export function HeroArtwork() {
  return (
    <div
      className="hero-art"
      role="img"
      aria-label="Abstract layered violet panels with a software development symbol"
    >
      <div className="art-halo" />
      <div className="art-panel art-panel-back" />
      <div className="art-panel art-panel-side" />
      <div className="art-panel art-panel-front">
        <Code2 size={95} strokeWidth={1.4} />
      </div>
      <div className="art-orbit" />
    </div>
  );
}

export function PanelArtwork({ small = false }: { small?: boolean }) {
  return (
    <div className={`panel-art${small ? " panel-art-small" : ""}`} aria-hidden="true">
      <div className="panel-halo" />
      <div className="panel-shape panel-shape-back" />
      <div className="panel-shape panel-shape-front" />
    </div>
  );
}

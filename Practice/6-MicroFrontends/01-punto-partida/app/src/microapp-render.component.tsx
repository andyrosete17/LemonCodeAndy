import React from "react";

// Tipado común de la interfaz de Microapps.
type MicroappRenderFunction = (container: Element) => void;
type MicroappUnmountFunction = (container: Element) => boolean;

interface MicroappInterface {
  render: MicroappRenderFunction;
  unmount: MicroappUnmountFunction;
}

type RegisteredMicroapps = "MicroappClock" | "MicroappQuote";

// Componente Microapp Render
export interface MicroappRenderProps {
  microapp: RegisteredMicroapps;
}

export const MicroappRender: React.FC<MicroappRenderProps> = ({ microapp }) => {
  const containerRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    // Línea clave, ¿dónde puedo encontrar el interfaz de mi microapp cargada por <script>?
    // en el front si haces console.log(window) veras MicroappClock y la otra
    const microappInterface: MicroappInterface = window[microapp]?.MicroappInterface;
    microappInterface?.render(containerRef.current);

    return () => microappInterface?.unmount(containerRef.current);
  }, [microapp]);

  return <div ref={containerRef} />;
};

import Image from "next/image";

// Le vrai logo Caply (cadre de texte pointillé After Effects + "Caply" vectorisé).
// Source : presentation/logo-caply.svg
export default function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={dark ? "/logo-caply-blanc.svg" : "/logo-caply.svg"}
      alt="Caply"
      width={102}
      height={35}
      priority
      className={`h-8 w-auto ${className}`}
    />
  );
}

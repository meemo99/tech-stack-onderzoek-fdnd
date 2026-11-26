import getEras from "@/data/eras";
import Timeline from "@/components/organisms/Timeline";

export default async function Home() {
  const eras = await getEras();

  return <Timeline eras={eras} />;
}
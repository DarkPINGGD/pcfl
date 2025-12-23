import LevelTable from "@/components/LevelTable"

const levels = [
  { position: 1, name: "Acheron", creator: "Ryamu", verifier: "Zoink" },
  { position: 2, name: "Slaughterhouse", creator: "Icedcave", verifier: "Zoink" },
  { position: 76, name: "Artificial Ascent", creator: "ViPriN", verifier: "Riot" }
]

export default function Home() {
  return (
    <>
      <h1 className="title">Extreme Demon List</h1>
      <LevelTable levels={levels} />
    </>
  )
}

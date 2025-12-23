export default function LevelTable({levels}:any){
  return(
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Level</th>
          <th>Creator</th>
          <th>Verifier</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {levels.map((l:any)=>(
          <tr key={l.id}>
            <td>{l.position}</td>
            <td>{l.name}</td>
            <td>{l.creator}</td>
            <td>{l.verifier}</td>
            <td>{l.score.toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const PrintBox = ({ value }) => {
  return (
    <div
      style={{
        position: `fixed`,
        top: 0,
        left: 0,
        fontSize: 32,
        backgroundColor: `white`,
      }}
    >
      {value && value.split(`\n`).map((e) => <p>{e}</p>)}
    </div>
  )
}

export default PrintBox

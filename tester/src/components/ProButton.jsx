
const ProButton = ({label, onClick}) => {
  return (
    <button className="btn btn-primary bg-dashing-pink hover:bg-[#db5656] text-white border-dashing-pink hover:border-dashing-pink hover:text-[#c0c0c0]" onClick = {onClick}>
      {label}
      </button>
  )
}

export default ProButton
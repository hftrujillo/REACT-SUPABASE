const PinkButton = ({label}) => {
  return (
    <button class = "hover:bg-[#db5656] bg-dashing-pink text-white text-2xl rounded-lg hover:text-[#c0c0c0] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        {label}
    </button>
  )
}

export default PinkButton
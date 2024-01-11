const PinkButton = ({label}) => {
  return (
    <button className = "h-20 w-40 hover:bg-[#db5656] bg-dashing-pink text-white text-2xl rounded-full hover:text-[#c0c0c0] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        {label}
    </button>
  )
}

export default PinkButton
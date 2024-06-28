import PropTypes from "prop-types"

const EmptyResult = ({ title, icon: Icon }) => {
  return (
    <div className="px-10 py-12 flex-1 flex items-center justify-center gap-4 flex-col">
      <Icon className="size-20" />
      <h4 className="text-center font-medium">{title}</h4>
    </div>
  )
}

EmptyResult.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
}
export default EmptyResult

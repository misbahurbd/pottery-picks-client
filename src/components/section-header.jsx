import PropTypes from "prop-types"

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="w-full max-w-[640px] text-center mx-auto py-8">
      <h3 className="font-bold text-4xl text-foreground">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}
export default SectionHeader

const SectionTitle = ({title, m}) => {
  const margin = m || 'm-0';
  return (
      <div className={`w-full flex items-center justify-center ${margin}`}>
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 mb-2 relative pb-4">
              {title}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></span>
          </h3>
      </div>
  )
}

export default SectionTitle
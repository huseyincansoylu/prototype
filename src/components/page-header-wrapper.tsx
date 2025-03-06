import React from "react"

interface PageHeaderWrapperProps {
  children: React.ReactNode
}

const PageHeaderWrapper: React.FC<PageHeaderWrapperProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 p-4 mb-6">
      {children}
    </div>
  )
}

export default PageHeaderWrapper

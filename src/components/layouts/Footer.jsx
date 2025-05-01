import React from 'react'

function Footer() {
  const dt = new Date()
  const year = dt.getFullYear()
  return (
<div>
<footer className="bg-primary p-4 text-center bottom-0 left-0 w-full">
    <p className="text-cyan-800">© {year} Reader Website. All rights reserved.</p>
  </footer>
</div>
  )
}

export default Footer
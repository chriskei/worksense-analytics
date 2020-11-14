import React from 'react'
import { colors } from '../../assets/colors.js'

export default ({ children }) => (
  <div style={{ margin: '0 0', backgroundColor: `${colors.tan}` }}>
    {children}
  </div>
)

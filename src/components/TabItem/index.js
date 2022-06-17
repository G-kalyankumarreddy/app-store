import './index.css'

const TabItem = props => {
  const {tab, activeTabId, isActive} = props
  const {displayText, tabId} = tab
  const buttonStyling = isActive ? 'active-button' : ''
  const changeTabId = () => {
    activeTabId(tabId)
  }
  return (
    <li className="tabs">
      <button
        type="button"
        className={`button ${buttonStyling}`}
        onClick={changeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

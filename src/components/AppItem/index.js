import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app
  return (
    <li className="app-holder">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem

import { Link } from "~node_modules/react-router-dom/dist"
import { useLocation } from "~node_modules/react-router/dist"

export default function Navigation() {
  const location = useLocation()

  return (
    <nav>
      <Link to="/">Интро</Link>
      <Link to="/template">Редактор шаблона</Link>
    </nav>
  )
}

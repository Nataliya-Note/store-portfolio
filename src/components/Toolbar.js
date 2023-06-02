const classNames = require('classnames');

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <nav className="nav">
      <ul className="nav-menu">
        {filters.map((filter, index) => {
          const baseClass = classNames({
            'nav-link': true,
            active: filter === selected,
          });

          return (
            <li className="nav-item" key={`${index}${filter}`}>
              <a
                href="#"
                className={baseClass}
                onClick={() => onSelectFilter(filter)}
              >
                {filter}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
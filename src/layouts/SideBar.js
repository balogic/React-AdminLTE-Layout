import React from 'react'
function SideBar(props) {
  const items = props.items
  return (<aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu" data-widget="tree">
      </ul>
    </section>
  </aside>)
}
export default SideBar;

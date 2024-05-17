import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>nuoa.io</h1>
      </div>
      <div className="menu">
        <a href="/" className="menu-item active">
          <i className="fas fa-home"></i> Home
        </a>
        <a href="/my- pcfs" className="menu-item">
          <i className="fas fa-user"></i> My PCFs
        </a>
        <a href="/browse-pcfs" className="menu-item">
          <i className="fas fa-search"></i> Browse PCFs
        </a>
        <a href="/requested-pcfs" className="menu-item">
          <i className="fas fa-folder-open"></i> Requested PCFs
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
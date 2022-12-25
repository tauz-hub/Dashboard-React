import './Sidebar.css'
import logo from '../../assets/perfil.png'


const sideBar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className='sidebar__tutle'>
        <div className='sidebar__img'>
          <img src={logo} alt="logo" />
          <h1>Tauã Ferreira</h1>

        </div>

        <i onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"> </i>
      </div>


      <div className='sidebar__menu'>
        <div className='sidebar__link active_menu_link'>
          <i className='fa fa-minus-square'></i>
          <a href='#home'>home</a>

        </div>
        <h2>ADMIN</h2>
        <div className='sidebar__link'>
          <i className='fa fa-camera-retro'></i>
          <a href='#aadm'>Área administrativa</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-building'></i>
          <a href='#lojas'>Lojas</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-archive'></i>
          <a href='#produtos'>Produtos</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-bars'></i>
          <a href='#categorias'>Categorias</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-cutler'></i>
          <a href='#pedidos'>Pedidos</a>

        </div>
        <h2>PESSOAS</h2>
        <div className='sidebar__link'>
          <i className='fa fa-male'></i>
          <a href='#adms'>Administradores</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-money'></i>
          <a href='#users'>Usuários</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-money'></i>
          <a href='#pagamentos'>Pagamentos e Custos</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-tasks'></i>
          <a href='#plataforma'>A plataforma</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-file-text'></i>
          <a href='#politica'>Politica de privacidade</a>

        </div>
        <div className='sidebar__link'>
          <i className='fa fa-power-off'></i>
          <a href='#logout'>Log out</a>

        </div>

      </div>

    </div>
  )

}

export default sideBar;
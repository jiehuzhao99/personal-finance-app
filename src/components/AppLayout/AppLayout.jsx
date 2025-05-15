import styles from './AppLayout.module.css';

import Sidebar from '../Sidebar/Sidebar.jsx';
import SidebarMobile from '../Sidebar/SidebarMobile.jsx';
import Topbar from '../Topbar/Topbar.jsx';
import MainContent from '../MainContent/MainContent.jsx';

function AppLayout({}) {
  return (
    <div className={styles.appLayout}>
        <SidebarMobile />
        <div className={styles.contentArea}>
            <Topbar />
            <div className={styles.mainContent}>
                <MainContent/>
            </div>
        </div>
    </div>
  );
}
export default AppLayout;

import styles from './SidebarMobile.module.css';
import { useState } from 'react';

// icons
import budgetIcon from '../../assets/icon-nav-budgets.svg';
import overviewIcon from '../../assets/icon-nav-overview.svg';
import transactionsIcon from '../../assets/icon-nav-transactions.svg';
import potsIcon from '../../assets/icon-nav-pots.svg';
import recurringBillsIcon from '../../assets/icon-nav-recurring-bills.svg';

function SidebarMobile({}) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
        <nav className={styles.navContainer}>
            <div className={styles.navItem}>
                <img src={overviewIcon} className="" alt="overview" />
            </div>
            <div className={styles.navItem}>
                <img src={transactionsIcon} className="" alt="overview" />
            </div>
            <div className={styles.navItem}>
                <img src={budgetIcon} className="" alt="overview" />
            </div>
            <div className={styles.navItem}>
                <img src={potsIcon} className="" alt="overview" />
            </div>
            <div className={styles.navItem}>
                <img src={recurringBillsIcon} className="" alt="overview" />
            </div>
        </nav>
  );
}
export default SidebarMobile;
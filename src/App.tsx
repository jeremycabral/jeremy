import { Outlet, useLocation } from 'react-router-dom';
import { ChatWidget } from './components/ChatWidget';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <ChatWidget />
    </>
  );
}

export default AppLayout;

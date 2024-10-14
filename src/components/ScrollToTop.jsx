// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // ใช้ useLocation เพื่อเข้าถึง path ที่กำลังใช้งาน

  useEffect(() => {
    window.scrollTo(0, 0); // เลื่อนหน้าไปด้านบนสุด
  }, [pathname]); // เรียกใช้ useEffect ทุกครั้งที่ pathname เปลี่ยนแปลง

  return null;
};

export default ScrollToTop;

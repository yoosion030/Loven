import * as S from './style';
interface ChildrenProps {
  children: React.ReactNode;
}
const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Layout;

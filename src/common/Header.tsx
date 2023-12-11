interface Header {
  text?: string;
}

function Header({ text = '헤더 컴포넌트' }: Header) {
  return <header>{text}</header>;
}

export default Header;

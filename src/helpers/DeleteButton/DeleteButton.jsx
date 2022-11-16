function DeleteButton({ stylesBtn, onClick, id }) {
  return <button className={stylesBtn} onClick={() => onClick(id)}></button>;
}

export { DeleteButton };

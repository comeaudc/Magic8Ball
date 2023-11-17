function TryAgain(props) {

  function handleClick() {
    props.setCounter(props.counter + 1)
  }

  return <button onClick={handleClick}>TryAgain</button>;
}

export default TryAgain;

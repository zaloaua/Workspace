function Button() {
	const[counter, setCounter]= useState(0)
  return (
  <button onClick={() => setCounter(counter+1)}>
    {counter}
    </button>
  );
}

ReactDOM.render(
  <div>
    <Navigation/>
    <Button />
    </div>,
  document.getElementById('mountNode'),
);

function Navigation(){
  
  return (
    <navigation>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Tutorial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </navigation>
  );


}